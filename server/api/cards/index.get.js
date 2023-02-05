import { getCards } from '~/server/data/cards'

export default defineEventHandler(async () => {
    return await getCards()
})