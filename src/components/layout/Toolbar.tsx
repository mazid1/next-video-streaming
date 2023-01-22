import { HStack, Link } from '@chakra-ui/react'
import { LinkLogo } from './Logo'

function Toolbar() {
  return (
    <HStack>
      <Link href="/" as={LinkLogo} />
    </HStack>
  )
}

export default Toolbar
