import React from "react";
import AvailableJobs from "../../modules/user/Jobs/AvailableJobs";
import Navbar from "../../layout/user/components/navbar";

const App: React.FC = () => {
  return (
    <div className="mx-auto">
        <Navbar />
      <AvailableJobs />
    </div>
  );
};

export default App;
