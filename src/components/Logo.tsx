import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SidebarContext } from "./Sidebar";
import { Link } from "@mui/material";

type LogoProps = {
  children: React.ReactNode;
  img?: string;
  href?: string;
  component?: React.ElementType;
};

const Logo = ({
  children,
  img = "https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png",
  href = "/",
  component,
}: LogoProps) => {
  const customizer = React.useContext(SidebarContext);

  const LogoStyled: any = styled(Link)(() => ({
    whiteSpace: "nowrap",
    overflow: customizer.isCollapse ? "hidden" : "visible",
    WebkitLineClamp: "1",
    display: "block",

    padding: "15px 22px",
    textOverflow: "ellipsis",
  }));

  return (
    <LogoStyled to={href} component={component}>
      {img === "" ? (
        <Typography variant="body1">{children}</Typography>
      ) : (
        <Box
          component="img"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          src={img}
        />
      )}
    </LogoStyled>
  );
};

export { Logo };
