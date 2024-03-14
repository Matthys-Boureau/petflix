import VideosList from "@/components/VideosList/VideosList";
import { getTypes } from "@/lib/db/types";
import { getVideos } from "@/lib/db/videos";

export default async function Home() {
  const videos = await getVideos();
  const types = await getTypes();

  return (
    <VideosList videos={videos} types={types} />
  );
}
