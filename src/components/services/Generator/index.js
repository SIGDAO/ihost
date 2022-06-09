import { Box, Text, useColorModeValue, Wrap, Flex } from '@chakra-ui/react'
import { useGenerator } from '@/providers/GeneratorProvider'
import Confetti from 'react-confetti'
import MetadataModal from './MetadataModal'
import Layers from './Layers'
import Toolbar from './Toolbar'
import Traits from './Traits'
import Preview from './Preview'
import RarityModal from './RarityModal'
import GenerateModal from './GenerateModal'
import useWindowSize from 'react-use/lib/useWindowSize'
import DownloadModal from './DownloadModal'

const Generator = () => {
    const { width, height } = useWindowSize();
    const { isConfetti } = useGenerator();

    const blueprintBGColor = useColorModeValue('rgb(238,238,238)', 'rgb(12,15,20)');
    const blueprintGridColor = useColorModeValue('linear-gradient(rgba(255,255,255,.5) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.5) 2px, transparent 2px), linear-gradient(rgba(255,255,255,.28) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.28) 1px, transparent 1px)', 'linear-gradient(rgba(0,0,0,.5) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,.5) 2px, transparent 2px), linear-gradient(rgba(0,0,0,.28) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.28) 1px, transparent 1px)');
    const blueprintBorderColor = useColorModeValue('whiteAlpha.300', 'black');
    const blueprintSponsorColor = useColorModeValue('black', 'white');

    return (
        <Box 
            minH='100vh'
            position='relative'
            p='1em'
            borderWidth='1px' 
            bgColor={blueprintBGColor}
            bgImage={blueprintGridColor}
            borderColor={blueprintBorderColor}
            backgroundSize='100px 100px, 100px 100px, 20px 20px, 20px 20px'
            backgroundPosition='-2px -2px, -2px -2px, -1px -1px, -1px '
        >
            <Confetti
                numberOfPieces={200}
                width={width - 25}
                height={height - 25}
                run={isConfetti}
                recycle={isConfetti}
                onConfettiComplete={(confetti) => {
                    confetti.reset();
                    confetti.context.clearRect(0, 0, confetti.canvas.width, confetti.canvas.height);
                }}
            />
            <MetadataModal />
            <RarityModal />
            <GenerateModal />
            <DownloadModal />
            <Toolbar />
            <Wrap spacing='1em' mt='1em'>
                <Layers />
                <Traits />
                <Preview />
            </Wrap>
            <Box position='absolute' bottom='0' right='0' p='1em' opacity='.2'>
                <Flex flexDir='column' alignItems='flex-end'>
                    <Text fontSize='10pt' color={blueprintSponsorColor}>
                        Powered by NFT Host
                    </Text>
                    <Text fontSize='10pt'>
                        Version 2.0 BETA
                    </Text>
                </Flex>
            </Box>
        </Box>
    )
}

export default Generator