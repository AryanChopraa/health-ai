import React from "react";

const Profile = () => {
  // Dummy user data
  const user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    aadharNumber: "1234 5678 9012",
    medicalHistory: "30 year old male with type-2 diabetes",
    pastDoctorAssignments: [
      {
        doctor: "Dr. Smith",
        transcription:
          "Patient has complained of elbow pain for the past week...",
        date: "2023-05-15",
      },
      {
        doctor: "Dr. Johnson",
        transcription:
          "Patient visited for high sugar levels. No issues reported...",
        date: "2023-02-20",
      },
    ],
    reports: [
      {
        type: "X-Ray",
        date: "2023-04-10",
        link: "https://example.com/xray_report.pdf",
      },
      {
        type: "Blood Test",
        date: "2023-03-25",
        link: "https://example.com/blood_test_report.pdf",
      },
    ],
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">My Account</h1>
      <h1 className="text-l font-bold mb-4 text-red-500">Share Profile</h1>
      <div className="bg-white rounded shadow-md p-4">
        <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Aadhar Number:</strong> {user.aadharNumber}
        </p>

        <h2 className="text-lg font-semibold mt-4 mb-2">Medical History</h2>
        <p>{user.medicalHistory}</p>

        <h2 className="text-lg font-semibold mt-4 mb-2">
          Past Doctor Assignments
        </h2>
        {user.pastDoctorAssignments.map((assignment, index) => (
          <div key={index} className="border-b py-2">
            <p>
              <strong>Doctor:</strong> {assignment.doctor}
            </p>
            <p>
              <strong>Date:</strong> {assignment.date}
            </p>
            <p>
              <strong>Transcription:</strong> {assignment.transcription}
            </p>
            <button className="bg-red-500 p-1 px-10 text-white rounded-lg">
              Chat
            </button>
          </div>
        ))}

        <h2 className="text-lg font-semibold mt-4 mb-2">Reports</h2>
        {user.reports.map((report, index) => (
          <div key={index} className="border-b py-2">
            <p>
              <strong>Type:</strong> {report.type}
            </p>
            <p>
              <strong>Date:</strong> {report.date}
            </p>
            <a
              href={report.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Report
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
