import { connectDb } from '@/lib/dbConnect'
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";

// type Data = {
//   name: string
// }

const owner = 'NativeScript';
const repo = 'NativeScript';
const token = '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';

const apiUrl = `https://api.github.com/repos/${owner}/${repo}/issues?labels=good%20first%20issue&&state=open`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    await connectDb();

    const issueList = await axios.get(apiUrl, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    var hold = [];
    for(let i = 0;i < issueList.data.length;i++)
    {
        hold.push(issueList.data[i]);
    }


    res.json(hold);
}
