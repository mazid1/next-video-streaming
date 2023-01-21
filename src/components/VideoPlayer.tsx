function VideoPlayer() {
  return (
    <video controls>
      <source src="/api/videos" type="video/mp4" />
    </video>
  )
}

export default VideoPlayer
