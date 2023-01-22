import VideoPlayer from '@/components/VideoPlayer'
import { Container } from '@chakra-ui/react'
import { GetServerSidePropsContext } from 'next'

type Props = { query: { id: string } }

function VideoPlayerPage({ query: { id } }: Props) {
  return (
    <Container maxW="6xl" py={4}>
      <VideoPlayer id={id} />
    </Container>
  )
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: { query: context.query },
  }
}

export default VideoPlayerPage
