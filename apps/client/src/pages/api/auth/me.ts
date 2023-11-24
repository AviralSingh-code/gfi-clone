// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectDb } from '@/lib/dbConnect';
import { getUser } from '@/lib/middleware';
import type { NextApiRequest, NextApiResponse } from 'next'
import { useSetRecoilState } from "recoil";
import { userState } from 'store';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    await connectDb();
    const authHeader = req.headers.authorization;
    const setUserState = useSetRecoilState(userState);
    // console.log(authHeader);
    if(authHeader)
    {
        const token = authHeader.split(' ')[1];
        getUser(token, (user)=>{
            if(!user)
            {
                setUserState({
                    isLoading: false,
                    userEmail: null
                });
                res.status(402).json({});
                return;
            }
            setUserState({                     //move to Init User once set up
                isLoading: false,
                userEmail: user.username
            });
            res.json({user: user});
        })
    }
}