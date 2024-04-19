import { doctors } from "../data/doctorDetail";
import { DoctorCard } from "./DoctorCard";

function DoctorCards() {
 

  return (
    <div className="flex flex-wrap justify-center items-center gap-x-10">
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} doctorDetails={doctor} />
      ))}
    </div>
  );
}

export default DoctorCards;