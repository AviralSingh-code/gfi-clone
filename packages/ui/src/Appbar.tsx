import { AppBar, Button, Card, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export function Appbar({userState, onSigninParent, onSignupParent, onSignoutParent, onAddNewProjectParent})
{
  if(userState == null)
  {
    return ( <StateOne onSignup={()=>{onSignupParent();}} onSignin={()=> {onSigninParent();}}></StateOne>);
  }
  else
  {
    return ( <StateTwo onSignout={()=>{onSignoutParent();}} userState={userState} onAddNewProject={()=>{onAddNewProjectParent();}}></StateTwo> );
  }
}


function StateOne(props)
{
  return (
    <AppBar position="sticky" style={{backgroundColor: "black", color: "#FF8F8F"}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }} sx={{fontStyle: 'italic'}}>
              GfI
            </Typography>
            <Button style={{backgroundColor: "#FF8F8F",
            marginRight: 10}}
            variant="contained"
            onClick={()=>{
              props.onSignup();
            }}>SIGN UP</Button>
            <Button color="inherit"
            variant="outlined"
             onClick={()=>{
              props.onSignin();
            }}>SIGN IN</Button>
          </Toolbar>
        </AppBar>
  );
}

function StateTwo(props)
{
  return (
    <AppBar position="sticky" style={{backgroundColor: "black", color: "#FF8F8F"}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }} sx={{fontStyle: 'italic'}}>
              GfI
            </Typography>
            <div style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
              <p style={{color: "#FF8F8F"}}>Hi {props.userState}</p>
              <Button style={{backgroundColor: "#FF8F8F",
            marginRight: 10,
            marginLeft: 10}}
              variant="contained"
              onClick={()=>{
                props.onAddNewProject();
              }}>ADD NEW PROJECT</Button>
              <Button color="inherit"
            variant="outlined"
              onClick={()=>{
                props.onSignout();
              }}>SIGN OUT</Button>
            </div>
          </Toolbar>
        </AppBar>
  );
}