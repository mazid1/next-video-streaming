import {
  Box,
  Container,
  HStack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import { LinkLogo } from './Logo'
import ThemeChanger from './ThemeChanger'

function Toolbar() {
  return (
    <Box
      as="header"
      borderColor={useColorModeValue('gray.300', 'gray.600')}
      borderBottomWidth={1}
      borderStyle="solid"
    >
      <Container maxW="6xl" py={4}>
        <HStack justifyContent="space-between">
          <Link href="/" as={LinkLogo} />
          <ThemeChanger />
        </HStack>
      </Container>
    </Box>
  )
}

export default Toolbar
