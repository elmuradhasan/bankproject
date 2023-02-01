import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography variant="h1">404</Typography>
              <Typography variant="h6">
                The page you’re looking for doesn’t exist.
              </Typography>
              <Link to="/">
                <Button variant="contained" sx={{ marginTop: "15px" }}>
                  Back Home
                </Button>
              </Link>
            </Grid>
            <Grid xs={6}>
              <img
                src="assets/images/error.jpg"
                alt=""
                width={500}
                height={250}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default PageNotFound;
