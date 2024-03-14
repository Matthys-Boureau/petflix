"use client"
import Card from "@/components/Card/Card";
import style from './VideosList.module.scss'
import Select from "@/components/Select/Select";
import { VideoType, VideosListType } from "@/lib/db/videos";
import { TypeType } from "@/lib/db/types";
import Badge from "../Badge/Badge";

export default function VideosList({ videos, types }: { videos: VideosListType, types: TypeType[] }) {
    const allOption = { key: 0, value: 'all', label: 'Tous' };
    // @ts-ignore
    const options = [allOption, ...types.map(type => ({ key: type.id, value: type.id, label: type.label }))];

    return (
        <section className={style.container}>
            <Select name="type" label="Type" options={options} required={false} />
            <div className={style.list}>
                {videos.length > 0 ?
                    videos.map((video, index) => (
                        video && (
                            <Card
                                key={index}
                                {...video}
                                href={`/videos/${video.id}`}
                            >
                                <p>{video.description}</p>
                                <ul>
                                    {video.Animal.map((animal, index) => (
                                        <li key={index}><Badge>{animal.Type?.label}</Badge></li>
                                    ))}
                                </ul>
                            </Card>
                        )
                    )) :
                    <p>Aucune vidéo n&apos;a été trouvée</p>
                }
            </div>
        </section>
    )
}