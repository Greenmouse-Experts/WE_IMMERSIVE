import { useState } from 'react'
import BlogSidebar from './blog-sidebar';

const BlogNews = () => {
   const [searchValue, setSearchValue] = useState<string>("");
   const [selectedCategory, setSelectedCategory] = useState<string>("");

   const categories = [
     "All",
     "Buying Assets",
     "Selling Assets",
     "E-Learning",
     "Data Policy",
     "Terms of Use",
   ];

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
               categories={categories}
             />
           </div>
           <div className="lg:w-[65%] mt-8 lg:mt-0">
             {/* <FaqContent /> */}
           </div>
         </div>
       </div>
     </div>
   );
}

export default BlogNews