import { getTypes } from "./db/types";
import { getVideos } from "./db/videos";

export async function fetchData() {
    const videos = await getVideos();
    const types = await getTypes();
    return { videos, types };
}
