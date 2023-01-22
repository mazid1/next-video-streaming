import { Heading, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { UrlObject } from 'url'
import logo from '../../../public/images/logo65x65.png'

function Logo() {
  return (
    <HStack wrap="nowrap">
      <Image src={logo} alt="logo" height={40} />
      <Heading>videos</Heading>
    </HStack>
  )
}

export function LinkLogo({ href }: { href: string | UrlObject }) {
  return (
    <NextLink href={href}>
      <Logo />
    </NextLink>
  )
}

export default Logo
