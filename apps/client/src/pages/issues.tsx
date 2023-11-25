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


    return <div>
        {
            issues.flatMap((repoSpecificIssues: any) => {
                return repoSpecificIssues.allIssues.map((repoSpecifcSingleissueItem: any) => {
                    return <IssueCard issueHelper={repoSpecifcSingleissueItem} userHelper={userSolvedIssues} onMarkClick={ (issueId)=>{
                        function callback(res)
                        {
                            console.log("Successful !!");
                        }
                        axios.get('/api/solveIssue',{
                            headers:{
                                "Content-Type": "application/json",
                                "issueId": issueId, 
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