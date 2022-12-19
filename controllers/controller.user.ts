import { createUser, getUserByUsername } from "../queries/users"
import bcrypt from "bcrypt"
import { generateToken, sendRefreshToken } from "../utils/jwt"
import { createRefreshToken } from "../queries/refreshTokens"

const registerCustomer = async (req: any, res: any) => {
    const { username, email, password, repeatPassword, name } = req.body
    const userData = {
        username, email, password, name, profileImage: 'https://picsum.photos/200/200'
    }
    const user = await createUser(userData)
    if (user) {
        res.status(201).json({ user })
    } else {
        res.status(404).json({ err: "Something went wrong!!" })
    }
}

const loginCustomer = async (req: any, res: any) => {
    const { username, password } = req.body
    if (!username || !password) {
        res.status(400).json({
            statusMessage: 'Invalid Params'
        })
    }

    const user = await getUserByUsername(username)

    if (!user) {
        res.status(400).json({
            statusMessage: 'Username or password is invalid'
        })
    } 
    const doesThePasswordMatch = await bcrypt.compare(password, user!.password)

    if (!doesThePasswordMatch) {
        res.status(400).json({
            statusMessage: 'Username or password is invalid'
        })
    }

    const { accessToken, refreshToken } = generateToken(user)

    await createRefreshToken({
        token: refreshToken,
        userId: user!.id
    })

    sendRefreshToken(res, refreshToken)

    return res.status(200).json({
        access_token: accessToken,
        userLogin : user
    })
}


module.exports = {
    registerCustomer,
    loginCustomer
}