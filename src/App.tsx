import { Box } from "@mui/material";
import { Suspense } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CategoryData from "./CategoryData";
import LoginModal from "./LoginModal";
const App = () => {
  return (
    <Box>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        icon={false}
      />
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/LoginModal" replace />} />
            <Route path="/LoginModal" element={<LoginModal />} />
            <Route path="/CategoryData" element={<CategoryData />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </Box>
  );
};

export default App;
