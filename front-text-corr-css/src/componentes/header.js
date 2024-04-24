import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar pasition="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Minha aplicação
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
