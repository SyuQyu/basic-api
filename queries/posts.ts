import {prisma} from "."

export const createPosts = (data:any) => {
    return prisma.post.create({
        data: data
    })
}