import VideosList from "@/components/VideosList/VideosList";
import { getTypes } from "@/lib/db/types";
import { getVideos } from "@/lib/db/videos";
import { useState } from "react";

export default async function Home() {
  const videos = await getVideos();
  const types = await getTypes();
  if (!videos || !types) return (<p>Chargement...</p>);
  return (
    <VideosList videos={videos} types={types} />
  );
}
