import { useState } from "react";
import ExpandableSearchBox from "../../../components/reusables/expandable-search";

const HeaderSearchBox = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="w-full flex justify-end">
      <ExpandableSearchBox params={value} setParams={setValue} />
    </div>
  );
};

export default HeaderSearchBox;
