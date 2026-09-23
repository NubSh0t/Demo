import React from "react";
import { styled, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";
import Notifications from "../Notifications";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
  minWidth: 0,
  overflowX: "hidden"
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  minWidth: 0,
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent"
}));

const Layout = () => {
  return (
    <MainWrapper>
      <PageWrapper>
        <Header />
        <Container
          sx={{
            flex: 1,
            width: "100%",
            minWidth: 0,
            maxWidth: "none",
            padding: "0px !important"
          }}
        >
          <Outlet />
          {Notifications()}
        </Container>
        <Footer />
      </PageWrapper>
    </MainWrapper>
  );
};

export default Layout;
