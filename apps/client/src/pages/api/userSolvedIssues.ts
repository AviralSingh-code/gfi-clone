import { connectDb } from '@/lib/dbConnect';
import { User } from 'db';
import type { NextApiRequest, NextApiResponse } from 'next'
import { useRecoilValue } from "recoil";
import { userEmailState } from 'store';
type Data = {
  solvedIssues?: {issueTitle: string, issueUrl: string};
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    await connectDb();
    const userNameValue = useRecoilValue(userEmailState);
    const result = await User.findOne({username: userNameValue}).populate('solvedIssues');
    if(result)
    {
        res.json({solvedIssues: result.solvedIssues || []})
    }
    else
    {
        res.status(403).json({message: "User not found"});
    }
}
