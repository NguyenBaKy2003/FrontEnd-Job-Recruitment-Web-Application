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
      title: "Frontend Developer (ReactJS)",
      company: "Tiki Corporation",
      companyImg:
        "https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fpictureofcompany%2F3e%2Fcompany-info-cover-picture-url-275978-1692256970.png&w=3840&q=75",
      location: "Ho Chi Minh",
      tags: ["ReactJS", "JavaScript", "UI/UX"],
      postedTime: "Posted 3 hours ago",
    },
    {
      id: 2,
      title: "Fullstack Developer",
      company: "FPT Software",
      location: "Da Nang",
      companyImg:
        "https://th.bing.com/th/id/OIP.mLTCQL88yAT8z5EiSsyWswHaFQ?rs=1&pid=ImgDetMain",
      tags: ["Node.js", "ReactJS", "Microservices"],
      postedTime: "Posted 5 hours ago",
    },
    {
      id: 3,
      title: "Senior Backend Developer",
      company: "Vingroup",
      location: "Ha Noi",
      companyImg:
        "https://th.bing.com/th/id/R.3dba36ee18ea9a3491117ebc60799014?rik=vGUimhiKV%2fTvVQ&riu=http%3a%2f%2fashui.com%2fawards%2fwp-content%2fuploads%2f2015%2f08%2fVingroup-1120x630.jpg&ehk=zHxGfLz8Vuk3caLKxc3anG1NJ56drSa9%2fdR5Vf4Fcik%3d&risl=&pid=ImgRaw&r=0",
      tags: ["Java", "Spring Boot", "MySQL"],
      postedTime: "Posted 7 hours ago",
    },
    {
      id: 4,
      title: "Mobile App Developer",
      company: "Tiki Corporation",
      location: "Ho Chi Minh",
      companyImg:
        "https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fpictureofcompany%2F3e%2Fcompany-info-cover-picture-url-275978-1692256970.png&w=3840&q=75",
      tags: ["Flutter", "iOS", "Android"],
      postedTime: "Posted 9 hours ago",
    },
  ];
  return (
    <div className=" py-0 bg-white">
      <div className="  content-baseline py-16 m-auto px-3 text-gray-600  md:px-16 xl:px-64  bg-orange-300 ">
        <h1 className=" text-3xl text-black/100 mb-5 font-medium ">Tìm Kiếm</h1>
        <form action="" className="flex  flex-col gap-6">
          <div className="w-full gap-3  flex">
            <input
              type="text"
              className="w-full rounded-xl max-sm:text-sm  max-sm:px-3 p-4 outline-none"
              placeholder="Tìm kiếm theo các Kỹ Năng, Vị Trí, Công Ty..."
              name=""
              id=""
            />
            <button className="w-2/6 bg-orange-500 rounded-xl text-white font-bold py-3  max-sm:text-sm  max-sm:px-1  rounded-r-md hover:bg-orange-600 ">
              Tìm kiếm
            </button>
          </div>

          <div className="flex w-full gap-3 justify-between flex-row ">
            <select className=" w-1/4 outline-none " name="filter1">
              <option value="">Tất cả địa điểm</option>
              <option value="HCM">Ho Chi Minh</option>
              <option value="HN">Ha Noi</option>
              <option value="DN">Da Nang</option>
            </select>
            <select className="w-1/4 outline-none " name="filter2">
              <option value="">Tất cả cấp bậc</option>
              <option value="junior">Junior</option>
              <option value="mid">Middle</option>
              <option value="senior">Senior</option>
            </select>
            <select className="w-1/4 outline-none " name="filter3">
              <option value="">Tất cả các loại công ty</option>
              <option value="corporation">Corporation</option>
              <option value="startup">Startup</option>
              <option value="ngo">NGO</option>
            </select>
            <select className="w-1/4  outline-none  " name="filter4">
              <option value="">Tất cả các loại hợp đồng</option>
              <option value="fulltime">Full-time</option>
              <option value="parttime">Part-time</option>
              <option value="freelance">Freelance</option>
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
      <div className="p-4 container my-12 mx-auto">
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
