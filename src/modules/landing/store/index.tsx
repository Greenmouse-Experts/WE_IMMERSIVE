import { useState } from "react";
import StoreBanner from "./herobanner"
import StoreContent from "./store-content"

const StoreIndex = () => {
  const [activeTab, setActiveTab] = useState("3D Models");
  return (
    <div>
        <StoreBanner activeTab={activeTab} setActiveTab={setActiveTab}/>
        <StoreContent activeTab={activeTab}/>
    </div>
  )
}

export default StoreIndex