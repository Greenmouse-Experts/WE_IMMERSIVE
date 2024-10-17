import { useState } from "react";
import FaqContent from "./faq-content";
import FaqSidebar from "./faq-sidebar";

const FaqList = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categories = [
    "All",
    "Buying Assets",
    "Selling Assets",
    "E-Learning",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  return (
    <div className="section dark:bg-black">
      <div className="box">
        <div className="lg:w-11/12 mx-auto lg:flex gap-x-12">
          <div className="lg:w-[35%]">
            <FaqSidebar
              searchValue={searchValue}
              selectedCateogry={selectedCategory}
              setSearchValue={setSearchValue}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />
          </div>
          <div className="lg:w-[65%] mt-8 lg:mt-0">
            <FaqContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqList;
