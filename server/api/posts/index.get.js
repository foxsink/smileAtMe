import { getPosts } from '~/server/data/posts'

export default defineEventHandler(async () => {
    return await getPosts()
})