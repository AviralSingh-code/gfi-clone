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

    if(req.method == "GET")
    {
      const issue = req.headers.issueurl;
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
    else if(req.method == "DELETE")
    {
      const issue = req.headers.issueurl;
      const resultUser = await User.findOne({username: req.headers.username});
      if(resultUser)
      {
          var temp = [];
          for(let i = 0; i < resultUser.solvedIssues.length;i++)
          {
            if(resultUser.solvedIssues[i] != issue)
            {
              temp.push(resultUser.solvedIssues[i]);
            }
          }

          resultUser.solvedIssues = temp;
          await resultUser.save();
          // res.send(temp);
          res.json({message: "Issue marked as solved"});
      }
      else
      {
          res.json({message: "User not found"});
      }
      res.json({message: "Issue not found"});
    }    
}
