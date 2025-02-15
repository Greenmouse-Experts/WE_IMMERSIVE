import React from "react";
import OngoingCourses from "../../modules/user/OngoingCourses/Courses";
import Navbar from "../../layout/user/components/navbar";

const App: React.FC = () => {
  return (
    <div className="mx-auto">
        <Navbar />
      <OngoingCourses />
    </div>
  );
};

export default App;
