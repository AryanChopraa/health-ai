import { Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Dashboard from "./components/dashboard/Dashboard";
import Appointment from "./components/appointment/Appointment";
// import WebSocketClient from "./pages/WebSocketClient";

function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        {/* <WebSocketClient /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:doctorId" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
