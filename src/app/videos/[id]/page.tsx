import { getVideoById } from "@/lib/db/videos";
import { notFound } from "next/navigation";

export default async function Page({ params: { id } }: { params: { id: string } }) {
    const video = await getVideoById(parseInt(id));
    const animals = video?.Animal;
    const user = video?.User;
    if (!video || !isValidYoutubeUrl(video.url) || !animals || !user) notFound();
    return (
        <>
            <h2>{video.title}</h2>
            <p>{video.description}</p>
            <address>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.tel}</p>
                <p>{user.shelterCity}</p>
            </address>
            <iframe
                width="560"
                height="315"
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
            <ul>
                {animals.map(animal => (
                    animal && <li key={animal.id}>{animal.name}, {animal.age} ans ({animal.Type?.label}) {animal.Adoption[0] && "// ADOPTÉ"}</li>
                ))}
            </ul>
        </>
    )
}

function isValidYoutubeUrl(url: string) {
    const pattern = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
    return pattern.test(url);
}
