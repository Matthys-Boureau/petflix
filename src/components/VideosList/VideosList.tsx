"use client"
import Card from "@/components/Card/Card";
import style from './VideosList.module.scss'
import Select from "@/components/Select/Select";
import { VideosListType } from "@/lib/db/videos";
import { TypeType } from "@/lib/db/types";
import Badge from "../Badge/Badge";
import { useEffect, useState } from "react";

export default function VideosList({ videos, types }: { videos: VideosListType, types: TypeType[] }) {
    const allOption = { key: 0, value: 0, label: 'Tous' };
    // @ts-ignore
    const options = [allOption, ...types.map(type => ({ key: type.id, value: type.id, label: type.label }))];
    const [selectedType, setSelectedType] = useState(0);
    const [filteredVideos, setFilteredVideos] = useState(videos);

    useEffect(() => {
        if (selectedType === 0) {
            setFilteredVideos(videos);
        } else {
            const newFilteredVideos = videos.filter(video => video.Animal.some(animal => animal.Type?.id === selectedType));
            setFilteredVideos(newFilteredVideos);
        }
    }, [selectedType, videos]);

    return (
        <section className={style.container}>
            <Select name="type" label="Type" options={options} required={false} change={(e) => setSelectedType(Number(e.target.value))} />
            <div className={style.list}>
                {filteredVideos.length > 0 ?
                    filteredVideos.map((video, index) => (
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