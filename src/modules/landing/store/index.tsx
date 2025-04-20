import { useState } from "react";
import StoreBanner from "./herobanner"
import StoreContent from "./store-content"
import { ICategoryChildren } from "../../../types/category.types";

const StoreIndex = () => {
  const [activeTab, setActiveTab] = useState<ICategoryChildren | null>(null);
  return (
    <div>
        <StoreBanner activeTab={activeTab} setActiveTab={setActiveTab}/>
        <StoreContent activeTab={activeTab}/>
    </div>
  )
}

export default StoreIndex