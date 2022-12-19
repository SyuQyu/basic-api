import {prisma} from "."

export const createPost = (data:any) => {
    return prisma.post.create({
        data: data
    })
}