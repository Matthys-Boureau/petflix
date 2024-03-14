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
        ], skipDuplicates: true
    });
    console.log('Types created: ', types);

    const user = await prisma.user.create({
        data: {
            id: 1,
            name: 'Achille',
            email: 'davidachille18@gmail.com',
            shelterCity: 'Lesquin',
            tel: '0622762543'
        },
    });
    console.log('User created: ', user);

    const videos = await prisma.video.createMany({
        data: [
            {
                id: 1,
                url: 'https://www.youtube.com/embed/FiBdR_q_wiI',
                title: 'Vidéo 1',
                description: 'Maki',
                userId: 1,
                uploadedAt: new Date()
            },
            {
                id: 2,
                url: 'https://www.youtube.com/embed/FiBdR_q_wiI',
                title: 'Vidéo 2',
                description: 'Uma et Levis',
                userId: 1,
                uploadedAt: new Date()
            }
        ], skipDuplicates: true
    });
    console.log('Videos created: ', videos);

    const animals = await prisma.animal.createMany({
        data: [
            {
                name: 'Maki',
                age: 5,
                arrivedAt: new Date(),
                typeId: 1,
            },
            {
                name: 'Uma',
                age: 3,
                arrivedAt: new Date(),
                typeId: 2,
            },
            {
                name: 'Levis',
                age: 12,
                arrivedAt: new Date(),
                typeId: 1,
            },
        ], skipDuplicates: true
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