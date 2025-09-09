// src/pages/Dashboard.tsx
import { Grid } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SdCardIcon from "@mui/icons-material/SdCard";
import BadgeIcon from "@mui/icons-material/Badge";
import { DashboardTile } from "../components/DashboardTile";

const tiles = [
  { value: 4,   label: "Grupos",           icon: <GroupsIcon fontSize="large" />,        color: "#3F51B5", to: "/grupos" },
  { value: 22,  label: "Usuarios y Roles", icon: <PeopleAltIcon fontSize="large" />,     color: "#00ACC1", to: "/usuarios" },
  { value: 60,  label: "Vehículos",        icon: <DirectionsBusIcon fontSize="large" />, color: "#FB8C00", to: "/vehiculos" },
  { value: 60,  label: "Dispositivos",     icon: <LaptopMacIcon fontSize="large" />,     color: "#43A047", to: "/dispositivos" },
  { value: 60,  label: "SIMs",             icon: <SdCardIcon fontSize="large" />,        color: "#607D8B", to: "/sims" },
  { value: "-", label: "Activos",          icon: <BadgeIcon fontSize="large" />,         color: "#E53935", to: "/activos" },
];

export default function Dashboard() {
  return (
    <Grid container spacing={2} sx={{ px: 2, pt: 1 }}>
      {tiles.map((t) => (
        <Grid key={t.label} item xs={12} sm={6} md={4} lg={3}>
          <DashboardTile {...t} />
        </Grid>
      ))}
    </Grid>
  );
}
