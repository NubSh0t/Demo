import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Card, Stack, Typography } from "@mui/material";
import Title from "../../components/text/Title";
import LoginField from "./LoginField";

const Login = () => {
  return (
    <Box sx={{ minHeight: "calc(100vh - 180px)", px: { xs: 2, sm: 3 }, py: { xs: 4, md: 8 } }}>
      <Box sx={{ maxWidth: 1120, mx: "auto" }}>
        <Title title="Login"></Title>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={6}
            xl={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card elevation={3} sx={{ p: { xs: 3, sm: 5 }, zIndex: 1, width: "100%", maxWidth: "500px", borderRadius: 2 }}>
              <LoginField />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
