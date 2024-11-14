import JobItem from "./job-item";
import JobFilter from "./job-filter";

const AllJobsList = () => {
 
  return (
    <div className="section">
      <div className="box grid xl:grid-cols-4  gap-x-6 gap-y-10">
        <div className="xl:col-span-3 col-span-4 grid lg:grid-cols-2  gap-6">
          {[...Array(6)].map((item, i) => (
            <JobItem item={item} key={i}/>
          ))}
        </div>

        <div className="bg-[#F7F8FD] rounded-[30px] h-fit p-4 lg:block hidden">
          <JobFilter />
        </div>
      </div>
    </div>
  );
};

export default AllJobsList;
