import { IBlog } from "../../../types/blog.types";
import BlogItem from "./blog-item";

const RecentPosts = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <div>
      <p className="unbound">Recently Posted</p>
      <div className="mt-7">
        <div className="flex overflow-x-auto scroll-pro gap-6">
          {blogs?.slice(0, 3)?.map((blog, i) => (
            <BlogItem blog={blog} key={i}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
