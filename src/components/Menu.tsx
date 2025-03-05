import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { SidebarContext } from "./Sidebar";

type MenuProps = {
  children: React.ReactNode;
  subHeading?: string;
};

const Menu = ({ children, subHeading = "menu" }: MenuProps) => {
  const customizer = React.useContext(SidebarContext);

  return (
    <Box sx={{ px: customizer.isCollapse ? 2 : 3, pt: 2 }}>
      <List
        component="nav"
        subheader={
          <ListSubheader
            component="div"
            sx={{
              paddingY: "3px",
              color: customizer.textColor,
              paddingX: "0px",
              lineHeight: "20px",
              fontWeight: "bold",
              fontSize: "12px",
              background: "transparent",
            }}
          >
            {!customizer.isCollapse ? subHeading : "..."}
          </ListSubheader>
        }
      >
        {children}
      </List>
    </Box>
  );
};

export { Menu };
