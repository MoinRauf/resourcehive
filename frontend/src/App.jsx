import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  LoginPage,
  DashboardPage,
  ProfilePage,
  SignUpPage,
} from "@/pages";
import { AuthLayout, ProtectedLayout } from "@/layout";
import AuthProvider from "@/context/authContext";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AuthProvider>
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
          </Route>
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </>
  );
}

export default App;
