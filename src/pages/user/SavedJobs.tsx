import React from "react";
import SaveJobs from "../../modules/user/Jobs/SavedJobs";
import Navbar from "../../layout/user/components/navbar";

const App: React.FC = () => {
  return (
    <div className="mx-auto">
        <Navbar />
      <SaveJobs />
    </div>
  );
};

export default App;
