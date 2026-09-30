import { Route, Routes } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardApp from "./components/DashboardApp";
import { OverviewPage, RecordPage, UserPage } from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardApp />
            </ProtectedRoute>
          }
        >
          <Route index element={<OverviewPage />} />
          <Route path="/records" element={<RecordPage />} />
          <Route path="/auth-user" element={<UserPage />} />
        </Route>

        <Route path="/" element={<LayoutPage />}>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
