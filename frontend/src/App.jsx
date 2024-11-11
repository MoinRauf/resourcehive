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

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>

          <Route element={<ProtectedLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
