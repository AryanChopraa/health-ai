import { Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Homepage from "./pages/Homepage";
// import Navbar from "./components/common/Navbar";
import DashboardPage from "./pages/DashboardPage";
// import WebSocketClient from "./pages/WebSocketClient";

function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        {/* <WebSocketClient /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* <Route path="/dashboard/:doctorId" element={<Appointment />} /> */}
      </Routes>
    </div>
  );
}

export default App;
