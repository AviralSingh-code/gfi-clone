import { connectDb } from '@/lib/dbConnect';
import { User } from 'db';
import type { NextApiRequest, NextApiResponse } from 'next'
import { generateToken } from '../tokenGenerator';
import { sign } from 'jsonwebtoken';
import { serialize } from "cookie";

type Data = {
    message?: string | null
    token?: string | null
};

const secret = process.env.SECRET;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    await connectDb();
    const admin = req.body;
    const result = await User.findOne({username: admin.username});
    if(result)
    {
        const token  = null;
        res.json({message: 'User already exists', token});
    }
    else
    {
        const newAdmin = new User({username: admin.username, password: admin.password});
        await newAdmin.save();
        const token = sign({
            exp: Math.floor(Date.now() / 1000) * 60 * 60, //valid for 1 hr
            username: admin.username
            },
            //@ts-ignore
            secret 
            );

            const serialized = serialize("token", token,{
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 60 * 60,
            path: "/"
            })

        res.setHeader('Set-Cookie', serialized);
        res.json({message: 'User created successfully', token});
    }
}