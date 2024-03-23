import { Prisma } from "@prisma/client";
import prismadb from "../prismadb";
import { cache } from "react";

export const getAnimalById = cache(async (id: number) => {
    const animal = await prismadb.animal.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            age: true,
            Type: {
                select: {
                    label: true,
                }
            },
            Adoption: {
                select: {
                    id: true,
                }
            }
        }
    })

    return animal;
});

export type AnimalType = Prisma.PromiseReturnType<typeof getAnimalById>