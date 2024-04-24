import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function Aside() {
  const [abertoMobile, setAbertoMobile] = useState(false);
  const tema = useTheme();
  const ehMobile = useMediaQuery(tema.breakpoints.down("sm"));
  const [drawerHeight, setDrawerHeight] = useState("auto");

  useLayoutEffect(() => {
    const updateHeight = () => {
      const header = document.querySelector("header");
      const footer = document.querySelector("footer");

      if (header && footer) {
        const headerHeight = header.offsetHeight;
        const footerHeight = footer.offsetHeight;
        const availableHeight = `calc(100vh - ${
          headerHeight + footerHeight
        }px)`;
        setDrawerHeight(availableHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const alternarDrawer = () => {
    setAbertoMobile(!abertoMobile);
  };

  const conteudoDrawer = (
    <List sx={{ maxHeight: drawerHeight, overflow: "auto" }}>
      {[
        { texto: "Home", icone: <HomeIcon />, caminho: "/" },
        { texto: "Sobre", icone: <InfoIcon />, caminho: "/sobre" },
        { texto: "Serviços", icone: <WorkIcon />, caminho: "/servicos" },
        { texto: "Contato", icone: <ContactMailIcon />, caminho: "/contato" },
      ].map((item) => (
        <ListItem button key={item.texto} component={Link} to={item.caminho}>
          <ListItemIcon>{item.icone}</ListItemIcon>
          <ListItemText primary={item.texto} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <nav>
      <IconButton
        color="inherit"
        aria-label="abrir drawer"
        edge="start"
        onClick={alternarDrawer}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant={ehMobile ? "temporary" : "permanent"}
        open={abertoMobile}
        onClose={alternarDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
            height: drawerHeight,
            overflow: "auto",
            marginTop: "64px",
            borderRight: "none",
          },
        }}
      >
        {conteudoDrawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: 240,
            height: drawerHeight,
            overflow: "auto",
            marginTop: "64px",
            borderRight: "none",
          },
        }}
        open
      >
        {conteudoDrawer}
      </Drawer>
    </nav>
  );
}

export default Aside;
