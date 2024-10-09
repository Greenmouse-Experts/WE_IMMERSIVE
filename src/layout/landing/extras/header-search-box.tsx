import { useState } from "react";
import ReusableSearchBox from "../../../components/reusables/reusable-search";

const HeaderSearchBox = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <ReusableSearchBox params={value} setParams={setValue} />
    </div>
  );
};

export default HeaderSearchBox;
