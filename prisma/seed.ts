import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const types = await prisma.type.createMany({
        data: [
            {
                id: 1,
                label: 'Chien',
            },
            {
                id: 2,
                label: 'Chat',
            },
        ]
    });
    console.log('Types created: ', types);

    const videos = await prisma.video.createMany({
        data: [
            {
                id: 1,
                url: 'https://www.youtube.com/embed/FiBdR_q_wiI',
                title: 'Vidéo 1',
                description: 'Maki',
                userId: 1,
                uploadedAt: "2024-03-14 10:45:07.018"
            },
            {
                id: 2,
                url: 'https://www.youtube.com/embed/FiBdR_q_wiI',
                title: 'Vidéo 2',
                description: 'Uma et Levis',
                userId: 1,
                uploadedAt: "2024-03-14 10:50:07.018"
            }
        ]
    });
    console.log('Videos created: ', videos);

    const animals = await prisma.animal.createMany({
        data: [
            {
                name: 'Maki',
                age: 5,
                arrivedAt: "2024-03-13 23:13:37.615",
                typeId: 1,
            },
            {
                name: 'Uma',
                age: 3,
                arrivedAt: "2024-03-13 23:27:41.062",
                typeId: 2,
            },
            {
                name: 'Levis',
                age: 12,
                arrivedAt: "2024-03-13 23:30:54.190",
                typeId: 1,
            },
        ]
    });
    console.log('Animals created: ', animals);
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })