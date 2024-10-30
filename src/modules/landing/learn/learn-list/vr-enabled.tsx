import { trendsCourses2 } from "../../../../components/hard-data/dummy";
import AssetList from "../../homepage/marketplace/components/asset-list";

const VrEnabled = () => {
   return (
     <div className="section">
       <div className="box">
         <AssetList name="VR Enabled 👓" data={trendsCourses2} />
       </div>
     </div>
   );
}

export default VrEnabled