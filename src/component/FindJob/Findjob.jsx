import { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../Home/JobCard";

function Findjob() {
  const [allJobs, setAllJobs] = useState([]); // Danh sách tất cả công việc
  const [jobs, setJobs] = useState([]); // Danh sách công việc được lọc
  const [loading, setLoading] = useState(false); // Trạng thái tải
  const [error, setError] = useState(null); // Trạng thái lỗi
  const [filters, setFilters] = useState({
    location: "",
    position: "",
    type: "",
    code: "",
  }); // Bộ lọc tìm kiếm

  // Tải toàn bộ công việc khi component render
  useEffect(() => {
    const fetchAllJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "http://localhost:3001/api/jobs/jobsall"
        );
        setAllJobs(response.data); // Lưu toàn bộ công việc
        setJobs(response.data); // Hiển thị toàn bộ công việc ban đầu
      } catch (err) {
        setError("Không thể tải danh sách công việc. Vui lòng thử lại sau.");
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllJobs();
  }, []);

  // Xử lý khi nhấn nút tìm kiếm
  const handleSearch = () => {
    // Lọc công việc dựa trên bộ lọc
    const filteredJobs = allJobs.filter((job) => {
      const matchLocation =
        !filters.location || job.location.includes(filters.location);
      const matchPosition =
        !filters.position || job.position.includes(filters.position);
      const matchType = !filters.type || job.type === filters.type;
      const matchCode = !filters.code.code || job.code === filters.code;
      return matchLocation && matchPosition && matchType && matchCode;
    });

    setJobs(filteredJobs); // Cập nhật danh sách công việc được lọc
  };

  // Xử lý thay đổi bộ lọc
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Xóa bỏ lọc
  const clearFilters = () => {
    setFilters({
      location: "",
      position: "",
      type: "",
      code: "",
    });
    setJobs(allJobs); // Hiển thị lại toàn bộ công việc
  };

  if (loading) {
    return <div>Loading jobs...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="py-0 bg-white">
      <div className="content-baseline py-16 m-auto px-3 text-gray-600 md:px-16 xl:px-64 bg-orange-300">
        <h1 className="text-3xl text-black/100 mb-5 font-medium">Tìm Kiếm</h1>
        <form className="flex flex-col gap-6">
          <div className="w-full gap-3 flex">
            <input
              type="text"
              className="w-full rounded-xl max-sm:text-sm max-sm:px-3 p-4 outline-none"
              placeholder="Tìm kiếm theo các Kỹ Năng, Vị Trí, Công Ty..."
              name="position"
              value={filters.position}
              onChange={handleFilterChange}
            />
            <button
              type="button"
              className="w-2/6 bg-orange-500 rounded-xl text-white font-bold py-3 max-sm:text-sm max-sm:px-1 rounded-r-md hover:bg-orange-600"
              onClick={handleSearch}>
              Tìm kiếm
            </button>
          </div>

          <div className="flex w-full gap-3 justify-between flex-row">
            <select
              className="w-1/4 outline-none"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}>
              <option value="">Tất cả địa điểm</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
            </select>
            <select
              className="w-1/4 outline-none"
              name="type"
              value={filters.type}
              onChange={handleFilterChange}>
              <option value="">Tất cả các loại hợp đồng</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Thực Tập Sinh</option>
            </select>
            <select
              className="w-1/4 outline-none"
              name="code"
              value={filters.code}
              onChange={handleFilterChange}>
              <option value="">Tất cả các loại công ty</option>
              <option value="CNTT">Công Nghệ Thông Tin</option>
              <option value="SALE">Sales</option>
              <option value="MKT ">Marketing</option>
            </select>
            <button
              type="button"
              className="bg-red-500 w-1/5 hover:bg-orange-400 duration-150 hover:shadow-lg shadow-lg-gray text-white rounded-sm max-md:py-3 py-2 max-md:px-2 max-md:text-sm"
              onClick={clearFilters}>
              Xóa bỏ lọc
            </button>
          </div>
        </form>
      </div>

      <div className="p-4 container my-12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          <span>{jobs.length}</span> <span>Công việc mới Nổi Bật</span>
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
