import { Box, Center, Image } from '@chakra-ui/react'
import React from 'react'

export const Banner = () => {
  return (
    <>
      <Box
        position='absolute'
        h='252px'
        w='800px'
        fontSize='70px'
        left='147px'
        right='24%'
        top='223px'
        lineHeight='120%'>
        COLLECT <br />
        MOTHER MARY <br />
        ART NTF
      </Box>
      <Box
        w='512px'
        h='650px'
        position='absolute'
        left='calc(100vw - 700px)'
        top='calc(100vh - 650px)'>
        <Image src='/images/Virgin.png' />
      </Box>
      <Box
        position='absolute'
        left='calc(100vw - 180px)'
        top='calc(100vh - 150px)'>
        <Image src='/images/form2.png' />
      </Box>
      <Box
        h='60px'
        fontSize='15px'
        w='450px'
        lineHeight='150%'
        position='absolute'
        top='500px'
        left='147px'>
        Find the best upcoming and live NFT drops. Moonly provides analytics to
        help you make good NFT investments.
      </Box>
      <Center
        w='216px'
        h='66px'
        borderRadius='15px'
        bgGradient='linear-gradient(180deg, #FECB48 0%, #F7B100 100%)'
        position='absolute'
        color='#262626'
        left='147px'
        top='591px'>
        VER EN OPENSEA
      </Center>
      <Box
        position='absolute'
        left='90px'
        top='650px'>
        <Image src='/images/form1.png' />
      </Box>
    </>
  )
}
