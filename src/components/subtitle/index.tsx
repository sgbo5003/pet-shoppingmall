import { Typography, createTheme } from "@mui/material";
import React from "react";

export const defaultTheme = createTheme({
  typography: {
    subtitle1: {
      fontWeight: 600,
      fontSize: 24,
    },
  },
});

const SubTitleComponent = (props: { title: string }) => {
  const { title } = props;
  return (
    <div className="py-40 after:content-[''] after:inline-block after:border-t after:border-[#444] after:w-[25px] text-center">
      <Typography component="h1" variant="subtitle1">
        {title}
      </Typography>
    </div>
  );
};

export default SubTitleComponent;
