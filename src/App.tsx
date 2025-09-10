// App.tsx
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Menu } from "./components/Menu";
import { MenuItem } from "./components/MenuItem";
import { Submenu } from "./components/Submenu";
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import DatasetLinkedIcon from '@mui/icons-material/DatasetLinked';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import SimCardIcon from '@mui/icons-material/SimCard';
import DevicesIcon from '@mui/icons-material/Devices';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import PushPinIcon from '@mui/icons-material/PushPin';
import { Link, BrowserRouter } from "react-router-dom";
import { ButtonAppBar } from "./components/ButtonAppBar";
import { Box } from "@mui/material";
import AppRoutes from "./app/routes";

// ⬇️ provider + contexto
import { SidebarProvider, SidebarContext } from "./context/SidebarContext";
import * as React from "react";

function AppLayout() {
  // ⬇️ lee también collapsewidth
  const { open, width, collapsewidth } = React.useContext(SidebarContext);

  // ⬇️ margen a la izquierda según estado (clave de la corrección)
  const leftMargin = open ? width : collapsewidth;

  return (
    <>
      <ButtonAppBar />

      <Sidebar width={"270px"}>
        <Menu subHeading="TRACKINGS">
          <MenuItem icon={<ShareLocationIcon />} component={Link} link="/profile" badge={true}>
            Locate
          </MenuItem>
          <MenuItem icon={<PushPinIcon />} component={Link} link="/test">
            Geofences
          </MenuItem>
          <MenuItem icon={<CottageOutlinedIcon />} component={Link} link="/ana">
            Analytical
          </MenuItem>
        </Menu>

        <Menu subHeading="REPORTS">
          <MenuItem icon={<ScreenSearchDesktopIcon />}>Raw data</MenuItem>
          <MenuItem icon={<ContentPasteGoIcon />}>All reports</MenuItem>
        </Menu>

        <Menu subHeading="DASHBOARD">
          <Submenu icon={<DevicesIcon/>} title="Entities">
            <MenuItem icon={<DriveEtaIcon/>}>Vehucles</MenuItem>
            <MenuItem icon={<DevicesOtherIcon />}>Devices</MenuItem>
            <Submenu icon={<SimCardIcon/>} title="SIMs">
              <MenuItem>Telcel</MenuItem>
              <MenuItem>ATT</MenuItem>
            </Submenu>
          </Submenu>
          <MenuItem icon={<WaterfallChartIcon />}>Metrics</MenuItem>
          <MenuItem
            icon={<DatasetLinkedIcon />}
            target="_blank"
            component={Link}
            link="https://google.com"
          >
            External Link
          </MenuItem>
        </Menu>
      </Sidebar>

      {/* Contenido principal: usa leftMargin */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,                   // AppBar ~64px (8 * 8px)
          ml: leftMargin,          // ⬅️ aquí está el fix
          transition: "margin-left .2s ease",
          //border: 1,
        }}
      >
        <AppRoutes />
      </Box>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SidebarProvider
        defaultOpen={true}
        width="270px"
        collapsewidth="80px"
        textColor="#2b2b2b"
        themeColor="#5d87ff"
      >
        <AppLayout />
      </SidebarProvider>
    </BrowserRouter>
  );
}
