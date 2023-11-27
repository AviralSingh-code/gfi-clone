import { Button, Card, Checkbox, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export function IssueCard(props)
{
    let flag: Boolean = false;
    for(let i = 0; i < props.userHelper.length; i++)
    {
        if((props.userHelper[i] == props.issueHelper.issueUrl))
        {
            flag = true;
            break;
        }
    }

    if(flag)
    {
        return ( <StateOne props={props}></StateOne> );
    }
    else
    {
        return ( <StateTwo props={props}></StateTwo> );
    }

}

function StateOne(props)
{
    return (
        <Card style={{
            border: "2px solid black",
            margin: 10,
            minHeight: 100,
            borderRadius: "10px",
            backgroundColor: "#9ADE7B"
        }}>
            
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                margin: 5
            }}>
                <a style={{textDecoration: "none", color: "black", fontWeight: "bolder"}} href={props.props.issueHelper.issueUrl} target="_blank">{props.props.issueHelper.issueTitle}</a>
                <Checkbox
                checked={true}
                color="default"
                onChange={()=>{
                    props.props.onUnMarkClick(props.props.issueHelper.issueUrl);
                }}
                inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
        </Card>
    );
}

function StateTwo(props)
{
    return (
        <Card style={{
            border: "2px solid black",
            margin: 10,
            borderRadius: "10px",
            minHeight: 100,
        }}>
            
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                margin: 5
            }}>
                <a style={{textDecoration: "none", color: "white", fontWeight: "bolder"}} href={props.props.issueHelper.issueUrl} target="_blank">{props.props.issueHelper.issueTitle}</a>
                <Checkbox
                checked={false}
                onChange={()=>{
                    props.props.onMarkClick(props.props.issueHelper.issueUrl);
                    // props.setChecked(false);
                }}
                inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
        </Card>
    );
}
