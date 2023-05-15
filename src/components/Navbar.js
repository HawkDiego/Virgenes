import { Box, Flex, Grid, Image, Button } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Grid
      h='120px'
      templateColumns='1fr 1fr 1fr'
      justifyContent='center'
      alignItems='center'
      justifyItems='center'
      alignContent='center'
      mt='35px'>
      <Box>
        <Image
          src='/images/logo.png'
          boxSize='62px'
        />
      </Box>
      <Flex
        align='center'
        gap={10}>
        <Flex
          gap={7}
          fontSize='16px'>
          <Box cursor='pointer'>Home</Box>
          <Box cursor='pointer'>Drops</Box>
          <Box cursor='pointer'>Marketplace</Box>
          <Box cursor='pointer'>Activity</Box>
          <Box cursor='pointer'>Company</Box>
        </Flex>
      </Flex>
      <Box>
        <Button
          borderColor='#F6D356'
          variant='outline'
          borderRadius='16.5px'>
          Ver en opensea
        </Button>
      </Box>
    </Grid>
  )
}

export default Navbar
