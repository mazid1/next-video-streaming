import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Video Streaming</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <video
            id="videoPlayer"
            controls
            autoPlay
            width={1920}
            style={{ width: "100%", height: "auto" }}
          >
            <source src="/api/videos" type="video/mp4" />
          </video>
        </div>
      </main>
    </>
  );
}