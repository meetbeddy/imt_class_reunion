import { Routes, Route } from "react-router-dom";
import Index from "./landingpages/Index";
import Auth from "./auth/Index";
import Dashboard from "./dashboard/Index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/login" element={<Auth type="signin" />} />{" "}
        <Route path="/signup" element={<Auth type="register" />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
