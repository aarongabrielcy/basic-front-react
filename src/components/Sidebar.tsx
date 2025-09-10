// Sidebar.tsx
import * as React from "react";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Profile } from "./UserProfile";
import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";

// ⬇️ usa el contexto nuevo
import { SidebarContext } from "../context/SidebarContext";

type SidebarProps = {
  children: React.ReactNode;
  width?: string;
  collapsewidth?: string;
  textColor?: string;
  themeColor?: string;
  themeSecondaryColor?: string;
  mode?: "light" | "dark";
  direction?: "ltr" | "rtl";
  userName?: string;
  designation?: string;
  showProfile?: boolean;
  userimg?: string;
  onLogout?: () => void;
};

let handleLogout = () => {
  alert("Logout Successfully");
};

const Sidebar = ({
  children,
  width = "260px",
  collapsewidth = "80px",
  textColor = "#2b2b2b",
  themeColor = "#5d87ff",
  themeSecondaryColor = "#49beff",
  mode = "light",
  direction = "ltr",
  userName = "Mathew",
  designation = "Designer",
  showProfile = true,
  userimg = "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg",
  onLogout = handleLogout,
}: SidebarProps) => {
  // ⬇️ Leer estado global del sidebar (mismo que usa el ButtonAppBar)
  const ctx = React.useContext(SidebarContext);
  const isCollapse = ctx ? ctx.isCollapse : false;

  // si el provider está arriba, sincronizamos tamaños con el contexto;
  // si no, usamos los props locales como fallback:
  const _width = ctx?.width ?? width;
  const _collapsewidth = ctx?.collapsewidth ?? collapsewidth;
  const effectiveTextColor =
    mode === "dark" ? "rgba(255,255,255, 0.9)" : ctx?.textColor ?? textColor;

  const toggleWidth = isCollapse ? _collapsewidth : _width;

  const myTheme = createTheme({
    direction: direction,
    palette: {
      mode: mode,
      primary: { main: ctx?.themeColor ?? themeColor },
      secondary: {
        main: themeSecondaryColor,
        contrastText: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={myTheme}>
      <Box
        dir={direction}
        sx={{
          width: toggleWidth,
          flexShrink: 0,
          fontFamily: "inherit",
          color: effectiveTextColor,
          transition: "width 0.3s ease",
          height: "100vh",
          overflowX: "hidden",
          backgroundColor: " #eaedeeff",
          borderRight: "1px solid #ddd",
          position: "fixed",
          top: 60,
          left: 0,
        }}
      >
        <Logo
          component={Link}
          href="/"
          img="https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png"
        >
          AdminMart
        </Logo>

        {showProfile ? (
          <Profile
            userName={userName}
            designation={designation}
            userimg={userimg}
            isCollapse={isCollapse}
            onLogout={onLogout}
          />
        ) : null}

        {children}
      </Box>
    </ThemeProvider>
  );
};

export { Sidebar };
