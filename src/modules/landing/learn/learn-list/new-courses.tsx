import { trendsCourses2 } from "../../../../components/hard-data/dummy";
import AssetList from "../../homepage/marketplace/components/asset-list";

const NewCourses = () => {
  return (
    <div className="">
      <div className="box">
        <AssetList name="New  Courses 🧑‍🏫" data={trendsCourses2} />
      </div>
    </div>
  );
}

export default NewCourses