import * as React from "react";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Profile } from "./UserProfile";
import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";


type SidebarContextType = {
  isCollapse: boolean;
  toggleSidebar: () => void;
  textColor: string;
  width: string;
  collapsewidth: string;
  themeColor: string;
};

export const SidebarContext = React.createContext<SidebarContextType>({
  isCollapse: false,
  toggleSidebar: () => {},
  textColor: "#000",
  width: "260px",
  collapsewidth: "80px",
  themeColor: "#5d87ff",
});

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
  const [isCollapse, setIsCollapse] = React.useState(false);

  const toggleSidebar = () => {
    setIsCollapse((prev) => !prev);
  };

  const toggleWidth = isCollapse ? collapsewidth! : width;

  const myTheme = createTheme({
    direction: direction,
    palette: {
      mode: mode,
      primary: {
        main: themeColor,
      },
      secondary: {
        main: themeSecondaryColor,
        contrastText: "#fff",
      },
    },
  });

  const effectiveTextColor = mode === "dark" ? "rgba(255,255,255, 0.9)" : textColor;

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
          backgroundColor: "  #eaedeeff",
          borderRight: "1px solid #ddd",
          position: "fixed",
          top:60,
          left: 0,
        }}
      >
        <SidebarContext.Provider
          value={{
            isCollapse,
            toggleSidebar,
            textColor: effectiveTextColor!,
            width,
            collapsewidth: collapsewidth!,
            themeColor,
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
        </SidebarContext.Provider>
      </Box>
    </ThemeProvider>
  );
};

export { Sidebar };
