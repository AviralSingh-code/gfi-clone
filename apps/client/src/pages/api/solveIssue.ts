import { connectDb } from '@/lib/dbConnect';
import { Issue, User } from 'db';
import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from "mongoose";
// https://www.mongodb.com/community/forums/t/how-to-query-an-array-of-objects-to-match-any-of-the-provided-values/159185/13
type Data = {
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    await connectDb();
    // const issue = await Issue.findOne({'allIssues': {$elemMatch: {_id: req.headers.issueid}}}); 
    // const issue = await Issue.find({"allIssues.issueUrl": "https://github.com/NativeScript/NativeScript/issues/8410"});
    // console.log(req.headers.issueid);
    // console.log(issue);
    // if(issue)
    // {
    //     const resultUser = await User.findOne({username: req.headers.username});
    //     if(resultUser)
    //     {
    //         resultUser.solvedIssues.push(issue);
    //         await resultUser.save();
    //         res.json({message: "Issue marked as solved"});
    //     }
    //     else
    //     {
    //         res.json({message: "User not found"});
    //     }
    // }

    const issue = req.headers.issueid;
    const resultUser = await User.findOne({username: req.headers.username});
    if(resultUser)
    {
        resultUser.solvedIssues.push(issue);
        await resultUser.save();
        res.json({message: "Issue marked as solved"});
    }
    else
    {
        res.json({message: "User not found"});
    }

    res.json({message: "Issue not found"});
}
