import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography, useThemeProps } from "@mui/material";
import { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';


export function AddProjectPage(props: {
  onAddNewProject: (ownername: string, reponame: string) => void
})
{
    const[owner, setOwner] = useState("");
    const[repo, setRepo] = useState("");
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
          <Avatar sx={{ m: 1, bgcolor:  "#FF8F8F" }}>
            <GitHubIcon></GitHubIcon>
          </Avatar>
          <Typography textAlign={"center"} component="h1" variant="h5">
          Add project details below...
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                    onChange={(e)=>{
                        setOwner(e.target.value);
                    }}
                    required
                    fullWidth
                    id="owner"
                    label="Owner Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    onChange={(e)=>{
                        setRepo(e.target.value);
                    }}
                    required
                    fullWidth
                    label="Repository Name"
                    id="repo"
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor: "#FF8F8F" }}
              onClick={()=>{
                props.onAddNewProject(owner, repo);
              }}
            >
              ADD NEW PROJECT
            </Button>
          </Box>
        </Box>
      </Container>
    );
}