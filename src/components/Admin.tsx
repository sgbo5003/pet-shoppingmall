import { Container, ThemeProvider } from "@mui/material";
import React from "react";
import SubTitleComponent, { defaultTheme } from "./subtitle/index.tsx";

const Admin = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <SubTitleComponent title="ADMIN" />
      </Container>
    </ThemeProvider>
  );
};

export default Admin;
