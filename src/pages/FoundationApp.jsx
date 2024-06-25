import { Suspense } from 'react'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { AddCard } from '@mui/icons-material';
import { Link, Outlet } from "react-router-dom";
import Loader from "../components/Loader";

const drawerWidth = 240;
//const drawerWidthMarginLeft = 281;

const FoundationApp = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        //sx={{ width: `calc(100% - ${drawerWidthMarginLeft}px)`, ml: `${drawerWidthMarginLeft}px`, right: '40px', backgroundColor: '#234f7a' }}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Foundation App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
            <ListItem key={"Nonprofit"} disablePadding style={{ fontWeight: 900 }}>
                <ListItemButton component={Link} to="/nonprofit">
                    <ListItemIcon>
                    <AddCard />
                    </ListItemIcon>
                    <ListItemText primary={"Nonprofit"} />
                </ListItemButton>
            </ListItem>
            <ListItem key={"Send email"} disablePadding style={{ fontWeight: 900 }}>
                <ListItemButton component={Link} to="/sendemail">
                    <ListItemIcon>
                    <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Send email"} />
                </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 5, marginTop: '5%', textAlign: 'justify' }}
      >
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
}

export default FoundationApp;