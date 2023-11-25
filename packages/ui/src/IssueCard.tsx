import { Button, Card, Link, Typography } from "@mui/material";

export function IssueCard(props)
{
    let flag: Boolean = false;
    for(let i = 0; i < props.userHelper.length; i++)
    {
        if((props.userHelper.issueTitle == props.issueHelper.issueTitle) && (props.userHelper.issueUrl == props.issueHelper.issueUrl))
        {
            flag = true;
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
            width: 300,
            minHeight: 100,
            backgroundColor: "#9ADE7B"
        }}>
            <Link href={props.props.issueHelper.issueUrl}>{props.props.issueHelper.issueTitle}</Link>
            <div style={{
                display: "flex",
                justifyContent: "center",
                margin: 5
            }}>
                <Button
                    size="large" 
                    variant="contained"
                >Edit</Button>
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
            width: 300,
            minHeight: 100,
        }}>
            <Link href={props.props.issueHelper.issueUrl}>{props.props.issueHelper.issueTitle}</Link>
            <div style={{
                display: "flex",
                justifyContent: "center",
                margin: 5
            }}>
                <Button
                    size="large" 
                    variant="contained"
                >Edit</Button>
            </div>
        </Card>
    );
}
