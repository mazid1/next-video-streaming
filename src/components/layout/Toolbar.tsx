import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { HStack, IconButton, Link, useColorMode } from '@chakra-ui/react'
import { LinkLogo } from './Logo'

function Toolbar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack>
      <Link href="/" as={LinkLogo} />
      <IconButton
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={() => toggleColorMode()}
        aria-label={'Toggle Dark Mode'}
      />
    </HStack>
  )
}

export default Toolbar
