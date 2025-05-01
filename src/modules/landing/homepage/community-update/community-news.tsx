import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button";
import { IBlog } from "../../../../types/blog.types";
import BlogItem from "../../blog/blog-item";

const CommunityNews = ({blogs}:{blogs:IBlog[]}) => {
  const navigate = useNavigate();
  return (
    <div className="mt-24">
      <div className="flex overflow-x-auto scroll-pro gap-6">
      {blogs?.slice(0, 3)?.map((blog, i) => (
            <BlogItem blog={blog} key={i}/>
          ))}
      </div>
      <div className="flex mt-8 lg:mt-16 justify-center">
        <div>
          <Button
          onClick={() => navigate('/blog')}
            title={"See All"}
            withArrows
            altClassName="btn-primary px-6 py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityNews;
