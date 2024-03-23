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
            uploadedAt: true,
            Animal: {
                select: {
                    Type: {
                        select: {
                            id: true,
                            label: true
                        }
                    }
                }
            }
        },
        orderBy: {
            uploadedAt: 'desc'
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
            uploadedAt: true,
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
                            id: true,
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
            uploadedAt: true,
            Animal: {
                select: {
                    Type: {
                        select: {
                            label: true
                        }
                    }
                }
            }
        },
        orderBy: {
            uploadedAt: 'desc'
        }
    })

    return videos;
});

export const getVideosByCity = cache(async (city: string) => {
    const videos = await prismadb.video.findMany({
        where: {
            User: {
                shelterCity: city
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
})

export const addVideo = async (data: Prisma.VideoCreateInput) => {
    const video = await prismadb.video.create({
        data: data
    })

    return video;
}

export type VideosListType = Prisma.PromiseReturnType<typeof getVideos>

export type VideoType = Prisma.PromiseReturnType<typeof getVideoById>