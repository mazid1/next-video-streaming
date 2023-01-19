type VideoListProps = {
  fileNames: string[];
};

function VideoList({ fileNames }: VideoListProps) {
  const contents = fileNames.map((file) => (
    <div key={file} style={{ color: "#f2f2f2" }}>
      {file}
    </div>
  ));
  return <>{contents}</>;
}

export default VideoList;
