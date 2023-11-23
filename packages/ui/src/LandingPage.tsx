import { Button, Container, Grid, Typography, createTheme } from "@mui/material";
import Head from 'next/head';

export function LandingPage()
{
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      width: "100wh",
      height: "100vh",
      marginTop: "5%"
    }}>
      <Container>
          <Head>
            <title>Good First Issue Website</title>
            <meta name="description" content="Sell and buy courses online" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet"/>
          </Head>

          <main style={{
            margin: "0px"
          }}>
            <Grid container rowSpacing={10} columnSpacing={2} justifyContent="center" alignItems="center">
              <Grid item xs={12} md={6}>
                <img src="https://blog-cdn.everhour.com/blog/wp-content/uploads/2023/03/mohammad-rahmani-EZrVFJUysLk-unsplash.jpg" alt="Github Image" style={{ width: '100%', borderRadius: '8px' }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <div style={{

                  width: "100wh"
                }}>
                  <h1>Discover Promising First Issues</h1>
                  <h2>
                    Identify Opportunities to Contribute
                  </h2>
                  <h3>
                    Kickstart your contribution journey today!
                  </h3>
                </div>
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  // backgroundColor: "#E0F4FF",
                  width: "100wh",
                  margin: "0px"
                }}>
                  <Button variant="contained"  style={{ marginRight: '16px', backgroundColor: "#FF8F8F" }}>
                    SIGN UP
                  </Button>
                  <Button variant="contained" style={{backgroundColor: "#FF8F8F" }}>
                    SIGN IN
                  </Button>
                </div>
              </Grid>
            </Grid>
          </main>

          <footer style={{
            // backgroundColor: "#E0F4FF"
          }}>
            <Typography textAlign={"center"} variant="body2" color="textSecondary" align="center">
              © {new Date().getFullYear()} Course Selling Website. All rights reserved.
            </Typography>
          </footer>
        </Container>
      </div>
  );
}