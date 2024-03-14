import React from "react";

const DocProfile = () => {
  return (
    <div className="container mx-auto p-4 justify-center flex items-center ">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex justify-center">
          <img
            className="w-32 h-32 rounded-full mt-4"
            src="https://via.placeholder.com/150"
            alt="Doctor's Profile"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">Dr. John Doe</h2>
          <p className="text-gray-600 mb-4">Experience: 10 years</p>
          <p className="text-gray-600 mb-4">Education: MBBS, MD</p>
          <p className="text-gray-600 mb-4">
            Type of Doctor: General Practitioner
          </p>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-yellow-500 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-gray-600">4.5 (120 reviews)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocProfile;
