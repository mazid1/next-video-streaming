import { HStack, Link } from '@chakra-ui/react'
import { LinkLogo } from './Logo'
import ThemeChanger from './ThemeChanger'

function Toolbar() {
  return (
    <HStack>
      <Link href="/" as={LinkLogo} />
      <ThemeChanger />
    </HStack>
  )
}

export default Toolbar
