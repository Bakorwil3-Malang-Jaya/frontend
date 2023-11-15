import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationLayout from "./components/NavigationLayout/NavigationLayout";
import NavigationDashboardAdmin from "./components/NavigationLayout/NavigationDashboardAdmin";
import NavigationLayoutBidang from "./components/NavigationLayout/NavigationLayoutBidang";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./PrivateRoute";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login/Login";
import Homepage from "./pages/Homepage";
import SuratMasukPage from "./pages/SuratMasukPage";
import Admin from "./pages/Admin";
import RequestPageArsip from "./pages/RequestPageArsip";
import SuratKeluarPage from "./pages/SuratKeluarPage";
import NotFound from "./pages/NotFound";
import axios from "axios";
import RequestPageBidang from "./pages/RequestPageBidang";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <Routes>
          <Route path="/" element={<Login />} />
          {/* ====== ARSIP ====== */}
          <Route
            element={
              <PrivateRoute>
                <NavigationLayout />
              </PrivateRoute>
            }
          >
            <Route path="*" element={<NotFound />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/surat" element={<SuratMasukPage />} />
            <Route path="/suratkeluar" element={<SuratKeluarPage />} />
            <Route path="/request" element={<RequestPageArsip />} />
          </Route>
          {/* ====== BIDANG ====== */}
          <Route
            element={
              <PrivateRoute>
                <NavigationLayoutBidang />
              </PrivateRoute>
            }
          >
            <Route path="/requestbidang" element={<RequestPageBidang />} />
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
