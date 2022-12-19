import formidable from "formidable"
import { createPost } from "../queries/posts"

const form = formidable({})

const createPosts = async (req: any, res: any) => {
    const response: any = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) {
                reject(err)
            }
            resolve({ fields, files })
        })
    })

    const { fields, files } = response
    console.log(fields)
    const payload = {
        author: 1,
        message: fields.message
    }
    const resSend = await createPost(payload)
    
    if(resSend) {
        res.status(201).json({ resSend })
    } else {
        res.status(404).json({ err : "Something went wrong!!" })
    }
    
}

module.exports = {
    createPosts
}