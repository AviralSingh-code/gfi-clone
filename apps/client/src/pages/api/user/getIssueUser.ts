import { connectDb } from '@/lib/dbConnect';
import { User } from 'db';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connectDb();
  const admin = req.headers;
  const userDetails = await User.findOne({username: admin.username, password: admin.password});
  if(userDetails)
  {
    res.json(userDetails);
  }
  else
  {
    res.status(403).json({message: "User Doesn't exist"});
  }
}
