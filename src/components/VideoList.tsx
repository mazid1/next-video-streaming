import { Box, Button } from '@chakra-ui/react'
import NextLink from 'next/link'

type VideoListProps = {
  fileNames: string[]
}

function VideoList({ fileNames }: VideoListProps) {
  const contents = fileNames.map((fileName) => (
    <Box key={fileName}>
      <Button as={NextLink} href={`/videos/${fileName}`}>
        {fileName}
      </Button>
    </Box>
  ))
  return <>{contents}</>
}

export default VideoList
