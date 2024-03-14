import Card from "@/components/Card/Card";
import style from './VideosList.module.scss'
import Select from "@/components/Select/Select";
import { VideoType } from "@/lib/db/videos";
import { TypeType } from "@/lib/db/types";

export default function VideosList({ videos, types }: { videos: VideoType[], types: TypeType[] }) {
    const allOption = { key: 0, value: 'all', label: 'Tous' };
    // @ts-ignore
    const options = [allOption, ...types.map(type => ({ key: type.id, value: type.id, label: type.label }))];

    return (
        <section className={style.container}>
            <Select name="type" label="Type" options={options} required={false} />
            <div className={style.list}>
                {videos.length > 0 ?
                    videos.map((video, index) => (
                        video && <Card key={index} {...video} thumbnail="" href={`/videos/${video.id}`} />
                    )) :
                    <p>Aucune vidéo n&apos;a été trouvée</p>
                }
            </div>
        </section>
    )
}