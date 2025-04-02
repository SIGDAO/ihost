
import {
  Flex,
  Text,
  Heading,
  Link
} from "@chakra-ui/react";

const CodeEditor = () => {

  return (
    <>
       
        {/* <Flex>
          <Heading
            as="h1"
            fontSize="6xl"
            bgGradient="linear(to-l, #374782, #1C97E7)"
            bgClip="text"
          >
            C Compiler for Signum - 2.3.0
          </Heading>
        </Flex>
        <Text fontSize="10pt">
        Write C smart contracts for signum network. Compile in your browser.
        </Text> */}
        {/* <Text fontSize="10pt">
        Credited by <Link href="https://github.com/deleterium/SmartC/" >deleterium</Link>
          </Text> */}
  
      <div className="iframeDiv ">
        {/* <iframe src="https://smartc-web-ui-ten.vercel.app/"></iframe> */}
        {/* <iframe allow="cross-origin-isolated" src="https://aicoder.liveandlearn.live/"></iframe>  */}
        <iframe src="https://aicoder-fortest.vercel.app/"></iframe> 
        {/* <style jsx>{`
        .iframeDiv {
          overflow: hidden;
        }
        iframe {
            width: 101%;
            height: 80vh;
        }
      `}</style> */}
  <style jsx>{`
        .iframeDiv {
          overflow: hidden;
        }
        iframe {
            width: 101%;
           height: 80vh;
        }
      `}</style>
      </div>

    </>
  )};
export default CodeEditor;
