import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";

export function Signup(props: {
    onClick: (username: string, password: string) => void
})
{
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    return (
      <Container component="main" maxWidth="xs">
        
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography textAlign={"center"} component="h1" variant="h5">
          Welcome to GfI. Sign up below.
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              onClick={()=>{
                props.onClick(email, password);
              }}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor: "#FF8F8F" }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    );
}
