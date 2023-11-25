import { AppBar, Button, Card, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export function Appbar({userState, onSigninParent, onSignupParent, onSignoutParent})
{
  if(userState == null)
  {
    return ( <StateOne onSignup={()=>{onSignupParent();}} onSignin={()=> {onSigninParent();}}></StateOne>);
  }
  else
  {
    return ( <StateTwo onSignout={()=>{onSignoutParent();}} userState={userState}></StateTwo> );
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
            <Button color="inherit"
            onClick={()=>{
              props.onSignup();
            }}>SIGN UP</Button>
            <Button color="inherit"
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
              justifyContent: "center"
            }}>
              <p style={{color: "#FF8F8F"}}>Hi {props.userState}</p>
              <Button color="inherit"
              onClick={()=>{
                props.onSignout();
              }}>SIGN OUT</Button>
            </div>
          </Toolbar>
        </AppBar>
  );
}