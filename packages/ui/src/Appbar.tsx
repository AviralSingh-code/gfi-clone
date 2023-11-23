import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export function Appbar()
{
    return (
        <AppBar position="static" style={{backgroundColor: "black", color: "#FF8F8F"}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Hello Bar
            </Typography>
            <Button color="inherit">SIGNUP</Button>
            <Button color="inherit">LOGIN</Button>
          </Toolbar>
        </AppBar>
    );
}