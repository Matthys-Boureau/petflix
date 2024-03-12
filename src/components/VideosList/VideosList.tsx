import Card from "@/components/Card/Card";
import style from './VideosList.module.scss'

type videoType = {
    title: string;
    description: string;
    thumbnail: string;
    url?: string;
}

const videos: videoType[] = [
    {
        title: "Video 1",
        description: "Description 1",
        thumbnail: "https://via.placeholder.com/150"
    },
    {
        title: "Video 2",
        description: "Description 2",
        thumbnail: "https://via.placeholder.com/150"
    },
    {
        title: "Video 3",
        description: "Description 3",
        thumbnail: "https://via.placeholder.com/150"
    }
]

export default function VideosList() {
    return (
        <section className={style.container}>
            {videos.map((video, index) => (
                <Card key={index} {...video} />
            ))}
        </section>
    )
}