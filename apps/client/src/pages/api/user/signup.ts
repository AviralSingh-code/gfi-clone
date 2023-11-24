import { connectDb } from '@/lib/dbConnect';
import { User } from 'db';
import type { NextApiRequest, NextApiResponse } from 'next'
import { generateToken } from '../tokenGenerator';

type Data = {
    message?: string | null
    token?: string | null
};

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
        const token = generateToken(admin);
        res.json({message: 'User created successfully', token});
    }
}