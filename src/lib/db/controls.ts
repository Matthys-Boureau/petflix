import { Prisma } from "@prisma/client";
import prismadb from "../prismadb";
import { cache } from "react";

export const getControls = cache(async () => {
    const controls = await prismadb.animal.findMany({
        where: {
            Adoption: {
                some: {
                    id: {
                        not: undefined
                    }
                }
            }
        },
        select: {
            id: true,
            name: true,
            age: true,
            Adoption: {
                select: {
                    id: true,
                    controlDate: true,
                    Adopter: {
                        select: {
                            firstname: true,
                            lastname: true,
                        }
                    }
                }
            }
        }
    })

    return controls;
});

export const getControlById = cache(async (id: number) => {
    const control = await prismadb.animal.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            age: true,
            Type: {
                select: {
                    label: true
                }
            },
            Adoption: {
                select: {
                    id: true,
                    controlDate: true,
                    adoptedAt: true,
                    Adopter: {
                        select: {
                            firstname: true,
                            lastname: true,
                            email: true,
                            address: true,
                            city: true,
                            street: true,
                        }
                    }
                }
            }
        }
    })

    return control;
});

export type ControlsType = Prisma.PromiseReturnType<typeof getControls>