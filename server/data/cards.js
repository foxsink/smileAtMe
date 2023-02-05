import prisma from './prisma'

export async function getCards() {
    return await prisma.card.findMany();
}