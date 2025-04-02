import { useEffect, useState } from "react";
// import { useUser } from "@/providers/UserProvider";
// import { Button, ButtonGroup } from '@chakra-ui/react'
// import { Http, HttpClientFactory, HttpResponse, HttpMockBuilder, HttpError } from "@signumjs/http"
// import banner from "./demoBanner.jpg"
// import pixel from "./pixel.jpg"
// import pixel2 from "./pixel2.jpg"
// import pixel3 from "./pixel3.jpg"
// import axios from "axios"
// import {isURL} from 'validator';
// import { Address, LedgerClientFactory } from "@signumjs/core";
// import {generateMasterKeys} from "@signumjs/crypto";
// import Resizer from "react-image-file-resizer"
// import {useAppContext} from '../../../xtWallet/hooks/useAppContext';
// import {Amount} from "@signumjs/util";
// import { Contract, ContractDataView } from "@signumjs/contracts";
// import {sharp_01} from "sharp";
// ohager/signum-contract-inspector
// deleterium/smartc-web-ui
// ohager/signum-xt-wallet-react-dem
// ohager/signum-xt-wallet-vanilla-demo


import { Card, CardHeader, CardBody, CardFooter,Stack,Heading,Text,Button,Image,SimpleGrid, Link } from '@chakra-ui/react'
import sdk from '@stackblitz/sdk';
import { ExternalLinkIcon } from '@chakra-ui/icons'
const ProjectTemplate = () => {
  const totalPageNumber = 1;
  const projectInEachPages = [[{projectName: "Smartc-web-ui", 
    projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
    projectId: "deleterium/smartc-web-ui"
  },
  {projectName: "Signum contract inspector", 
    projectDesc: "Create a simple and effective way to write and deploy smart contract on Signum, using SmartC compiler.",
    projectId: "ohager/signum-contract-inspector"
  },
  {projectName: "Signum-xt-wallet-vanilla-demo", 
    projectDesc: "This is a demo/starter on how to use Signum XT Wallet in a plain html,css,javascript project",
    projectId: "ohager/signum-xt-wallet-vanilla-demo"
  },
  {projectName: "Signum-xt-wallet-react-demo", 
    projectDesc: "A Demo Application to show how to use @signumjs/wallets with the Signum XT Wallet",
    projectId: "ohager/signum-xt-wallet-react-demo"
  },
  {projectName: "Signum-account-activator", 
    projectDesc: "This is a web application (and service) to activate new Signum accounts.",
    projectId: "signum-network/signum-account-activator"
  },
  {projectName: "Signum-dappository", 
    projectDesc: "A platform to register tools and applications for the Signum eco-system",
    projectId: "ohager/signum-dappository"
  },

],
// [{projectName: "deleterium/smartc-web-ui", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "deleterium/smartc-web-ui"
// },
// {projectName: "deleterium/smartc-web-ui", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "deleterium/smartc-web-ui"
// },
// {projectName: "deleterium/smartc-web-ui", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "deleterium/smartc-web-ui"
// },
// {projectName: "signum-xt-wallet-react-dem", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "ohager/signum-xt-wallet-react-dem"
// },
// {projectName: "signum-xt-wallet-react-dem", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts a mnd allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "ohager/signum-xt-wallet-react-dem"
// },
// {projectName: "Signum Contract Inspector", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "ohager/signum-contract-inspector"
// },],[{projectName: "Signum Contract Inspector", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "ohager/signum-contract-inspector"
// },
// {projectName: "Signum Contract Inspector", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "ohager/signum-contract-inspector"
// },
// {projectName: "Signum Contract Inspector", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "ohager/signum-contract-inspector"
// },
// {projectName: "signum-xt-wallet-react-dem", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "ohager/signum-xt-wallet-react-dem"
// },
// {projectName: "signum-xt-wallet-react-dem", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "ohager/signum-xt-wallet-react-dem"
// },
// {projectName: "Signum Contract Inspector", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "ohager/signum-contract-inspector"
// },],[{projectName: "Signum Contract Inspector", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "ohager/signum-contract-inspector"
// },
// {projectName: "Signum Contract Inspector", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "ohager/signum-contract-inspector"
// },
// {projectName: "Signum Contract Inspector", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "ohager/signum-contract-inspector"
// },
// {projectName: "signum-xt-wallet-react-dem", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "ohager/signum-xt-wallet-react-dem"
// },
// {projectName: "signum-xt-wallet-react-dem", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "ohager/signum-xt-wallet-react-dem"
// },
// {projectName: "Signum Contract Inspector", 
//   projectDesc: "This handy tool allows to inspect Signum Smart Contracts and allows detailed inspection. This tool is mostly for smart contract developers who want to inspect the current data stack of a contract.",
//   projectId: "ohager/signum-contract-inspector"
// },
]
  const [viewIDE, setViewIDE] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  async function  asyncSetViewIDE() {
    setViewIDE(true)
    return true
  }

  async function embedProject(projects) {
    const res = await asyncSetViewIDE()
    if (res){
    sdk.embedGithubProject('embed', projects, {
      terminalHeight: 45,
    });
  }
  }

  async function embedProject01() {
    const res = await asyncSetViewIDE()
    if (res){
    sdk.embedGithubProject('embed', 'ohager/signum-contract-inspector', {
      terminalHeight: 45,
    });
  }
  }
 
  async function embedProject02() {
    const res = await asyncSetViewIDE()
    if (res){
    sdk.embedGithubProject('embed', 'deleterium/smartc-web-ui', {
      terminalHeight: 45,
    });
  }
  }
  async function embedProject03() {
    const res = await asyncSetViewIDE()
    if (res){
    sdk.embedGithubProject('embed', 'ohager/signum-xt-wallet-react-demo', {
      terminalHeight: 45,
    });
  }
  }
  async function embedProject04() {
    const res = await asyncSetViewIDE()
    if (res){
    sdk.embedGithubProject('embed', 'ohager/signum-xt-wallet-vanilla-demo', {
      terminalHeight: 45,
    });
      // sdk.embedProjectId('embed', 'ohager-signum-xt-wallet-vanilla-demo-l6eqkn', {
      //   openFile: 'index.ts',
      // });
  }
  }

  const handlePageChange = (pageNumber) => {
    console.log("currentPage:" , currentPage)
    console.log("pageNumber:", pageNumber)
    setCurrentPage(pageNumber);
    // Perform any other actions, such as fetching data for the new page
  };

  const handleNextPage = () => {
    console.log("currentPage:" , currentPage)
    currentPage === totalPageNumber ? setCurrentPage(totalPageNumber) : setCurrentPage((currentPage+1))
   
    // Perform any other actions, such as fetching data for the new page
  };

  const handlePreviousPage = () => {
    console.log("currentPage:" , currentPage)
    currentPage === 1 ? setCurrentPage(1) : setCurrentPage((currentPage-1))
  
    // Perform any other actions, such as fetching data for the new page
  };

  return (
    <>


<div>
     {viewIDE && (<div> <div className="embed" id="embed">
        {/* <iframe src="https://deleterium.info/SmartC/stable/"></iframe> */}
        <style jsx>{`
        .embed {
          overflow: hidden;
        }
        iframe {
            width: 101%;
            height: 80vh;
        }
      `}</style>

      </div> 
        </div>
    )}
</div>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '500px' }}
    src='https://developer.stackblitz.com/assets/project-starters-public.DJGHsOuM.png'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Code Editor</Heading>

      <Text py='2'>
        To build new dapp online, users are recommended to use Stackblitz online IDE.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
      <Link color={'black'} href='https://stackblitz.com/~/github.com/ohager/signum-xt-wallet-vanilla-demo' isExternal>
      Start my first dapp<ExternalLinkIcon mx='2px' />
      </Link>
     
      </Button>
      </CardFooter>

  </Stack>
</Card>

<Heading size='lg' fontSize='30px' m='10px'>
  Project Template
</Heading>
{/* <SimpleGrid  columns={3} spacing={3} templateColumns='repeat(auto-fill, minmax(350px, 1fr))'> */}
<SimpleGrid  columns={3} spacing={3} m={"10px"}>
  <Card>
    <CardHeader>
      <Heading size='md'>{projectInEachPages[(currentPage-1)][1]["projectName"]}</Heading>
    </CardHeader>
    <CardBody>
       <Text>{projectInEachPages[currentPage-1][1]["projectDesc"]}</Text>
    </CardBody>
    <CardFooter>
      <Button onClick={()=> embedProject(projectInEachPages[currentPage-1][1]["projectId"])}>Open project</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'>{projectInEachPages[currentPage-1][2]["projectName"]}</Heading>
    </CardHeader>
    <CardBody>
      <Text>{projectInEachPages[currentPage-1][2]["projectDesc"]}</Text>
    </CardBody>
    <CardFooter>
      <Button onClick={()=> embedProject(projectInEachPages[currentPage-1][2]["projectId"])}>Open project</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> {projectInEachPages[currentPage-1][3]["projectName"]}
      </Heading>
    </CardHeader>
    <CardBody>
      <Text>{projectInEachPages[currentPage-1][3]["projectDesc"]}</Text>
    </CardBody>
    <CardFooter>
      <Button onClick={()=>  embedProject(projectInEachPages[currentPage-1][3]["projectId"])}>Open project</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> {projectInEachPages[currentPage-1][4]["projectName"]}
      </Heading>
    </CardHeader>
    <CardBody>
      <Text>{projectInEachPages[currentPage-1][4]["projectDesc"]}</Text>
    </CardBody>
    <CardFooter>
      <Button onClick={()=>  embedProject(projectInEachPages[currentPage-1][4]["projectId"])}>Open project</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> {projectInEachPages[currentPage-1][5]["projectName"]}
      </Heading>
    </CardHeader>
    <CardBody>
      <Text>{projectInEachPages[currentPage-1][5]["projectDesc"]}</Text>
    </CardBody>
    <CardFooter>
      <Button onClick={()=>  embedProject(projectInEachPages[currentPage-1][5]["projectId"])}>Open project</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> {projectInEachPages[currentPage-1][0]["projectName"]}
      </Heading>
    </CardHeader>
    <CardBody>
      <Text>{projectInEachPages[currentPage-1][0]["projectDesc"]}</Text>
    </CardBody>
    <CardFooter>
      <Button onClick={()=>  embedProject(projectInEachPages[currentPage-1][0]["projectId"])}>Open project</Button>
    </CardFooter>
  </Card>

</SimpleGrid>


<div className="flex justify-center space-x-1 dark:text-gray-800">
	<button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100" onClick={()=> handlePreviousPage()} >
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	<button type="button" title="Page 1" className={currentPage === 1 ? "inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-violet-600 dark:border-violet-600 bg-[#1C97E7]" : "inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100"} onClick={()=> handlePageChange(1)}>1</button>
	{/* <button type="button" className={currentPage === 2 ? "inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-violet-600 dark:border-violet-600 bg-[#1C97E7]" : "inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100"} title="Page 2" onClick={()=> handlePageChange(2)}>2</button>
	<button type="button" className={currentPage === 3 ? "inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-violet-600 dark:border-violet-600 bg-[#1C97E7]" : "inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100"} title="Page 3" onClick={()=> handlePageChange(3)}>3</button>
	<button type="button" className={currentPage === 4 ? "inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-violet-600 dark:border-violet-600 bg-[#1C97E7]" : "inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100"} title="Page 4" onClick={()=> handlePageChange(4)}>4</button> */}
	<button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100" onClick={()=> handleNextPage()}>
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
</div>
      {/* <button id="embed-button">Embed project</button> */}
      {/* <div className="iframeDiv "> */}
      {/* <iframe src="https://stackblitz.com/dashboard"></iframe> */}
        {/* <iframe src="https://deleterium.info/SmartC/stable/"></iframe> */}
        {/* <style jsx>{`
        .iframeDiv {
          overflow: hidden;
        }
        iframe {
            width: 101%;
            height: 75vh;
        }
      `}</style>

      </div> */}

    </>
  )};

export default ProjectTemplate;
