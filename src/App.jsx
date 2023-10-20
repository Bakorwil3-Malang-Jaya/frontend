import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationLayout from "./components/NavigationLayout/NavigationLayout";
import NavigationDashboardAdmin from "./components/NavigationLayout/NavigationDashboardAdmin";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./PrivateRoute";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login/Login";
import Homepage from "./pages/Homepage";
import SuratMasukPage from "./pages/SuratMasukPage";
import Admin from "../src/components/Admin/Admin";
import NotFound from "./pages/NotFound";
import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <Routes>
          <Route path="/" element={<Login />} />
          {/* ====== USER ====== */}
          <Route
            element={
              <PrivateRoute>
                <NavigationLayout />
              </PrivateRoute>
            }
          >
            <Route path="/homepage" element={<Homepage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/surat" element={<SuratMasukPage />} />
          </Route>
          {/* ====== ADMIN ====== */}
          <Route
            element={
              <PrivateRoute>
                <NavigationDashboardAdmin />
              </PrivateRoute>
            }
          >
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
