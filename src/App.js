import { Routes, Route } from "react-router-dom";
import Index from "./landingpages/Index";
import Auth from "./auth/Index";
import Dashboard from "./dashboard/Index";
import MainDashboard from "./user/Dashboard";
import "./App.css";
import Profile from "./user/profile/Index";
import UploadCs from "./user/cv/UploadCs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/login" element={<Auth type="signin" />} />{" "}
        <Route path="/signup" element={<Auth type="register" />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MainDashboard />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="cv-upload" element={<UploadCs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
