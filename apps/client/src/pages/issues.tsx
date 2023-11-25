import axios from "axios";
import { useEffect, useState } from "react";
import { IssueCard } from "ui/IssueCard";
import { useRecoilValue } from "recoil";
import { userEmailState } from "store";
function Issues()
{
    const[issues, setIssues] = useState([]);
    const[userSolvedIssues, setUserSolvedIssues] = useState([]);
    const userNameValue = useRecoilValue(userEmailState);
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

    console.log(userSolvedIssues);

    return <div>
        {
            issues.flatMap((repoSpecificIssues: any) => {
                return repoSpecificIssues.allIssues.map((repoSpecifcSingleissueItem: any) => {
                    return <IssueCard issueHelper={repoSpecifcSingleissueItem} userHelper={userSolvedIssues}></IssueCard>;
                });
            })
        }
    </div>
}


export default Issues;