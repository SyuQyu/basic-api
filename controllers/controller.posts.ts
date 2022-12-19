import formidable from "formidable"

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
    res.status(201).json({ fields })
}

module.exports = {
    createPosts
}