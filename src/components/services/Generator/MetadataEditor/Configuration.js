import {
  Box,
  HStack,
  Text,
  Flex,
  Button,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  Tag,
  TagCloseButton,
  FormHelperText,
  useColorModeValue,
  Radio,
  RadioGroup,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from '@chakra-ui/icons'
import { IoMdAdd } from "@react-icons/all-files/io/IoMdAdd";
import { useGenerator } from "@/providers/GeneratorProvider";
import { useMetadata } from "@/hooks/services/generator/useMetadata";
import { webColor } from "@/theme/index";
import { useState, useMemo } from "react";
const Configuration = () => {
  const {
    name,
    setName,
    description: desc,
    setDescription,
    externalURL,
    setExternalURL,
    standardType,
    collectionSize,
    setCollectionSize,
    symbol,
    setSymbol,
    creatorAddress,
    setCreatorAddress,
    sellerFee,
    setSellerFee,
    creatorShare,
    setCreatorShare,
    creators,
    storageURL,
    setStorageURL,
    animationURL,
    setAnimationURL,
    youtubeURL,
    setYoutubeURL,
    backgroundColor,
    setBackgroundColor,
     //for signum wallet 
     royalties,
     setRoyalties,
     attributes,
     setAttributes,
     nftTypes,
     setNftTypes,
     edition,
     setEdition,
     identifier,
     setIdentifier,
     officialWeb,
     setOfficialWeb,
     socialPlatform,
     setSocialPlatform,
     attribute1,
     setAttribute1,
     attribute2,
     setAttribute2,
     attribute3,
     setAttribute3,
     attribute4,
     setAttribute4,
     attribute5,
     setAttribute5,
     attribute6,
     setAttribute6,
     attribute7,
     setAttribute7,
     attribute8,
     setAttribute8,
     signumAttributes,
     setSignumAttributes,
     listingMode,
     setlistingMode,
     price,
     setPrice,
     offerPrice,
     setOfferPrice,
     auctionEnd,
     setAuctionEnd,
     numOfAttributes,
     updateNum,
     attributeType,
     setAttributeType,
     attributeName,
     setAttributeName,
  } = useGenerator();
  const { AddCreator, DeleteCreator } = useMetadata();

  const containerColor = useColorModeValue(
    webColor.containerBg[0],
    webColor.containerBg[1],
  );
  const componentColor = useColorModeValue(
    "rgba(0,0,0,0.1)",
    "rgba(0,0,0,0.5)",
  );
  const addAttribute = (type, name) => {
    if (numOfAttributes <= 8) {
      if (type != "" && name != "") {
        let newAttribute = type + ":" + name;
        setSignumAttributes(signumAttributes => [...signumAttributes, newAttribute])
        console.log(signumAttributes);
        setAttributeType("");
        setAttributeName("");
        updateNum(numOfAttributes + 1)
      }
    }
  }
  const returnType = (attribute) => {
    let attributeArray = attribute.split(":");
    return attributeArray[0];
  }
  const returnName = (attribute) => {
    let attributeArray = attribute.split(":");
    return attributeArray[1];
  }
  const removeAttribute = (deleteIndex) => {
    setSignumAttributes(signumAttributes.filter((oldAttribute, index) => index !== deleteIndex))
    updateNum(numOfAttributes - 1)
    console.log(signumAttributes);
  }
  const isDisplay = (component) =>
    standardType?.components?.includes(component);
  const setAttributeTypeFunc = (value) => {
    setAttributeType(value);
  }
  const setAttributeNameFunc = (value) => {
    setAttributeName(value);
  }
  const listingModeChange = useMemo(() => {
  if (listingMode === "NotForSale"){
    setPrice(0);
    setOfferPrice(0);
    setAuctionEnd("");
    console.log(price)
    console.log(offerPrice)
    console.log(auctionEnd)
  }
  if (listingMode === "FixedPrice"){
    setOfferPrice(0);
    setAuctionEnd("");
    console.log(price)
    console.log(offerPrice)
    console.log(auctionEnd)
  }
  if (listingMode === "NotForSale"){
    setPrice(0);
    setOfferPrice(0);
    setAuctionEnd("");
    console.log(price)
    console.log(offerPrice)
    console.log(auctionEnd)
  }
  }, [listingMode]);

  return (
    <Flex
      flexDir="column"
      spacing="1.5em"
      p="1em"
      bg={containerColor}
      borderRadius=".25em"
      alignItems="flex-start"
      flex="1"
    >
      <Text fontWeight="bold" fontSize="10pt">
        Configuration
      </Text>
      <Text fontSize="9pt">
        Current Standard:{" "}
        <span style={{ color: "rgb(52,140,212)" }}>{standardType?.name}</span>
      </Text>
      <Text fontSize="9pt" mb="1em">
        Fields with * are required. Otherwise, leave it empty if you want.<div><br /></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Text>
      {isDisplay("name") && (
        <HStack w="full">
          <FormControl flex="1">
            <Input
              id="collectionName"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormHelperText fontSize="9pt">
              Name of NFT Collection.
            </FormHelperText>
          </FormControl>
          {isDisplay("size") && (
            <FormControl flex="1">
              <NumberInput
                min={1}
                max={10000}
                value={collectionSize}
                onChange={setCollectionSize}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormHelperText fontSize="9pt">
                Size of NFT Collection.
              </FormHelperText>
            </FormControl>
          )}
        </HStack>
      )}
      {isDisplay("symbol") && (
        <HStack alignItems="flex-start" mt="1em" w="full">
          <FormControl flex="1">
            <Input
              id="collectionSymbol"
              placeholder="Symbol"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
            />
            <FormHelperText fontSize="9pt">
              Symbol of your NFT Collection.
            </FormHelperText>
          </FormControl>
          {isDisplay("seller_fee_basis_points") && (
            <FormControl flex="1">
              <NumberInput
                id="collectionSellerFee"
                min={1}
                max={1000}
                value={sellerFee}
                onChange={setSellerFee}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormHelperText fontSize="9pt">
                Royalties percentage awarded to creators. Shown as a percentage
                received by each co-creator.
              </FormHelperText>
            </FormControl>
          )}
        </HStack>
      )}

      {isDisplay("description") && (
        <FormControl mt="1em">
          <Textarea
            id="collectionDescription"
            placeholder="Description*"
            w="full"
            rows="5"
            value={desc}
            onChange={(e) => setDescription(e.target.value)}
          />
          <FormHelperText fontSize="9pt">
            Short Description of your NFT Collection. Markdown is supported.
          </FormHelperText>
        </FormControl>
      )}

      {isDisplay("royalties") && (
        <HStack alignItems="flex-start" mt="1em" w="full">
          <FormControl flex="1em">
            <NumberInput
              min={0}
              max={25}
              value={royalties}
              onChange={setRoyalties}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText fontSize="9pt">
              The royalties in percent you earn when sold
            </FormHelperText>
          </FormControl>

        </HStack>
      )}

      {isDisplay("edition") && (
        <HStack w="full">
          <FormControl flex="1">
            <Input
              id="collectionEdition"
              placeholder="Edition"
              value={edition}
              onChange={(e) => setEdition(e.target.value)}
            />
            <FormHelperText fontSize="9pt">
              A alphanumeric Edition.
            </FormHelperText>
          </FormControl>
        </HStack>
      )}

      {isDisplay("identifier") && (
        <HStack w="full">
          <FormControl flex="1">
            <Input
              type="number"
              id="collectionIdentifier"
              placeholder="#Identifier"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />
            <FormHelperText fontSize="9pt">
              Some numeric identifier, usually an incremental value
            </FormHelperText>
          </FormControl>
        </HStack>
      )}
      {isDisplay("image") && (
        <FormControl mt="1em">
          <Input
            id="collectionUrl"
            placeholder="Image Storage URL"
            w="full"
            value={storageURL}
            onChange={(e) => setStorageURL(e.target.value)}
          />
          <FormHelperText fontSize="9pt">
            {/* This is the External URL to the image of the item. Can be just about
            any type of image, and can be IPFS URLs or paths. This could be left
            blank because most contract deployers update the image key
            automatically when uploading your metadata to ipfs. */}
            The absolute file path to the first image. Example: /home/ohager/Desktop/generated-cute-monstas/4.png
            (Posix and Windows paths are possible)
          </FormHelperText>
        </FormControl>
      )}
      {isDisplay("external_url") && (
        <FormControl mt="1em">
          <Input
            id="collectionExternalUrl"
            placeholder="External URL"
            w="full"
            value={externalURL}
            onChange={(e) => setExternalURL(e.target.value)}
          />
          <FormHelperText fontSize="9pt">
            This is the URL that will appear below the asset&apos;s image on
            OpenSea and will allow users to leave OpenSea and view the item on
            your site. URL to an external application or website where users can
            also view the asset.
          </FormHelperText>
        </FormControl>
      )}
      {isDisplay("background_color") && (
        <FormControl mt="1em">
          <Input
            id="collectionBackgroundColor"
            placeholder="Background Color"
            w="full"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
          <FormHelperText fontSize="9pt">
            Background color of the item on OpenSea. Must be a six-character
            hexadecimal without a pre-pended #.
          </FormHelperText>
        </FormControl>
      )}
      {isDisplay("animation_url") && (
        <FormControl mt="1em">
          <Input
            id="collectionAnimationUrl"
            placeholder="Animation URL"
            w="full"
            value={animationURL}
            onChange={(e) => setAnimationURL(e.target.value)}
          />
          <FormHelperText fontSize="9pt">
            A URL to a multi-media attachment for the item. The file extensions
            GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with
            the audio-only extensions MP3, WAV, and OGA. Animation_url also
            supports HTML pages, allowing you to build rich experiences and
            interactive NFTs using JavaScript canvas, WebGL, and more. Scripts
            and relative paths within the HTML page are now supported. However,
            access to browser extensions is not supported.
          </FormHelperText>
        </FormControl>
      )}
      {isDisplay("youtube_url") && (
        <FormControl mt="1em">
          <Input
            id="collectionYoutubeUrl"
            placeholder="Youtube URL"
            w="full"
            value={youtubeURL}
            onChange={(e) => setYoutubeURL(e.target.value)}
          />
          <FormHelperText fontSize="9pt">
            A URL to a YouTube video.
          </FormHelperText>
        </FormControl>
      )}
      {isDisplay("officialWeb") && (
        <FormControl mt="1em">
          <Input
            id="collectionYoutubeUrl"
            placeholder="Official Website"
            w="full"
            value={officialWeb}
            onChange={(e) => setOfficialWeb(e.target.value)}
          />
          <FormHelperText fontSize="9pt">
            Add links to your official websites.
          </FormHelperText>
        </FormControl>
      )}
      {isDisplay("socialPlatform") && (
        <FormControl mt="1em">
          <Input
            id="collectionYoutubeUrl"
            placeholder="Social Platform"
            w="full"
            value={socialPlatform}
            onChange={(e) => setSocialPlatform(e.target.value)}
          />
          <FormHelperText fontSize="9pt">
            Add links to your social platforms.
          </FormHelperText>
        </FormControl>
      )}
      {isDisplay("compiler") && (
        <FormControl mt="1em">
          <Input
            id="collectionCompiler"
            w="full"
            value="https://ihost.app/"
            readOnly
            disabled
          />
          <FormHelperText fontSize="9pt">
            Compiler of your NFT Collection.
          </FormHelperText>
        </FormControl>
      )}

      {
        isDisplay("signumAttributes") && signumAttributes && signumAttributes.map((attribute, index) => (
          <HStack w="full" mt="1em" key={attribute+index}>
            <FormControl flex="1"  >
              <Input
                id={"showAttributeType" + index}
                value={returnType(attribute)}
                readOnly
                disabled
              />
            </FormControl>
            <FormControl flex="1"  >
              <Input
                id={"showAttributeName" + index}
                value={returnName(attribute)}
                readOnly
                disabled
              />
            </FormControl>
            <FormControl flex="1"  >
              <IconButton
                id={"Delete" + index}
                colorScheme='blue'
                aria-label='Search database'
                icon={<CloseIcon />}
                onClick={(e) => removeAttribute(index)}
              />
            </FormControl>

          </HStack>
        ))
      }

      {isDisplay("signumAttributes") && (numOfAttributes < 8) && (
        <>
          <HStack w="full" mt="1em">
            <FormControl flex="1">
              <Input
                id="collectionAttributeType"
                placeholder="Example: Color"
                value={attributeType}
                onChange={(e) => setAttributeTypeFunc(e.target.value)}
              />
              <FormHelperText fontSize="9pt">
                Type of attribute
              </FormHelperText>
            </FormControl>
            <FormControl flex="1">
              <Input
                id="collectionAttributeName"
                placeholder="Example: Green"
                value={attributeName}
                onChange={(e) => setAttributeNameFunc(e.target.value)}
              />
              <FormHelperText fontSize="9pt">
                Name of attribute
              </FormHelperText>
            </FormControl>
            <FormControl flex="1">
              <IconButton
                colorScheme='blue'
                aria-label='Search database'
                icon={<AddIcon />}
                onClick={(e) => addAttribute(attributeType, attributeName)}
              />
              <FormHelperText fontSize="9pt">
                &nbsp;
              </FormHelperText>
            </FormControl>

          </HStack>
          <HStack w="full" >
            <FormControl >
              <FormHelperText fontSize="9pt">
                The attribute/trait of the NFTs. This value is used to calculate rarities within a collection. It is a key-value tuple and each NFT can have up to eight attributes
              </FormHelperText>
            </FormControl>
          </HStack>
        </>
      )}

      {isDisplay("listingMode") && (
        <HStack w="full" mt="1em">
          <FormControl flex="1">
            <RadioGroup onChange={setlistingMode} value={listingMode}>
              <Stack direction='row'>
                <Radio value='NotForSale'>Not For Sale</Radio>
                <Radio value='FixedPrice'>For Sale</Radio>
                <Radio value='OnAuction'>For Auction</Radio>
              </Stack>
            </RadioGroup>
            <FormHelperText fontSize="9pt">
              The initial listing mode, i.e For Sale, For Auction, or Not For Sale
            </FormHelperText>
          </FormControl>
        </HStack>
      )}

      {isDisplay("listingMode") && ((listingMode === "FixedPrice") || (listingMode === "OnAuction")) && (
        <FormControl mt="1em">
          <Input
          type="number"
            id="nftPrice"
            placeholder="Price"
            w="full"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <FormHelperText fontSize="9pt">
            The initial price n SIGNA or &quot;Buy Now&quot; price for auctions in SIGNA.
          </FormHelperText>
        </FormControl>
      )}
      {isDisplay("listingMode") && (listingMode === "OnAuction") && (
        <>
          <FormControl mt="1em">
            <Input
            type="number"
              id="nftOfferPrice"
              placeholder="Offer Price"
              w="full"
              value={offerPrice}
              onChange={(e) => setOfferPrice(e.target.value)}
            />
            <FormHelperText fontSize="9pt">
              The initial price n SIGNA for auctions.
            </FormHelperText>
          </FormControl>

          <FormControl mt="1em">
            <Input
              id="auctionEnd"
              w="full"
              placeholder="Select Date and Time"
              type="datetime-local"
              value={auctionEnd}
              onChange={(e) => setAuctionEnd(e.target.value)} //convert in use
            />
            <FormHelperText fontSize="9pt">
              Auction End: Date and Time when auction ends. The date will be converted in Blocktime and might result in estimated targed time. This way minute precision is not guaranteed.
            </FormHelperText>
          </FormControl>


        </>
      )
      }
      {isDisplay("creators") && (
        <Box mt="1em" w="full">
          <HStack w="full" alignItems="flex-start">
            <FormControl flex="1">
              <Input
                id="collectionCreatorAddress"
                placeholder="Creator Wallet Address"
                value={creatorAddress}
                onChange={(e) => setCreatorAddress(e.target.value)}
              />
              <FormHelperText fontSize="9pt">
                Wallet Address of a Creator
              </FormHelperText>
            </FormControl>
            <FormControl flex="1" maxW="100px">
              <NumberInput
                id="collectionCreatorShare"
                min={1}
                max={100}
                w="100px"
                value={creatorShare}
                onChange={setCreatorShare}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormHelperText fontSize="9pt">Share Percentage</FormHelperText>
            </FormControl>
            <Button
              w="80px"
              onClick={AddCreator}
              variant="primary"
              rightIcon={<IoMdAdd />}
            >
              Add
            </Button>
          </HStack>
          {creators?.length > 0 && (
            <Box
              py=".5em"
              px="1em"
              bg={componentColor}
              mt="1em"
              borderRadius="10px"
            >
              <Text fontSize="10pt" mt="1em">
                Creator List
              </Text>
              <Flex flexDir="column" justifyContent="center" w="full" mt=".5em">
                {creators?.map((creator, idx) => (
                  <Tag key={idx} mb=".5em" justifyContent="space-between">
                    <HStack justifyContent="space-between" w="full">
                      <Text noOfLines="1">Address: {creator.address}</Text>
                      <Text>Share: {creator.share}%</Text>
                    </HStack>
                    <TagCloseButton onClick={() => DeleteCreator(idx)} />
                  </Tag>
                ))}
              </Flex>
            </Box>
          )}
        </Box>
      )}
    </Flex>
  );
};

export default Configuration;
