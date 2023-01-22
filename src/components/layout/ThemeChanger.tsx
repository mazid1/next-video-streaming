import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'

function ThemeChanger() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={() => toggleColorMode()}
      aria-label={'Toggle Dark Mode'}
    />
  )
}

export default ThemeChanger
