import React, { useState } from "react";
import RequestCard from "./RequestCard";

const AppointmentList = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">All Appointments</h1>
      {/* Your appointment cards go here */}
    </div>
  );
};

const RequestList = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Appointment Requests</h1>
      <RequestCard date="2024-03-15" time="10:00 AM" patientId="1234" />
      <RequestCard date="2024-03-17" time="2:30 PM" patientId="5678" />
      <RequestCard date="2024-03-19" time="9:00 AM" patientId="9012" />
      <RequestCard date="2024-03-20" time="3:45 PM" patientId="3456" />
      <RequestCard date="2024-03-22" time="11:30 AM" patientId="7890" />
      <RequestCard date="2024-03-24" time="1:15 PM" patientId="2345" />
      <RequestCard date="2024-03-25" time="4:00 PM" patientId="6789" />
    </div>
  );
};

const DocHome = () => {
  const [activeComponent, setActiveComponent] = useState("appointments");

  const switchComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <button
          className={`mr-4 px-4 py-2 focus:outline-none ${
            activeComponent === "appointments"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => switchComponent("appointments")}
        >
          Appointments
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeComponent === "requests"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => switchComponent("requests")}
        >
          Requests
        </button>
      </div>
      {activeComponent === "appointments" ? (
        <AppointmentList />
      ) : (
        <RequestList />
      )}
    </div>
  );
};

export default DocHome;
