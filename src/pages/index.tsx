import VideoList from '@/components/VideoList'
import VideoPlayer from '@/components/VideoPlayer'
import { Stack } from '@chakra-ui/react'
import Head from 'next/head'

type HomeProps = {
  fileNames: string[]
}

export default function Home({ fileNames }: HomeProps) {
  return (
    <>
      <Head>
        <title>Video Streaming</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Stack>
          <VideoPlayer />
          <VideoList fileNames={fileNames} />
        </Stack>
      </main>
    </>
  )
}

export function getStaticProps() {
  const fs = require('fs')
  const fileNames: string[] = []

  fs.readdirSync('./videos').forEach((file: string) => {
    fileNames.push(file)
  })

  return {
    props: {
      fileNames,
    },
  }
}
