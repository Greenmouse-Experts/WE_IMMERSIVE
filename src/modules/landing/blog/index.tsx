import { getBlogCategory, getBlogs } from "../../../api/general";
import Loader from "../../../components/reusables/loader";
import PageBanner from "../../../components/reusables/page-banner";
import BlogNews from "./blog-list";
import RecentPosts from "./recent-post";

const BlogIndex = () => {
  const { data: blogs, isLoading } = getBlogs();
  const {data:blogCategory, isLoading:isLoadingCategory} =getBlogCategory()

  if (isLoading || isLoadingCategory) return <Loader />;
  return (
    <div>
      <div>
        <PageBanner
          image="https://res.cloudinary.com/do2kojulq/image/upload/v1730302795/WE%20Immersive/image_20_1_ovfqbf.png"
          headText="Blog"
          bodyText="Dive into our latest updates and news about the community, products, creators and more "
        />
      </div>
      <div className="section">
        <div className="box">
          <div>
            <RecentPosts blogs={blogs} />
          </div>
          <div>
            <BlogNews  blogs={blogs} blogCategory={blogCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
