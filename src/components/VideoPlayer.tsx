type Props = { id: string }

function VideoPlayer({ id }: Props) {
  return (
    <video controls autoPlay>
      <source src={`/api/videos/${id}`} type="video/mp4" />
    </video>
  )
}

export default VideoPlayer
