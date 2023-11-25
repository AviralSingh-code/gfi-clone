import { connectDb } from '@/lib/dbConnect';
import { User } from 'db';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  solvedIssues?: {issueTitle: string, issueUrl: string};
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    await connectDb();
    const response = req.headers.username;
    if(response)
    {
      const result = await User.findOne({username: response}).populate('solvedIssues');
      if(result)
      {
          res.json({solvedIssues: result.solvedIssues || []})
      }
      else
      {
          res.json({message: "User not found"});
      }
    }
}
    
