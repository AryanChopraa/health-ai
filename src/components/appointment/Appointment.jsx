/* eslint-disable react/prop-types */
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoArrowBack } from "react-icons/io5";

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const Appointment = (props) => {
  const [value, onChange] = useState(Date());
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleSlotClick = (slot) => {
    const isSelected = selectedSlots.includes(slot);
    if (isSelected) {
      setSelectedSlots(
        selectedSlots.filter((selectedSlot) => selectedSlot !== slot)
      );
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  const generateTimeSlots = () => {
    const timeSlots = [];
    for (let i = 10; i <= 17; i++) {
      timeSlots.push(`${i}:00`);
    }
    return timeSlots;
  };

  const handleBookClick = () => {
    // Handle the booking logic here
    console.log("Booked Slots:", selectedSlots);
  };

  return (
    <div className="w-full h-full">
      <IoArrowBack
        className=" ml-3 text-3xl font-semibold text-indigo-700 cursor-pointer"
        onClick={() => {
          props.setDoctorsCards(false);
          console.log("click");
        }}
      />
      <div className="flex flex-row">
        <div className="flex basis-3/4 flex-col gap-10 justify-center bg-slate-100 p-5 m-2 rounded-xl">
          <div className="flex flex-row gap-10">
            <div className="image w-48 ">
              <img
                className="border rounded-full border-gray-200 shadow-sm"
                src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=2048x2048&w=is&k=20&c=XPrBnWXPZ6APj1L9r768W1TWpZl4s3T9mMzwmPDGp4s="
                alt="doctor-image"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-row items-end gap-2">
                <h1 className=" font-bold uppercase text-xl">
                  Dr. Sanidhya Chopra
                </h1>
                <h4 className="font-bold text-indigo-700 text-sm uppercase">
                  claimed Profile
                </h4>
              </div>
              <h4 className="text-gray-700 font-base">
                DNB - Cardiology, MBBS, DNB - General Medicine
              </h4>
              <h4 className="text-gray-700 font-base">Cardiologist</h4>
              <h4 className="text-gray-700 font-base">
                23 Years Experience Overall (8 years as specialist)
              </h4>
            </div>
          </div>
          <div className="flex flex-col h-screen">
            <Tabs aria-label="Full width tabs" style="default">
              <Tabs.Item active title="Profile" icon={HiUserCircle}>
                <div className="container mx-auto p-8">
                  <h1 className="text-3xl font-bold mb-4">
                    Dr. Sanidhya Chopra, DNB - Cardiology, MBBS, DNB - General
                    Medicine
                  </h1>

                  <section className="professional-overview mb-8">
                    <h2 className="text-xl font-bold mb-2">
                      Professional Overview:
                    </h2>
                    <p className="text-gray-700">
                      With 23 years of unwavering commitment to the field of
                      cardiology, Dr. Sanidhya Chopra stands as a seasoned
                      medical professional specializing in DNB - Cardiology,
                      complemented by a solid foundation in MBBS and DNB -
                      General Medicine. Renowned for a comprehensive
                      understanding of cardiac health, Dr. Chopra brings a
                      wealth of experience to the forefront of patient care.
                    </p>
                  </section>

                  <section className="credentials mb-8">
                    <h2 className="text-xl font-bold mb-2">Credentials:</h2>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>DNB - Cardiology</li>
                      <li>MBBS</li>
                      <li>DNB - General Medicine</li>
                    </ul>
                  </section>

                  <section className="experience mb-8">
                    <h2 className="text-xl font-bold mb-2">Experience:</h2>
                    <p className="text-gray-700">
                      Throughout an illustrious career, Dr. Sanidhya Chopra has
                      demonstrated expertise in diagnosing, treating, and
                      managing a diverse array of cardiac conditions. The vast
                      experience spanning over two decades has honed clinical
                      skills and instilled a commitment to staying abreast of
                      the latest advancements in the dynamic field of
                      cardiology.
                    </p>
                  </section>

                  <section className="professional-approach mb-8">
                    <h2 className="text-xl font-bold mb-2">
                      Professional Approach:
                    </h2>
                    <p className="text-gray-700">
                      Embracing a patient-centric ethos, Dr. Sanidhya Chopra
                      places emphasis on fostering open communication, empathy,
                      and collaboration. This approach ensures that patients are
                      not only recipients of expert medical care but active
                      participants in their cardiovascular health journey.
                    </p>
                  </section>

                  <section className="services-offered mb-8">
                    <h2 className="text-xl font-bold mb-2">
                      Services Offered:
                    </h2>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>
                        Diagnosis and management of various cardiac conditions
                      </li>
                      <li>Echocardiography and stress testing</li>
                      <li>
                        Medication management tailored to individual patient
                        needs
                      </li>
                      <li>Blood pressure and cholesterol management</li>
                      <li>
                        Lifestyle modification guidance for optimal heart health
                      </li>
                    </ul>
                  </section>

                  <section className="professional-commitment">
                    <h2 className="text-xl font-bold mb-2">
                      Professional Commitment:
                    </h2>
                    <p className="text-gray-700">
                      Dr. Sanidhya Chopra is dedicated to providing personalized
                      and compassionate care, underpinned by a commitment to the
                      overall well-being of each patient. The unwavering focus
                      on excellence and continuous learning defines Dr. Chopra's
                      professional journey.
                    </p>
                  </section>
                </div>
              </Tabs.Item>
              <Tabs.Item title="Dashboard" icon={MdDashboard}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Dashboard tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Settings" icon={HiAdjustments}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Settings tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Contacts" icon={HiClipboardList}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Contacts tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item disabled title="Disabled">
                Disabled content
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
        <div className="flex basis-1/4 justify-start gap-5 flex-col items-center p-5">
          <h1 className="text-xl font-bold uppercase">Pick a time slot</h1>
          <div className="bg-slate-100 w-full flex flex-col rounded-xl h-fit items-center justify-center gap-6">
            <div className="bg-indigo-700 justify-between flex flex-row rounded-t-xl px-4 items-center text-slate-100 text-lg uppercase font-semibold h-12 w-full">
              <h1>Appointment</h1>
              <h1>₹800</h1>
            </div>

            <div className=" bg-white items-center justify-center">
              <Calendar onChange={onChange} value={value} />
            </div>
            <div className="container p-5">
              <div className="grid grid-cols-4 gap-4">
                {generateTimeSlots().map((slot) => (
                  <div
                    key={slot}
                    onClick={() => handleSlotClick(slot)}
                    className={`p-4 cursor-pointer border flex items-center justify-center rounded-lg font-normal text-base ${
                      selectedSlots.includes(slot)
                        ? "bg-indigo-700"
                        : "bg-white"
                    }`}
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleBookClick}
              className="bg-indigo-700 px-4 py-2 text-xl text-slate-100 rounded-xl cursor-pointer uppercase items-center justify-center mb-4 font-semibold"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
