import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    prisma.post.upsert({
        where: {
            id: 1,
        },
        update: {},
        create: {
            article: 'В новом 2023 году ты очевидно думал, что холодно будет в Европе. Печально, правда?',
            image_path: 'public/images/sad-winter.png',
            image_title: 'Обстановка в России',
            audio_path: 'public/audio/directed_by-theme_meme.mp3',
        },
    })
    prisma.post.upsert({
        where: {
            id: 2,
        },
        update: {},
        create: {
            article: 'Купил мужик шляпу, а она ему как раз!',
            image_path: 'public/images/shlyapa.jpg',
            image_title: 'Смари какая прикольная!',
            audio_path: 'public/audio/Chill_in_shlyapa.mp3',
        },
    })
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
