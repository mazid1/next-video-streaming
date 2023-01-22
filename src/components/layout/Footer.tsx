import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react'

function Footer() {
  return (
    <Box
      as="footer"
      borderColor={useColorModeValue('gray.300', 'gray.600')}
      borderTopWidth={1}
      borderStyle="solid"
    >
      <Container maxW="6xl" py={4} centerContent>
        <Text>Created with &hearts; by Mazid</Text>
      </Container>
    </Box>
  )
}

export default Footer
