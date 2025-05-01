import { dateFormat } from "../../../helpers";
import { IBlog } from "../../../types/blog.types";

const BlogItem = ({blog}:{blog:IBlog}) => {
  return (
    <div className=" w-full">
      <img
        src={blog?.featuredImage || ""}
        alt="news-1"
        className="w-full h-[240px] lg:h-[330px] object-cover rounded-[30px]"
      />
      <div className="mt-2">
        <p className="fw-600">{blog.title}</p>
        <p className="text-[#696767] mt-1 fs-500">
          {dateFormat(blog.createdAt)}
        </p>
        <p className="!text-[#6817FC] mt-1 underline cursor-pointer">
          Read More
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
