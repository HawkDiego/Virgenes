import { Banner } from '@/components/Banner'
import Navbar from '@/components/Navbar'
import { Grid } from '@chakra-ui/react'
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

      <Banner />
    </Grid>
  )
}
