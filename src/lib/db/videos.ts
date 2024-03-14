import { Prisma } from "@prisma/client";
import prismadb from "../prismadb";
import { cache } from "react";

export const getVideos = cache(async () => {
    const videos = await prismadb.video.findMany({
        where: {
            Animal: {
                some: {
                    Adoption: {
                        none: {}
                    }
                }
            }
        },
        select: {
            id: true,
            title: true,
            description: true,
            url: true,
        }
    })

    return videos;
});

export const getVideoById = cache(async (id: number) => {
    const video = await prismadb.video.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            title: true,
            description: true,
            url: true,
            User: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    tel: true,
                    shelterCity: true
                }
            },
            Animal: {
                select: {
                    id: true,
                    name: true,
                    age: true,
                    arrivedAt: true,
                    Adoption: {
                        select: {
                            id: true
                        }
                    },
                    Type: {
                        select: {
                            label: true
                        }
                    }
                }
            }
        }
    })

    return video;
});

export const getVideosByType = cache(async (typeId: number) => {
    const videos = await prismadb.video.findMany({
        where: {
            Animal: {
                some: {
                    id: typeId
                }
            }
        },
        select: {
            id: true,
            title: true,
            description: true,
            url: true,
        }
    })

    return videos;
});

export type VideoType = Prisma.PromiseReturnType<typeof getVideoById>