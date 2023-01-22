import VideoPlayer from '@/components/VideoPlayer'
import { GetServerSidePropsContext } from 'next'

type Props = { query: { id: string } }

function VideoPlayerPage({ query: { id } }: Props) {
  return <VideoPlayer id={id} />
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: { query: context.query },
  }
}

export default VideoPlayerPage
