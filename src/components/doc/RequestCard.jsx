import React, { useState } from "react";

const RequestCard = ({ date, time, patientId }) => {
  const [status, setStatus] = useState(null);

  const acceptRequest = () => {
    setStatus("accepted");
  };

  const rejectRequest = () => {
    setStatus("rejected");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">Appointment Request</h2>
      <p className="text-gray-600 mb-2">Date: {date}</p>
      <p className="text-gray-600 mb-2">Time: {time}</p>
      <p className="text-gray-600 mb-4">Patient ID: {patientId}</p>
      {status === null && (
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={acceptRequest}
          >
            Accept
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
            onClick={rejectRequest}
          >
            Reject
          </button>
        </div>
      )}
      {status === "accepted" && <p className="text-green-500">Accepted</p>}
      {status === "rejected" && <p className="text-red-500">Rejected</p>}
    </div>
  );
};

export default RequestCard;
