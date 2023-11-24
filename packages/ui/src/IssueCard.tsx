import { Button, Card, Link, Typography } from "@mui/material";

export function IssueCard(props)
{
    return <Card style={{
        border: "2px solid black",
        margin: 10,
        width: 300,
        minHeight: 100,
    }}>
        <Link href={props.issueHelper.issueUrl}>{props.issueHelper.issueTitle}</Link>
        {/* <Typography textAlign={"center"} variant="h6">
            {props.issueHelper.issueTitle}
        </Typography>
        <Typography textAlign={"center"} variant="subtitle1">
            {props.issueHelper.issueUrl}
        </Typography> */}
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
}