import JobCard from "../Home/JobCard";
function Findjob() {
  const clearFilters = () => {
    document
      .querySelectorAll("select")
      .forEach((select) => (select.selectedIndex = 0));
  };
  const jobs = [
    {
      id: 1,
      title: "Backend Engineer (Java/Kotlin/Spring)",
      company: "NAVER VIETNAM",
      companyImg:
        "https://th.bing.com/th/id/OIP.9xlg6KvPhMu4A86cgf8AhAAAAA?rs=1&pid=ImgDetMain",
      location: "Ho Chi Minh",
      tags: ["Spring", "Kotlin", "Java"],
      postedTime: "Posted 2 hours ago",
    },
    {
      id: 2,
      title: "Middle/Senior Java Developer",
      company: "MB Ageas Life",
      location: "Ha Noi",
      companyImg:
        "https://th.bing.com/th/id/R.f66d5e0336baea4212a7a2d475ec2dda?rik=kUn1ej5rHMEo5Q&pid=ImgRaw&r=0",
      tags: ["Java", "Database", "Spring"],
      postedTime: "Posted 6 hours ago",
    },
    {
      id: 3,
      title: "Senior Java Engineer",
      company: "Global Fashion Group",
      location: "Ho Chi Minh",
      companyImg:
        "https://d53bpfpeyyyn7.cloudfront.net/Pictures/1024x536/P/web/o/w/p/gfgfinal_266483.jpg",
      tags: ["Java", "SQL", "Spring"],
      postedTime: "Posted 7 hours ago",
    },
    {
      id: 4,
      title: "Senior Java Developer",
      company: "Dai-ichi Life Vietnam",
      location: "Ho Chi Minh",
      companyImg:
        "https://th.bing.com/th/id/OIP.whjkwGST8X_OVblReI4n6QHaHa?rs=1&pid=ImgDetMain",
      tags: ["Java", "MVC", "J2EE"],
      postedTime: "Posted 9 hours ago",
    },
  ];
  return (
    <div className=" py-0 bg-white">
      <div className="  content-baseline py-16 m-auto px-3 text-gray-600  md:px-16 xl:px-64  bg-orange-300 ">
        <h1 className=" text-3xl text-black/100 mb-5 font-medium ">Tìm Kiếm</h1>
        <form action="" className="flex  flex-col gap-6">
          <div className="w-full rounded-xl flex">
            <input
              type="text"
              className="w-full max-sm:text-sm  max-sm:px-3 p-4 outline-none"
              placeholder="Tìm kiếm theo các Kỹ Năng, Vị Trí, Công Ty..."
              name=""
              id=""
            />
            <button className="w-2/6 bg-orange-500 text-white font-bold py-3  max-sm:text-sm  max-sm:px-1  rounded-r-md hover:bg-orange-600 ">
              Tìm kiếm
            </button>
          </div>

          <div className="flex w-full gap-3 justify-between flex-row ">
            <select className=" w-1/4 outline-none " name="filter1">
              <option value="">Tất cả địa điểm</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
            <select className="w-1/4 outline-none " name="filter2">
              <option value="">Tất cả cấp bậc</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
            <select className="w-1/4 outline-none " name="filter3">
              <option value="">Tất cả các loại công ty</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
            <select className="w-1/4  outline-none  " name="filter4">
              <option value="">Tất cả các loại hợp đồng</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>

            <button
              type="button"
              className="bg-red-500 w-1/5 hover:bg-orange-400 duration-150 hover:shadow-lg shadow-lg-gray text-white rounded-sm max-md:py-3 py-2  max-md:px-2 max-md:text-sm"
              onClick={clearFilters}>
              Xóa bỏ lọc
            </button>
          </div>
        </form>
      </div>
      <div className="p-4 my-12">
        <h2 className="text-3xl font-bold text-center mb-6">
          <span> {jobs.length}</span> <span>Công việc mới Nổi Bật</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Findjob;
