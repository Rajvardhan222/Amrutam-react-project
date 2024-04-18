import { useState } from "react";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import AboutMeCard from "./components/AboutMeCard";
import SpecialiseCard from "./components/SpecialiseCard";
import SkillCard from "./components/SkillCard";
import ExperienceCard from "./components/ExperienceCard";
import FeaturedReview from "./components/FeaturedReview";
import AppointmentDetail from "./components/AppointmentDetail";

function App() {
  return (
    <>
      <main>
        <div className="flex flex-col pb-10">
          <Navigation />
          <div className="w-[90%] m-auto mt-12">
            <Profile />
            <div className="grid-cols-2 grid gap-x-4">
              {/* column 1 */}
              <div className="w-[90%] m-auto gap-y-9 flex flex-col">
                <AboutMeCard>
                  
                </AboutMeCard>
                <SpecialiseCard/>

                <SkillCard/>

                <ExperienceCard/>
                <FeaturedReview/>
              </div>
              {/* column 2 */}
              <div>
                <AppointmentDetail/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
