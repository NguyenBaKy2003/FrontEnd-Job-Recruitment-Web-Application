// import React from "react";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { jobId } = useParams(); // Lấy ID công việc từ URL

  // Dữ liệu giả lập về công việc
  const jobs = [
    {
      id: "1",
      title: "Backend Engineer (Java/Kotlin/Spring)",
      company: "NAVER VIETNAM",
      companyImg:
        "https://th.bing.com/th/id/OIP.9xlg6KvPhMu4A86cgf8AhAAAAA?rs=1&pid=ImgDetMain",
      location: "Ho Chi Minh",
      tags: ["Spring", "Kotlin", "Java"],
      postedTime: "Posted 2 hours ago",
      description:
        "Chúng tôi đang tìm kiếm một Backend Engineer có kinh nghiệm làm việc với Java, Kotlin và Spring để gia nhập đội ngũ tại NAVER VIETNAM.",
    },
    {
      id: "2",
      title: "Middle/Senior Java Developer",
      company: "MB Ageas Life",
      companyImg:
        "https://th.bing.com/th/id/R.f66d5e0336baea4212a7a2d475ec2dda?rik=kUn1ej5rHMEo5Q&pid=ImgRaw&r=0",
      location: "Ha Noi",
      tags: ["Java", "Database", "Spring"],
      postedTime: "Posted 6 hours ago",
      description:
        "MB Ageas Life đang tuyển dụng Middle/Senior Java Developer với khả năng làm việc trong các dự án phức tạp.",
    },
    {
      id: "3",
      title: "Senior Java Engineer",
      company: "Global Fashion Group",
      companyImg:
        "https://d53bpfpeyyyn7.cloudfront.net/Pictures/1024x536/P/web/o/w/p/gfgfinal_266483.jpg",
      location: "Ho Chi Minh",
      tags: ["Java", "SQL", "Spring"],
      postedTime: "Posted 7 hours ago",
      description:
        "Tham gia đội ngũ của Global Fashion Group để phát triển hệ thống công nghệ tiên tiến.",
    },
    {
      id: "4",
      title: "Senior Java Developer",
      company: "Dai-ichi Life Vietnam",
      companyImg:
        "https://th.bing.com/th/id/OIP.whjkwGST8X_OVblReI4n6QHaHa?rs=1&pid=ImgDetMain",
      location: "Ho Chi Minh",
      tags: ["Java", "MVC", "J2EE"],
      postedTime: "Posted 9 hours ago",
      description:
        "Cơ hội làm việc tại Dai-ichi Life Vietnam trong vai trò Senior Java Developer.",
    },
  ];

  // Tìm công việc theo ID
  const job = jobs.find((j) => j.id === jobId);

  if (!job) {
    return <p>Công việc không tồn tại!</p>;
  }

  return (
    <div className="p-4">
      <img src={job.companyImg} alt={job.company} className="w-40 h-40 mb-4" />
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>
      <p className="mt-4">{job.description}</p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Tags</h2>
        <ul className="list-disc pl-5">
          {job.tags.map((tag, index) => (
            <li key={index} className="mt-1">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-sm text-gray-400 mt-6">{job.postedTime}</p>
    </div>
  );
};

export default JobDetail;
