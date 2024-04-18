import { useState } from "react";
import Navigation from "./components/Navigation";

import SearchDoctor from "./components/SearchDoctor";
import FilterOptions from "./components/FilterOptions";
import DoctorCard from "./components/DoctorCard";

function AppTwo() {
  return (
    <>
      <main>
        {/* second page of amrutam assignment */}
        <div className="flex flex-col pb-10 ">
          <Navigation />
          <SearchDoctor/>
          <div className="flex flex-col pb-10 gap-y-10 pt-5 ">
          <FilterOptions/>
          <DoctorCard/>
          </div>
         
          
        </div>
      </main>
    </>
  );
}

export default AppTwo;
