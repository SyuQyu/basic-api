import jwt from 'jsonwebtoken';
require('dotenv').config()
const {JWT_ACCESSTOKEN_SECRET, JWT_REFRESHTOKEN_SECRET} = process.env
const genAccessToken = (user: any) => {

    return jwt.sign({
        userId: user.id
    }, JWT_ACCESSTOKEN_SECRET as string, {
        expiresIn: '10m'
    })
}

const genRefreshToken = (user: any) => {

    return jwt.sign({
        userId: user.id
    }, JWT_REFRESHTOKEN_SECRET as string, {
        expiresIn: '4h'
    })
}

export const decodeRefreshToken = (token:any) => {
    try {
        return jwt.verify(token, JWT_REFRESHTOKEN_SECRET as string)
    } catch (error) {
        return null
    }
}

export const decodeAccessToken = (token:any) => {
    try {
        return jwt.verify(token, JWT_ACCESSTOKEN_SECRET as string)
    } catch (error) {
        return null
    }
}

export const generateToken = (user: any) => {
    const accessToken = genAccessToken(user)
    const refreshToken = genRefreshToken(user)


    return {
        accessToken: accessToken,
        refreshToken: refreshToken
    }
}

export const sendRefreshToken = (res:any, token:any) => {
    res.cookie("refresh_token", token, {
        httpOnly: true,
        sameSite: true
    })
} 