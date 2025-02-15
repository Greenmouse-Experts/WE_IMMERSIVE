import React from "react";
import AvailableCourses from "../../modules/user/OngoingCourses/AvailableCourses";
import Navbar from "../../layout/user/components/navbar";

const App: React.FC = () => {
  return (
    <div className="mx-auto">
        <Navbar />
      <AvailableCourses />
    </div>
  );
};

export default App;
