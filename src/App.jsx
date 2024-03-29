import { Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile";
import WebSocketClient from "./pages/WebSocketClient";
import Chatbot from "./pages/Chatbot";
import DocHome from "./components/doc/docHome";
import DocProfile from "./components/doc/docProfile";
import DocRegister from "./components/DocRegister";
import Dashboardpage from "./pages/DashboardPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboardpage />} />
        <Route path="/doc/websocket" element={<WebSocketClient />} />
        <Route path="/doc/profile" element={<DocProfile />} />
        <Route path="/doc/home" element={<DocHome />} />
        <Route path="/chat" element={<Chatbot />} />
        {/* <Route path="/doc/login" element={<DocLogin />} /> */}
        <Route path="/doc/signup" element={<DocRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
