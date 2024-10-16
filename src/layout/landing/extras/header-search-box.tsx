import { useState } from "react";
import ReusableSearchBox from "../../../components/reusables/reusable-search";

const HeaderSearchBox = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="w-full flex justify-end">
      <ReusableSearchBox params={value} setParams={setValue} />
    </div>
  );
};

export default HeaderSearchBox;
