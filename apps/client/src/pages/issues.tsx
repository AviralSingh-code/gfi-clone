import axios from "axios";
import { useEffect, useState } from "react";
import { IssueCard } from "ui/IssueCard";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { allIssues, solvedIssues, userEmailState } from "store";
function Issues()
{
    const[issues, setIssues] = useState([]);
    // const[userSolvedIssues, setUserSolvedIssues] = useState([]);
    const userNameValue = useRecoilValue(userEmailState);
    // const setIssues = useSetRecoilState(allIssues);
    const setUserSolvedIssues = useSetRecoilState(solvedIssues);
    // const issues = useRecoilValue(allIssues);
    const userSolvedIssues = useRecoilValue(solvedIssues);
    useEffect(()=>{
        function callback(res)
        {
            setIssues(res.data.issues);
        }
        axios.get("/api/issues", {
            headers:{
                "Content-Type": "application/json"
            }
        }).then(callback);
    }, []);

    useEffect(()=>{
        function callback(res)
        {
            setUserSolvedIssues(res.data.solvedIssues);
        }
        axios.get("/api/userSolvedIssues",{
            headers:{
                "Content-Type": "application/json",
                "username": userNameValue
            }
        }).then(callback);
    },[]);


    return <div>
        {
            issues.flatMap((repoSpecificIssues: any) => {
                return repoSpecificIssues.allIssues.map((repoSpecifcSingleissueItem: any) => {
                    return <IssueCard issueHelper={repoSpecifcSingleissueItem} userHelper={userSolvedIssues} onMarkClick={ (issueUrl)=>{
                        function callback(res)
                        {
                            console.log("Successful !!");
                            var tempHold = [];
                            for(let i = 0; i < userSolvedIssues.length; i++)
                            {
                                tempHold.push(userSolvedIssues[i]);
                            }
                            tempHold.push(issueUrl);
                            setUserSolvedIssues(tempHold);
                        }
                        axios.get('/api/solveIssue',{
                            headers:{
                                "Content-Type": "application/json",
                                "issueurl": issueUrl, 
                                "username": userNameValue
                            }
                        }).then(callback);
                    }}></IssueCard>;
                });
            })
        }
    </div>
}


export default Issues;