import { useState } from "react";
import DoctorProfileCard from "../common/DoctorProfileCard";
import FilterHeader from "./FilterHeader";
import FilterSidebar from "./FilterSidebar";
import Appointment from "../appointment/Appointment";
// import Navbar from "../../components/common/Navbar";

const Dashboard = () => {
  const [doctorCards, setDoctorsCards] = useState(true);
  return (
    <div className=" w-full h-full">
      <div className="flex flex-col w-full mx-auto px-4 md:px-8">
        <FilterHeader />
        <svg
          className="my-7 w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="2"
          viewBox="0 0 1216 2"
          fill="none"
        >
          <path d="M0 1H1216" stroke="#E5E7EB" />
        </svg>
        <div className="flex flex-row w-full h-full">
          <FilterSidebar />
          <div className="flex basis-3/4 w-full h-full items-center justify-center content-center p-0">
            {doctorCards && (
              <div className="margin-0 self-center grid grid-cols-4 w-full">
                <DoctorProfileCard setDoctorsCards={setDoctorsCards} />
                <DoctorProfileCard setDoctorsCards={setDoctorsCards} />
                <DoctorProfileCard setDoctorsCards={setDoctorsCards} />
                <DoctorProfileCard setDoctorsCards={setDoctorsCards} />
                <DoctorProfileCard setDoctorsCards={setDoctorsCards} />
                <DoctorProfileCard setDoctorsCards={setDoctorsCards} />
              </div>
            )}
            {!doctorCards && <Appointment setDoctorsCards={setDoctorsCards} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
