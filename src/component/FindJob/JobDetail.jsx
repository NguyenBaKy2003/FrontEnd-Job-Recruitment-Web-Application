// import React from "react";
import { Link, useParams } from "react-router-dom";

const JobDetail = () => {
  const { jobId } = useParams(); // Get jobId from URL params
  // const navigate = useNavigate(); // Get navigate function
  // const handleJobSelection = (job) => {
  //   localStorage.setItem("appliedJob", JSON.stringify(job));
  //   navigate("/apply-now"); // Use navigate to redirect
  // };
  const companies = [
    {
      id: "1",
      name: "Tiki Corporation",
      logo: "https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fpictureofcompany%2F3e%2Fcompany-info-cover-picture-url-275978-1692256970.png&w=3840&q=75",
      location: "TP. Hồ Chí Minh, Việt Nam",
      industries: ["Thương mại điện tử", "Logistics", "Tiêu dùng"],
      size: "5000+ employees",
      website: "https://tiki.vn",
      workingDays: "Monday - Friday",
      overtime: "No OT",
      benefits: [
        "Lương thưởng cạnh tranh, cơ hội thăng tiến cao.",
        "Bảo hiểm xã hội, bảo hiểm y tế đầy đủ theo quy định của pháp luật.",
        "Chế độ thưởng vào các dịp lễ, Tết, quà sinh nhật.",
      ],
      jobs: [
        {
          id: "1",
          title: "Frontend Developer (ReactJS)",
          location: "TP. Hồ Chí Minh",
          tags: ["ReactJS", "JavaScript", "UI/UX"],
          postedTime: "Posted 3 hours ago",
          salary: "Sign in to view salary",
          description: {
            reasons: [
              "Cơ hội làm việc với đội ngũ trẻ trung và sáng tạo.",
              "Tham gia vào các dự án quy mô lớn.",
              "Môi trường làm việc thân thiện, linh hoạt.",
            ],
            details: [
              "Phát triển và duy trì các giao diện người dùng sử dụng ReactJS, đảm bảo hiệu suất tối ưu.",
              "Hợp tác với các nhóm thiết kế và backend để xây dựng các tính năng và cải thiện trải nghiệm người dùng.",
              "Thực hiện kiểm tra mã nguồn và tối ưu hóa giao diện người dùng cho các thiết bị di động và các trình duyệt khác nhau.",
              "Sử dụng các công cụ như Redux để quản lý trạng thái và đảm bảo tính đồng nhất trong toàn bộ ứng dụng.",
              "Tham gia vào các cuộc họp Agile và Scrum để đảm bảo tiến độ và chất lượng công việc.",
              "Cập nhật và bảo trì mã nguồn hiện có, nâng cao chất lượng mã và dễ dàng bảo trì.",
              "Tối ưu hóa quy trình phát triển và hợp tác với các đội ngũ liên quan để cải thiện hiệu quả công việc.",
            ],
            skills: [
              "Thành thạo ReactJS và các thư viện JavaScript liên quan (Redux, React Router, Context API).",
              "Kinh nghiệm với HTML5, CSS3, và JavaScript ES6+.",
              "Hiểu biết vững về responsive design và xây dựng giao diện người dùng tương thích với tất cả các thiết bị.",
              "Kinh nghiệm làm việc với API RESTful và tích hợp các dịch vụ từ backend vào frontend.",
              "Quen thuộc với các công cụ build và quản lý phiên bản như Webpack, Babel, NPM, Git.",
              "Kỹ năng tối ưu hóa hiệu suất giao diện người dùng, giảm thiểu thời gian tải và cải thiện trải nghiệm người dùng.",
              "Kinh nghiệm làm việc với các công cụ kiểm thử như Jest, React Testing Library.",
              "Hiểu biết vững về quy trình phát triển phần mềm Agile và Scrum.",
              "Khả năng làm việc độc lập cũng như phối hợp với các nhóm khác trong môi trường phát triển phần mềm nhanh chóng.",
            ],

            experience: [
              "Tối thiểu 2 năm kinh nghiệm làm việc với ReactJS trong các dự án thực tế.",
              "Đã tham gia vào việc phát triển, tối ưu hóa và bảo trì các ứng dụng web động với yêu cầu hiệu suất cao.",
              "Kinh nghiệm làm việc trong môi trường Agile/Scrum và đã tham gia các cuộc họp Sprint, Retrospectives.",
              "Tham gia vào quy trình triển khai sản phẩm từ giai đoạn lập kế hoạch đến khi đưa sản phẩm lên môi trường sản xuất.",
              "Kinh nghiệm làm việc với các hệ thống kiểm soát phiên bản như Git và các công cụ quản lý mã nguồn như GitHub, GitLab.",
              "Đã phát triển các ứng dụng web tích hợp API và thực hiện các tính năng nâng cao như xác thực người dùng, xử lý lỗi, và bảo mật frontend.",
              "Có khả năng học hỏi nhanh các công nghệ mới và áp dụng vào các dự án thực tế.",
            ],
          },
        },
      ],
    },
    {
      id: "2",
      name: "FPT Software",
      logo: "https://th.bing.com/th/id/OIP.mLTCQL88yAT8z5EiSsyWswHaFQ?rs=1&pid=ImgDetMain",
      location: "Đà Nẵng, Việt Nam",
      industries: ["Phát triển phần mềm", "Dịch vụ CNTT", "Công nghệ"],
      size: "10,000+ nhân viên",
      website: "https://fpt-software.com",
      workingDays: "Thứ Hai - Thứ Sáu",
      overtime: "Có, tùy thuộc vào dự án",
      benefits: [
        "Mức lương cạnh tranh và thưởng theo hiệu suất công việc.",
        "Bảo hiểm y tế, bảo hiểm xã hội và các quyền lợi khác theo quy định của pháp luật Việt Nam.",
        "Cơ hội phát triển nghề nghiệp và thăng tiến.",
      ],
      jobs: [
        {
          id: "2",
          title: "Fullstack Developer",
          location: "Đà Nẵng",
          tags: ["Node.js", "ReactJS", "Microservices"],
          postedTime: "Đăng tuyển 5 giờ trước",
          salary: "Đăng nhập để xem mức lương",
          description: {
            reasons: [
              "Cơ hội làm việc với công nghệ tiên tiến.",
              "Tham gia vào các dự án quy mô lớn và xây dựng các ứng dụng fullstack hiệu quả.",
              "Môi trường làm việc sáng tạo và tập trung vào phát triển nghề nghiệp.",
            ],
            details: [
              "Phát triển các ứng dụng fullstack sử dụng Node.js và ReactJS.",
              "Xây dựng và duy trì các microservices và API RESTful.",
              "Tối ưu hóa hệ thống để đạt hiệu suất cao và đảm bảo sự ổn định.",
              "Hợp tác với các nhóm khác để đảm bảo tính tương thích giữa frontend và backend.",
              "Tham gia vào quy trình lập kế hoạch sản phẩm và triển khai trong môi trường Agile.",
            ],
            skills: [
              "Thành thạo Node.js, ReactJS và kiến trúc microservices.",
              "Kinh nghiệm làm việc với MongoDB, MySQL và các hệ quản trị cơ sở dữ liệu khác.",
              "Hiểu biết về API RESTful và khả năng tích hợp dịch vụ backend vào frontend.",
              "Kinh nghiệm sử dụng Git và các công cụ quản lý mã nguồn.",
              "Kinh nghiệm triển khai các ứng dụng fullstack trong môi trường sản xuất.",
            ],
            experience: [
              "Ít nhất 3 năm kinh nghiệm làm việc với Node.js và ReactJS.",
              "Kinh nghiệm phát triển các ứng dụng fullstack và triển khai microservices.",
              "Hiểu biết về các dịch vụ đám mây như AWS, Azure hoặc Google Cloud.",
              "Kinh nghiệm làm việc trong môi trường Agile/Scrum và sử dụng các công cụ CI/CD.",
              "Kinh nghiệm với các công cụ kiểm thử như Jest, Mocha hoặc Chai.",
            ],
          },
        },
      ],
    },
    {
      id: "3",
      name: "Vingroup",
      logo: "https://th.bing.com/th/id/R.3dba36ee18ea9a3491117ebc60799014?rik=vGUimhiKV%2fTvVQ&riu=http%3a%2f%2fashui.com%2fawards%2fwp-content%2fuploads%2f2015%2f08%2fVingroup-1120x630.jpg&ehk=zHxGfLz8Vuk3caLKxc3anG1NJ56drSa9%2fdR5Vf4Fcik%3d&risl=&pid=ImgRaw&r=0",
      location: "Hà Nội, Việt Nam",
      industries: ["Bất động sản", "Công nghệ", "Thương mại điện tử"],
      size: "50,000+ nhân viên",
      website: "https://vingroup.net",
      workingDays: "Thứ Hai - Thứ Sáu",
      overtime: "Có, tùy thuộc vào dự án",
      benefits: [
        "Chế độ đãi ngộ hấp dẫn, lương thưởng theo hiệu quả công việc.",
        "Bảo hiểm xã hội, bảo hiểm y tế và các quyền lợi khác theo quy định của pháp luật.",
        "Cơ hội thăng tiến và phát triển nghề nghiệp trong môi trường quốc tế.",
      ],
      jobs: [
        {
          id: "3",
          title: "Senior Backend Developer",
          location: "Hà Nội",
          tags: ["Java", "Spring Boot", "MySQL"],
          postedTime: "Đăng tuyển 7 giờ trước",
          salary: "Đăng nhập để xem mức lương",
          description: {
            reasons: [
              "Cơ hội làm việc với các dự án công nghệ lớn và hiện đại.",
              "Môi trường làm việc chuyên nghiệp, năng động và sáng tạo.",
              "Cơ hội thăng tiến trong công ty hàng đầu tại Việt Nam.",
            ],
            details: [
              "Phát triển và duy trì các hệ thống backend sử dụng Java và Spring Boot.",
              "Thiết kế, triển khai và tối ưu hóa các dịch vụ RESTful API.",
              "Làm việc với cơ sở dữ liệu MySQL để quản lý và tối ưu hóa các yêu cầu về dữ liệu.",
              "Phối hợp với các nhóm phát triển frontend để xây dựng các tính năng đầy đủ và hiệu quả.",
              "Tham gia vào quy trình phát triển phần mềm trong môi trường Agile/Scrum.",
            ],
            skills: [
              "Thành thạo Java và Spring Boot.",
              "Kinh nghiệm làm việc với MySQL và tối ưu hóa cơ sở dữ liệu.",
              "Hiểu biết về API RESTful và khả năng xây dựng các dịch vụ backend hiệu quả.",
              "Kinh nghiệm với các công cụ kiểm thử như JUnit, Mockito.",
              "Hiểu biết vững về quy trình phát triển phần mềm Agile/Scrum.",
            ],
            experience: [
              "Ít nhất 5 năm kinh nghiệm phát triển backend với Java và Spring Boot.",
              "Kinh nghiệm thiết kế và triển khai các API RESTful và các dịch vụ microservices.",
              "Kinh nghiệm làm việc với MySQL hoặc các hệ quản trị cơ sở dữ liệu quan hệ khác.",
              "Đã tham gia vào quy trình phát triển phần mềm trong môi trường Agile/Scrum.",
              "Kinh nghiệm làm việc với các công cụ quản lý mã nguồn như Git và Jenkins.",
            ],
          },
        },
      ],
    },
    {
      id: "4",
      name: "Tiki Corporation",
      logo: "https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fpictureofcompany%2F3e%2Fcompany-info-cover-picture-url-275978-1692256970.png&w=3840&q=75",
      location: "TP. Hồ Chí Minh, Việt Nam",
      industries: ["Thương mại điện tử", "Logistics", "Tiêu dùng"],
      size: "5000+ employees",
      website: "https://tiki.vn",
      workingDays: "Monday - Friday",
      overtime: "No OT",
      benefits: [
        "Lương thưởng cạnh tranh, cơ hội thăng tiến cao.",
        "Bảo hiểm xã hội, bảo hiểm y tế đầy đủ theo quy định của pháp luật.",
        "Chế độ thưởng vào các dịp lễ, Tết, quà sinh nhật.",
      ],
      jobs: [
        {
          id: "4",
          title: "Mobile App Developer",
          location: "TP. Hồ Chí Minh",
          tags: ["Flutter", "iOS", "Android"],
          postedTime: "Posted 9 hours ago",
          salary: "Sign in to view salary",
          description: {
            reasons: [
              "Cơ hội làm việc với đội ngũ trẻ trung và sáng tạo.",
              "Tham gia vào các dự án quy mô lớn.",
              "Môi trường làm việc thân thiện, linh hoạt.",
            ],
            details: [
              "Phát triển và duy trì ứng dụng di động đa nền tảng sử dụng Flutter.",
              "Tối ưu hóa hiệu suất và bảo mật cho các ứng dụng di động.",
              "Tham gia vào việc thiết kế và triển khai các tính năng cho cả Android và iOS.",
              "Phối hợp với các nhóm thiết kế và backend để đảm bảo trải nghiệm người dùng tối ưu.",
              "Cập nhật và duy trì mã nguồn của ứng dụng di động và đảm bảo tính tương thích với các phiên bản mới của hệ điều hành.",
            ],
            skills: [
              "Thành thạo Flutter và kinh nghiệm phát triển ứng dụng di động cho cả Android và iOS.",
              "Kinh nghiệm làm việc với các công cụ và thư viện Flutter (Dart, Firebase, etc.).",
              "Hiểu biết về phát triển ứng dụng di động theo hướng tối ưu hóa hiệu suất và bảo mật.",
              "Kinh nghiệm làm việc với các hệ thống backend và API RESTful.",
              "Khả năng làm việc trong môi trường Agile và Scrum.",
            ],

            experience: [
              "Ít nhất 2 năm kinh nghiệm phát triển ứng dụng di động với Flutter.",
              "Kinh nghiệm phát triển ứng dụng cho cả Android và iOS.",
              "Hiểu biết về các nguyên lý thiết kế mobile-first và tối ưu hóa cho thiết bị di động.",
              "Kinh nghiệm với các công cụ kiểm thử và kiểm tra ứng dụng di động.",
              "Kinh nghiệm làm việc với các hệ thống quản lý mã nguồn như Git.",
            ],
          },
        },
      ],
    },

    // Add other company objects here
  ];

  // Flatten the jobs array and include company details
  const jobsWithCompany = companies.flatMap((company) =>
    company.jobs.map((job) => ({
      ...job,
      company: {
        name: company.name,
        logo: company.logo,
        location: company.location,
        industries: company.industries,
        size: company.size,
        website: company.website,
        workingDays: company.workingDays,
        overtime: company.overtime,
        benefits: company.benefits,
      },
    }))
  );
  const job = jobsWithCompany.find((job) => job.id === jobId);

  // Find the specific job by jobId

  if (!job) {
    return <div>Job not found</div>; // Trường hợp jobId không tồn tại
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex justify-between items-start">
          <div className="w-1/5 ">
            <img src={job.company.logo} alt={job.company.name} />
          </div>
          <div className="w-3/5">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {job.title}
            </h1>
            <p className="text-gray-600">{job.company.name}</p>
            <p className="text-gray-500 text-sm mb-2">{job.location}</p>
            <p className="text-gray-400 text-sm">{job.postedTime}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <Link to={`/findjob/${jobId}/applynow`}>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg text-sm font-semibold">
              Apply now
            </button>
          </Link>
        </div>
        <p className="text-gray-500 text-sm mt-2">{job.salary}</p>
      </div>

      {/* Job Description */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 w-full">
        <div className="lg:col-span-9   flex flex-col gap-5 rounded-lg shadow-md">
          <div className="bg-white shadow-lg rounded-lg  p-6 ">
            <h2 className="text-xl font-semibold mb-4">
              Top 3 reasons to join us
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {job.description.reasons.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg  p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Job description</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {job.description.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ol>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Your skills</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {job.description.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ol>
          </div>
        </div>

        {/* Company Info */}
        <div className="lg:col-span-3 flex  flex-col gap-5">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{job.company.name}</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Company size:</strong> {job.company.size}
              </li>
              <li>
                <strong>Industry:</strong> {job.company.industries.join(", ")}
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href={job.company.website}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noreferrer">
                  {job.company.website}
                </a>
              </li>
              <li>
                <strong>Working days:</strong> {job.company.workingDays}
              </li>
              <li>
                <strong>Overtime policy:</strong> {job.company.overtime}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
