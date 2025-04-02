import { useState } from "react";
import {
  HStack,
  Text,
  Button,
  Flex,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useWebsiteControls } from "@/hooks/services/website/useWebsiteControls";
import DynamicInput from "@/components/DynamicInput";
import ReCAPTCHA from "react-google-recaptcha";
import config from "@/config/index";

const CreateBCWebsiteModal = ({ isOpen, onClose ,profilePhoto, businessCardLogo, coverPhoto,firstName,lastName,genderPronouns,jobTitle,businessName,businessAddress,businessDescription,selectedPrimaries,selectedSecondaries}) => {
  const { createBusinessCard, isCreatingWebsite, creationInputState, recaptchaRef } =
    useWebsiteControls();
  const [route, setRoute] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("https://app.sigdao.io/assets/logo.png");
  const [script, setScript] = useState("");
  const [embed, setEmbed] = useState("");
  const [favicon, setFavicon] = useState("https://app.sigdao.io/favicon.ico");
  const [robot, setRobot] = useState("");
  const [language, setLanguage] = useState("");
  const [pinataAPIkey, setPinataAPIkey] = useState('');
  const [pinataGateway, setPinataGateway] = useState('');
  const [pinataToken, setPinataToken] = useState('');
  
  async function pinFileToIPFS(filename,image,pinataJWT) {
    try {
      const dateString = new Date().toISOString();
      console.log("dateString:", dateString)
      const blob = new Blob([image], {type: "image/png"});
      const file  = new File([blob], `${filename}_${dateString}.png` ,  {type: "image/png"})
      console.log("file: " , file )
      const data = new FormData();
      data.append("file", file);
  
      const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", { 
        method: "POST",
        headers: {
          Authorization: `Bearer ${pinataJWT}`,
        },
        body: data,
      });
      const resData = await res.json();
      console.log(resData);
      return resData;
    } catch (error) {
      console.log(error);
    }
};

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="3xl"
      scrollBehavior="inside"
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a Business Card Website</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDir="column" maxH="530px">
          <HStack alignItems="center" w="full">
            <Text fontSize="10pt">Website Information</Text>
            <Divider flex="1" />
          </HStack>
          <HStack mt="1em">
            <DynamicInput
              id="title"
              name="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={setTitle}
              helperText="Display title of your minting website"
              isInvalid={creationInputState?.title?.status}
              errorText={creationInputState?.title?.message}
              flex="1"
            />
            {/* <DynamicInput
              id="language"
              name="language"
              type="language"
              placeholder="Language"
              value={language}
              onChange={setLanguage}
              helperText="Website's content language"
            /> */}
          </HStack>
          <DynamicInput
            id="description"
            name="description"
            type="textarea"
            placeholder="Description"
            value={description}
            onChange={setDescription}
            helperText="Short description of your minting website"
            isInvalid={creationInputState?.description?.status}
            errorText={creationInputState?.description?.message}
            rows={5}
            mt="1em"
          />
          <HStack alignItems="center" w="full" mt="2em">
            <Text fontSize="10pt">Media</Text>
            <Divider flex="1" />
          </HStack>
          <HStack mt="1em">
            <DynamicInput
              id="favicon"
              name="favicon"
              type="text"
              placeholder="Favicon URL"
              value={favicon}
              onChange={setFavicon}
              helperText="External link of Icon in your browser's tab"
              isInvalid={creationInputState?.favicon?.status}
              errorText={creationInputState?.favicon?.message}
              flex="1"
            />
            <DynamicInput
              id="logo"
              name="logo"
              type="text"
              placeholder="Logo URL"
              value={logo}
              onChange={setLogo}
              helperText="External link of logo of your minting website"
              isInvalid={creationInputState?.logo?.status}
              errorText={creationInputState?.logo?.message}
              flex="1"
            />
          </HStack>
          {/* <HStack alignItems="center" w="full" mt="2em">
            <Text fontSize="10pt">Code</Text>
            <Divider flex="1" />
          </HStack> */}
          {/* <HStack mt="1em">
            <DynamicInput
              id="script"
              name="script"
              type="textarea"
              placeholder="Style or Script code"
              value={script}
              onChange={setScript}
              helperText="Script or Style code of a third-party website"
              isInvalid={creationInputState?.script?.status}
              errorText={creationInputState?.script?.message}
              rows={5}
              flex="1"
            />
            <DynamicInput
              id="embed"
              name="embed"
              type="textarea"
              placeholder="Embed code"
              value={embed}
              onChange={setEmbed}
              helperText="Embed code of a third-party website"
              isInvalid={creationInputState?.embed?.status}
              errorText={creationInputState?.embed?.message}
              rows={5}
              flex="1"
            />
          </HStack> */}
          <HStack alignItems="center" w="full" mt="2em">
            <Text fontSize="10pt">SEO</Text>
            <Divider flex="1" />
          </HStack>
          <DynamicInput
            id="robot"
            name="robot"
            type="select"
            placeholder="SEO Robot Configuration"
            value={robot}
            onChange={setRobot}
            helperText="Tells search engines what to follow and what not to follow"
            selectData={[
              { value: "if", text: "index, follow" },
              { value: "nf", text: "noindex, follow" },
              { value: "in", text: "index, nofollow" },
              { value: "nn", text: "noindex, nofollow" },
            ]}
            mt="1em"
          />

            <HStack mt="1em">
            <DynamicInput
              id="Pinata API key"
              name="Pinata API key"
              type="text"
              placeholder="Pinata API key"
              value={pinataAPIkey}
              onChange={setPinataAPIkey}
              helperText="Please Pinata API key for Uploading image to IPFS. Also, We will never own your API key"
              // isInvalid={creationInputState?.title?.status}
              // errorText={creationInputState?.title?.message}
              flex="1"
            />
            {/* <DynamicInput
              id="language"
              name="language"
              type="language"
              placeholder="Language"
              value={language}
              onChange={setLanguage}
              helperText="Website's content language"
            /> */}
          </HStack>

          <HStack mt="1em">
            <DynamicInput
              id="Pinata Gateway"
              name="Pinata Gateway"
              type="text"
              placeholder="Pinata Gateway"
              value={pinataGateway}
              onChange={setPinataGateway}
              helperText="The URLs through which you can fetch content from IPFS. You may find the URLs in Pinata's dashboard"
              // isInvalid={creationInputState?.title?.status}
              // errorText={creationInputState?.title?.message}
              flex="1"
            />
            {/* <DynamicInput
              id="language"
              name="language"
              type="language"
              placeholder="Language"
              value={language}
              onChange={setLanguage}
              helperText="Website's content language"
            /> */}
          </HStack>

          {/* eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwNWQ4Njk5My0zMjgyLTQzYTAtOTUxNi02ZjYyZGM3ODY2MzciLCJlbWFpbCI6Im1hbnNodW53aW5nQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiMDRlNjAwY2E2NzE4ZDkyYjA1OSIsInNjb3BlZEtleVNlY3JldCI6Ijg3YTdmYzZkNTQ4OWE1OWIxNWJkMTA1N2RiZTBlNTVmZDg3ODhjNmMyNWM0YmNhOWUyMzAyY2VmYTFmNjc1MWIiLCJpYXQiOjE3MTY5NzE0OTV9.z7naksXNQHq2pzpm-wnJPEBgFsKbP1FIDYcuC1YQ_2Q */}


          <HStack mt="1em">
            <DynamicInput
              id="Pinata Token"
              name="Pinata Token"
              type="text"
              placeholder="Pinata Token"
              value={pinataToken}
              onChange={setPinataToken}
              helperText="The URLs through which you can fetch content from IPFS. You may find the URLs in Pinata's dashboard"
              // isInvalid={creationInputState?.title?.status}
              // errorText={creationInputState?.title?.message}
              flex="1"
            />
            {/* <DynamicInput
              id="language"
              name="language"
              type="language"
              placeholder="Language"
              value={language}
              onChange={setLanguage}
              helperText="Website's content language"
            /> */}
          </HStack>
          <HStack alignItems="center" w="full" mt="2em">
            <Text fontSize="10pt">Misc</Text>
            <Divider flex="1" />
          </HStack>
          <DynamicInput
            id="path"
            name="path"
            type="text"
            placeholder="Route"
            value={route}
            onChange={setRoute}
            helperText="Your website url"
            isInvalid={creationInputState?.route?.status}
            errorText={creationInputState?.route?.message}
            mt="1em"
            maxW="380px"
            addonLeft
            addonLeftText={`${config?.frontendUrl}/businesscard/`}
            textTransform="lowercase"
          />
          <Flex mt="2em" alignItems="center" flexDir="column">
            {/* <Text fontSize="10pt" mb=".5em">
              Verify that you are a human
            </Text> */}
            {/* <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={config?.recaptcha?.siteKey}
              onExpired={() => {
                toast({ description: "ReCaptcha has expired" });
              }}
              onErrored={() => {
                toast({ description: "ReCaptcha network issue" });
              }}
            /> */}
          </Flex>
        </ModalBody>
        <ModalFooter>
          <HStack>
            <Button size="sm" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={async () => {
            
                const stringPrimaries = selectedPrimaries.map(obj => JSON.stringify(obj));
                const stringSecondaries = selectedSecondaries.map(obj => JSON.stringify(obj));
                const result = stringPrimaries.map(obj => JSON.parse(obj))

                // createBusinessCard({
                //   route,
                //   title,
                //   description,
                //   logo,
                //   script,
                //   embed,
                //   favicon,
                //   robot,
                //   language,
                //   onClose: onClose,
                //   businessCard: {profilePhoto, businessCardLogo,coverPhoto,firstName,lastName,genderPronouns,jobTitle,businessName,businessAddress,businessDescription,selectedPrimaries:stringPrimaries,selectedSecondaries:stringSecondaries}
                // });
                
                console.log(pinataAPIkey,pinataGateway,profilePhoto, businessCardLogo,coverPhoto,firstName,lastName,genderPronouns,jobTitle,businessName,businessAddress,businessDescription,stringPrimaries,stringSecondaries)
                const pinProfileRes = await pinFileToIPFS("profilePhoto", profilePhoto, pinataAPIkey);
                const pinLogoRes = await pinFileToIPFS("businessCardLogo", businessCardLogo, pinataAPIkey);
                const pinCoverRes = await pinFileToIPFS("coverPhoto", coverPhoto, pinataAPIkey);
                if (pinProfileRes && pinLogoRes && pinCoverRes){
                createBusinessCard({
                  route,
                  title,
                  description,
                  logo,
                  script,
                  embed,
                  favicon,
                  robot,
                  language,
                  onClose: onClose,
                  businessCard: {profilePhoto : pinProfileRes.IpfsHash,
                     businessCardLogo : pinLogoRes.IpfsHash,
                     coverPhoto : pinCoverRes.IpfsHash,
                     firstName,
                     lastName,
                     genderPronouns,
                     jobTitle,
                     businessName,
                     businessAddress,
                     businessDescription,
                     selectedPrimaries:stringPrimaries,
                     selectedSecondaries:stringSecondaries,
                     pinataGateway,
                     pinataToken,
                    }
                });
                  console.log("uploaded IPFS")
                }else {
                disabled={isCreatingWebsite}
                isLoading={isCreatingWebsite}
                loadingText="Creating"}
              }}
            >
              Create
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateBCWebsiteModal;
