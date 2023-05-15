import { Body } from '@/components/Body'
import Navbar from '@/components/Navbar'
import { Box, Grid } from '@chakra-ui/react'
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
        h='60px'
        fontSize='20px'
        w='400px'
        position='absolute'
        top='500px'
        left='147px'>
        Find the best upcoming and live NFT drops. Moonly provides analytics to
        help you make good NFT investments.
      </Box>
    </Grid>
  )
}
