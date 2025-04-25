
import Tag from "../../../../components/ui/tag";
import CommunityNews from "./community-news";

const CommunityUpdate = () => {
  return (
    <div>
      <div className="section">
        <div className="box">
          <div className="lg:flex justify-between items-end">
            <div className="lg:w-5/12">
              <div className="flex">
                <Tag text="Blog" />
              </div>
              <div className="mt-5">
                <p className="unbound fw-500 text-2xl lg:text-4xl !leading-[46px]">
                  Updates from the <br /> community
                </p>
                <p className="text-[#9A9999] mt-5">
                  Be the first to know about latest news and happenings <br className="hidden lg:block"/>{" "}
                  in the community 📩
                </p>
              </div>
            </div>
          
          </div>
          <div>
            <CommunityNews/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityUpdate;
