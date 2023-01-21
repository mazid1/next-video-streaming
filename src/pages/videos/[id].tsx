import VideoPlayer from '@/components/VideoPlayer'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'

function VideoPlayerPage() {
  const router = useRouter()
  const { id } = router.query as { id: string }
  console.log({ VideoPlayerPage: id })
  return <VideoPlayer id={id} />
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: { query: context.query },
  }
}

export default VideoPlayerPage
