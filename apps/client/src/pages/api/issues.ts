import { connectDb } from '@/lib/dbConnect'
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";
import { Issue } from 'db';

// type Data = {
//   name: string
// }


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    await connectDb();

    if(req.method == "POST")
    {
        const owner = req.headers.owner;
        const repo = req.headers.repo;
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/issues?labels=good%20first%20issue&&state=open`;
        const issueList = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            }
        });
    
        var hold = [];
        for(let i = 0;i < issueList.data.length;i++)
        {
            hold.push({issueTitle: issueList.data[i].title, issueUrl: issueList.data[i].html_url});
        }
    
        console.log(hold);
        const result = await Issue.findOne({repoName: repo});
        if(!result)
        {
            const createIssueList = new Issue({repoName: repo, allIssues: hold});
            await createIssueList.save();
        }
        else
        {
            result.allIssues = hold;
            await result.save();
        }
    
        res.json({message: "List Updated !!"});
    }
    else if(req.method == "GET")
    {
        const issues = await Issue.find({});
        res.json({issues});
    }

    

    // res.json(hold);
}
