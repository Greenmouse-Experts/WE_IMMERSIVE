import { useState } from "react";
import BlogSidebar from "./blog-sidebar";
import { IBlog, IBlogCategory } from "../../../../types/blog.types";
import BlogItem from "../blog-item";

const BlogNews = ({
  blogs,
  blogCategory,
}: {
  blogs: IBlog[];
  blogCategory: IBlogCategory[];
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedCategory, setSelectedCategory] =
    useState<IBlogCategory | null>(null);

  return (
    <div className="">
      <div className=" pt-12 lg:pt-20">
        <div className="lg:flex gap-x-12">
          <div className="lg:w-[35%]">
            <BlogSidebar
              searchValue={searchValue}
              selectedCateogry={selectedCategory}
              setSearchValue={setSearchValue}
              setSelectedCategory={setSelectedCategory}
              categories={blogCategory}
            />
          </div>
          <div className="lg:w-[65%] mt-8 lg:mt-0 grid lg:grid-cols-2 gap-6">
            {blogs?.map((blog, i) => {
              if (selectedCategory?.id === blog.categoryId) {
                return <BlogItem blog={blog} key={i} />;
              } else if (selectedCategory === null) {
                return <BlogItem blog={blog} key={i} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
