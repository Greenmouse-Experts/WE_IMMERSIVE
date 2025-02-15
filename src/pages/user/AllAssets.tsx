import React from "react";
import AvailableAssets from "../../modules/user/Assets/AvailableAssets";
import Navbar from "../../layout/user/components/navbar";

const App: React.FC = () => {
  return (
    <div className="mx-auto">
        <Navbar />
      <AvailableAssets />
    </div>
  );
};

export default App;
