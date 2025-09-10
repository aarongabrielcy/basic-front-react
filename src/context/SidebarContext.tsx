import React, { createContext, useEffect, useMemo, useRef, useState } from "react";

export type SidebarContextType = {
  open: boolean;                     // estado abierto/cerrado
  isCollapse: boolean;               // alias (true cuando está colapsado)
  toggleSidebar: () => void;         // mantiene tu API actual
  openSidebar: () => void;
  closeSidebar: () => void;

  // Config compartida (para que Sidebar/otros no rompan)
  textColor: string;
  width: string;           // ej: "270px"
  collapsewidth: string;   // ej: "80px"
  themeColor: string;
};

export const SidebarContext = createContext<SidebarContextType>({
  open: true,
  isCollapse: false,
  toggleSidebar: () => {},
  openSidebar: () => {},
  closeSidebar: () => {},
  textColor: "#2b2b2b",
  width: "260px",
  collapsewidth: "80px",
  themeColor: "#5d87ff",
});

type ProviderProps = {
  children: React.ReactNode;
  defaultOpen?: boolean;
  textColor?: string;
  width?: string;
  collapsewidth?: string;
  themeColor?: string;
};

export const SidebarProvider: React.FC<ProviderProps> = ({
  children,
  defaultOpen = true,
  textColor = "#2b2b2b",
  width = "260px",
  collapsewidth = "80px",
  themeColor = "#5d87ff",
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const initialWidth = useRef<number | null>(null);

  // Auto-ocultar cuando el viewport cae por debajo del 50% del tamaño inicial
  useEffect(() => {
    const onResize = () => {
      if (initialWidth.current === null) initialWidth.current = window.innerWidth;
      const threshold = initialWidth.current * 0.5;
      if (open && window.innerWidth <= threshold) setOpen(false);
    };
    onResize(); // evaluación inicial
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const value = useMemo<SidebarContextType>(() => {
    const isCollapse = !open;
    return {
      open,
      isCollapse,
      toggleSidebar: () => setOpen((v) => !v),
      openSidebar: () => setOpen(true),
      closeSidebar: () => setOpen(false),
      textColor,
      width,
      collapsewidth,
      themeColor,
    };
  }, [open, textColor, width, collapsewidth, themeColor]);

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};
