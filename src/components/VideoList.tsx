import { Box } from '@chakra-ui/react'

type VideoListProps = {
  fileNames: string[]
}

function VideoList({ fileNames }: VideoListProps) {
  const contents = fileNames.map((file) => <Box key={file}>{file}</Box>)
  return <>{contents}</>
}

export default VideoList
