import { Body } from '@/components/Body'
import Navbar from '@/components/Navbar'
import { Box, Button, Grid, Image, Buttom } from '@chakra-ui/react'
import React from 'react'

export const HomeContainer = () => {
  return (
    <Grid
      backgroundImage="url('/images/bg.png')"
      backgroundSize='cover'
      height='100vh'
      backgroundColor='#011A2A'
      color='#DFDFDF'
      position='relative'>
      <Navbar />

      <Body />
      <Box
        w='512px'
        h='650px'
        position='absolute'
        left='50vw'
        top='calc(100vh - 650px)'>
        <Image src='/images/Virgin.png' />
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
      <Button
        w='216px'
        h='66px'
        backgroundColor='#FECB48'
        position='absolute'
        left='147px'
        top='591px'
        >
        VER EN OPENSEA
      </Button>
    </Grid>
  )
}
