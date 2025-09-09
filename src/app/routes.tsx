import { Routes, Route, Navigate } from "react-router-dom";

// Páginas
import ProfileUser from "../pages/ProfileUser";
import Analytical from "../pages/Analytical";
import Geofences from "../pages/Geofences";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Ruta por defecto */}
      <Route index element={<Dashboard />} />

      {/* Tus páginas */}
      <Route path="profile" element={<ProfileUser />} />
      <Route path="ana" element={<Analytical />} />
      <Route path="test" element={<Geofences />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

