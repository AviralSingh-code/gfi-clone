import axios from "axios";
import { useEffect, useState } from "react";
import { IssueCard } from "ui/IssueCard";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
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
                return (
                    <div style={{border: "2px solid #FF8F8F", margin: "5%", padding: "10px" ,borderRadius: "10px"}}>
                        <div style={{color: "#FF8F8F", fontSize: "1.5em", fontWeight: "bold"}}>{repoSpecificIssues.ownerName}/{repoSpecificIssues.repoName}</div>
                            {repoSpecificIssues.allIssues.map((repoSpecifcSingleissueItem: any) => (
                                <IssueCard
                                    issueHelper={repoSpecifcSingleissueItem}
                                    userHelper={userSolvedIssues}
                                    onMarkClick={(issueUrl) => {
                                        function callback(res) {
                                            console.log("Successful !!");
                                            var tempHold = [];
                                            for (let i = 0; i < userSolvedIssues.length; i++) {
                                                tempHold.push(userSolvedIssues[i]);
                                            }
                                            tempHold.push(issueUrl);
                                            setUserSolvedIssues(tempHold);
                                        }
                                        axios.get('/api/solveIssue', {
                                            headers: {
                                                "Content-Type": "application/json",
                                                "issueurl": issueUrl,
                                                "username": userNameValue
                                            }
                                        }).then(callback);
                                    }}

                                    onUnMarkClick={(issueUrl) => {
                                        function callback(res) {
                                            console.log("Successful !!");
                                            var tempHold = [];
                                            for (let i = 0; i < userSolvedIssues.length; i++) {
                                                if(userSolvedIssues[i] != issueUrl)
                                                {
                                                    tempHold.push(userSolvedIssues[i]);
                                                }
                                            }
                                            setUserSolvedIssues(tempHold);
                                        }
                                        axios.delete('/api/solveIssue', {
                                            headers: {
                                                "Content-Type": "application/json",
                                                "issueurl": issueUrl,
                                                "username": userNameValue
                                            }
                                        }).then(callback);
                                    }}
                                ></IssueCard>
                            ))}
                    </div>
                );
            })
        }
    </div>
}


export default Issues;