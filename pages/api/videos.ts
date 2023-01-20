// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createReadStream, statSync } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

export default function getVideos(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method !== "GET") {
    return res.status(405).json({ error: `Method ${method} not allowed` });
  }

  // Ensure there is a range given for the video
  const range = req.headers.range;
  if (!range) {
    res.status(400).send({ error: "Requires Range header" });
  }

  // get video stats (about 61MB)
  const videoPath = "./videos/nature.mkv";
  const videoSize = statSync(videoPath).size;

  // Parse Range
  // Example: "bytes=32324-"
  const CHUNK_SIZE = 10 ** 6; // 1MB
  const start = Number(range?.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  // Create headers
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  // HTTP Status 206 for Partial Content
  res.writeHead(206, headers);

  // create video read stream for this particular chunk
  const videoStream = createReadStream(videoPath, { start, end });

  // Stream the video chunk to the client
  videoStream.pipe(res);
}
