import { Prisma } from "@prisma/client";
import prismadb from "../prismadb";
import { cache } from "react";

export const getTypes = cache(async () => {
    const types = await prismadb.type.findMany({
        select: {
            id: true,
            label: true,
        }
    })

    return types;
});

export const getTypeById = cache(async (id: number) => {
    const type = await prismadb.type.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            label: true,
        }
    })

    return type;
});

export type TypeType = Prisma.PromiseReturnType<typeof getTypeById>