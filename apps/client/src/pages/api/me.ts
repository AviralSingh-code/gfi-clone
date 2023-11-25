import { getUser } from '@/lib/middleware';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const authHeader = req.headers.authorization;
    console.log("Reached me !!");
    if(authHeader)
    {
        const token = authHeader.split(' ')[1];
        getUser(token, (user)=>{
            if(!user)
            {
                res.status(402).json({});
                return;
            }
            res.json({user: user});
        })
    }
}