import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    return prisma.post.upsert({
        where: {
            id: 1,
        },
        update: {},
        create: {
            article: 'В новом 2023 году ты очевидно думал, что холодно будет в Европе. Печально, правда?',
            image_path: 'assets/images/sad-winter.png',
            image_title: 'Обстановка в России',
            audio_path: 'assets/audio/directed_by-theme_meme.mp3',
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
