import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  LoginPage,
  DashboardPage,
  ProfilePage,
  SignUpPage,
  RegisterHospitalPage,
  EquipmentPage,
  MaintenancePage,
  SettingsPage,
} from "@/pages";
import { AuthLayout, ProtectedLayout } from "@/layout";
import AuthProvider from "@/context/authContext";
import SidebarContextProvider from "./context/sidebarContext";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AuthProvider>
        <SidebarContextProvider>
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route element={<AuthLayout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/sign_up" element={<SignUpPage />} />
            </Route>

            <Route element={<ProtectedLayout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route
                path="register_hospital"
                element={<RegisterHospitalPage />}
              />
              <Route path="equipments" element={<EquipmentPage />} />
              <Route path="maintenance" element={<MaintenancePage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
          </Routes>
          <ToastContainer />
        </SidebarContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
