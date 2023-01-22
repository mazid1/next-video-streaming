import { Box } from '@chakra-ui/react'

type Props = { id: string }

function VideoPlayer({ id }: Props) {
  return (
    <Box width="full">
      <video controls autoPlay width="1920" height="1080">
        <source src={`/api/videos/${id}`} type="video/mp4" />
      </video>
    </Box>
  )
}

export default VideoPlayer
