// src/components/DashboardTile.tsx
import * as React from "react";
import { ButtonBase, Paper, Stack, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  value: string | number;
  label: string;
  icon: React.ReactNode;
  color?: string;         // hex o cualquier CSS color
  to?: string;            // ruta opcional
  sx?: SxProps;
};

export function DashboardTile({ value, label, icon, color = "#3f51b5", to, sx }: Props) {
  const content = (
    <Paper
      elevation={3}
      sx={{
        p: 2.5,
        borderRadius: 2,
        width: "100%",
        bgcolor: color,
        color: "#fff",
        transition: "transform .12s ease, box-shadow .12s ease",
        "&:hover": { transform: "translateY(-2px)", boxShadow: 6 },
        ...sx,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            width: 46, height: 46, borderRadius: 1.2,
            bgcolor: "rgba(0,0,0,.18)",
          }}
        >
          {icon}
        </Stack>

        <Stack>
          <Typography variant="h5" fontWeight={800} lineHeight={1.1}>
            {value}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {label}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );

  return to ? (
    <ButtonBase
      component={RouterLink}
      to={to}
      sx={{ textAlign: "left", width: "100%", borderRadius: 2 }}
      focusRipple
    >
      {content}
    </ButtonBase>
  ) : (
    content
  );
}
