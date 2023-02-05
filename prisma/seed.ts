import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const first = await prisma.card.upsert({
        where: {
            id: 1,
        },
        update: {},
        create: {
            id: 1,
            article: 'В новом 2023 году ты очевидно думал, что холодно будет в Европе. Печально, правда?',
            image_path: '/images/sad-winter.png',
            image_title: 'Обстановка в России',
            audio_path: '/audio/directed_by-theme_meme.mp3',
        },
    })
    const second = await prisma.card.upsert({
        where: {
            id: 2,
        },
        update: {},
        create: {
            id: 2,
            article: 'Купил мужик шляпу, а она ему как раз!',
            image_path: '/images/shlyapa.jpg',
            image_title: 'Смари какая прикольная!',
            audio_path: '/audio/Chill_in_shlyapa.mp3',
        },
    })
    console.log(first, second)
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
