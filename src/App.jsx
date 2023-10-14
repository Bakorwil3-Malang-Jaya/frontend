import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationLayout from "./components/NavigationLayout/NavigationLayout";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./PrivateRoute"
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login/Login";
import Pengumuman from "./pages/Homepage";
import Berita from "./pages/SuratMasukPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            element={
              <PrivateRoute>
                <NavigationLayout />
              </PrivateRoute>
            }>
            <Route path="/homepage" element={<Pengumuman />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/surat" element={<Berita />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
