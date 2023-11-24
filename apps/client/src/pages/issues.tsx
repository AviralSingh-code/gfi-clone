import axios from "axios";
import { useEffect, useState } from "react";
import { IssueCard } from "ui/IssueCard";

function Issues()
{
    const[issues, setIssues] = useState([]);
    const[userSolvedIssues, setUserSolvedIssues] = useState([]);
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

    // useEffect(()=>{
    //     function callback(res)
    //     {
    //         setUserSolvedIssues(res.data.solvedIssues);
    //     }
    //     axios.get("/api/userSolvedIssues",{
    //         headers:{
    //             "authorization": "Bearer " + localStorage.getItem("token")
    //         }
    //     }).then(callback);
    // },[]);

    return <div>
        {
            issues.flatMap((repoSpecificIssues: any) => {
                return repoSpecificIssues.allIssues.map((repoSpecifcSingleissueItem: any) => {
                    return <IssueCard issueHelper={repoSpecifcSingleissueItem}></IssueCard>;
                });
            })
        }
    </div>
}


export default Issues;