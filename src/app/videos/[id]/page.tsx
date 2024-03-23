import { getVideoById } from "@/lib/db/videos";
import { notFound } from "next/navigation";
import style from './layout.module.scss'
import Link from "next/link";
import AnimalInline from "@/components/AnimalInline/AnimalInline";

export default async function Page({ params: { id } }: { params: { id: string } }) {
    const video = await getVideoById(parseInt(id));
    const animals = video?.Animal;
    const user = video?.User;
    if (!video || !isValidYoutubeUrl(video.url) || !animals || !user) notFound();
    return (
        <>
            <div className={style.head}>
                <h2>{video.title}</h2>
                <p>{video.description}</p>
            </div>
            <ul className={style.list}>
                {animals.map(animal => (
                    animal && (
                        <li key={animal.id}>
                            {animal.Adoption[0] ?
                                <AnimalInline animal={animal} /> :
                                <Link href={`/adopt/${animal.id}`}>
                                    <AnimalInline animal={animal} />
                                </Link>
                            }
                        </li>
                    )
                ))}
            </ul>
            <iframe
                width="560"
                height="315"
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
            <address>
                <p>Vidéo postée le {video.uploadedAt.toLocaleDateString()} par :</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.tel}</p>
                <p>{user.shelterCity}</p>
            </address>
        </>
    )
}

function isValidYoutubeUrl(url: string) {
    const pattern = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
    return pattern.test(url);
}
