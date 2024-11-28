import { useParams } from "react-router-dom";

const CompanyDetail = () => {
  const { companyId } = useParams();

  // Dữ liệu mẫu các công ty
  const companies = [
    {
      id: "1",
      name: "Công ty FPT Software",
      location: "Hà Nội, Việt Nam",
      jobs: [
        { id: "j1", title: "Frontend Developer" },
        { id: "j2", title: "Backend Developer" },
      ],
      description:
        "FPT Software là thành viên của Tập đoàn FPT (FPT – HoSE) – tập đoàn công nghệ, gia công và dịch vụ CNTT hàng đầu thế giới có trụ sở tại Việt Nam với doanh thu gần 2 tỷ USD và hơn 27.000 nhân viên. Đạt tiêu chuẩn CMMI Level 5 & ISO 27001:2013, ASPICE LEVEL 3, FPT Software cung cấp các dịch vụ đẳng cấp thế giới về Nhà máy thông minh, Nền tảng kỹ thuật số, RPA, AI, IoT, Enterprise Mobilization, Cloud, AR/VR, Hệ thống nhúng, Dịch vụ được quản lý, Thử nghiệm, hiện đại hóa nền tảng, Ứng dụng kinh doanh, Dịch vụ ứng dụng, BPO và nhiều dịch vụ khác trên toàn cầu từ các trung tâm phân phối trên khắp Hoa Kỳ, Nhật Bản, Châu Âu, Hàn Quốc, Trung Quốc, Úc, Việt Nam và Châu Á Thái Bình Dương. Năm 2017, FPT Software 3 năm liên tiếp lọt vào top 10 của bảng xếp hạng. Trong top 10, FPT Software là Công ty CNTT duy nhất.",
      mission:
        "Chúng tôi cam kết cung cấp giải pháp phần mềm sáng tạo giúp doanh nghiệp thành công.",
      coreValues: "Đổi mới, sáng tạo, chất lượng.",
      logo: "https://th.bing.com/th/id/OIP.mLTCQL88yAT8z5EiSsyWswHaFQ?rs=1&pid=ImgDetMain",
      founded: 1999,
      employees: 27000,
      industries: ["Phần mềm", "Công nghệ thông tin"],
      website: "https://www.fpt-software.com",
      benefits: [
        "Chế độ lương cạnh tranh dựa trên năng lực và thưởng hàng năm.",
        "Bảo hiểm sức khỏe FPT care, cung cấp bởi AON, chỉ dành riêng cho nhân viên FPT.",
        "Chế độ nghỉ phép theo chính sách công ty và theo luật lao động Việt Nam.",
        "Khuôn viên F-Town cung cấp các tiện ích như sân bóng đá, sân bóng rổ & bóng chuyền, phòng gym & yoga, nhà hàng, căng tin, v.v.",
        "Phụ cấp lên đến 20.000.000 VND tùy theo cấp bậc.",
        "Các phụ cấp khác như phụ cấp bữa trưa, v.v.",
        "Thời gian làm việc: Thứ Hai - Thứ Sáu | 08:00 - 17:00.",
        "Trong trường hợp khẩn cấp (COVID-19), công ty sẽ hỗ trợ ứng viên phỏng vấn trực tuyến.",
      ],
    },
    {
      id: "2",
      name: "Công ty VinGroup",
      location: "TP. Hồ Chí Minh, Việt Nam",
      jobs: [
        { id: "j3", title: "Project Manager" },
        { id: "j4", title: "Data Scientist" },
      ],
      description: `Tiền thân của Vingroup là Tập đoàn Technocom, thành lập năm 1993 tại Ucraina. Đầu những năm 2000, Technocom trở về Việt Nam, tập trung đầu tư vào lĩnh vực du lịch và bất động sản với hai thương hiệu chiến lược ban đầu là Vinpearl và Vincom. Đến tháng 1/2012, công ty CP Vincom và Công ty CP Vinpearl sáp nhập, chính thức hoạt động dưới mô hình Tập đoàn với tên gọi Tập đoàn Vingroup  Công ty CP.3 nhóm hoạt động trọng tâm của Tập đoàn bao gồm:
        Công nghệ Công nghiệp
        Thương mại Dịch vụ
        Thiện nguyện Xã hội

Với mong muốn đem đến cho thị trường những sản phẩm - dịch vụ theo tiêu chuẩn quốc tế và những trải nghiệm hoàn toàn mới về phong cách sống hiện đại, ở bất cứ lĩnh vực nào Vingroup cũng chứng tỏ vai trò tiên phong, dẫn dắt sự thay đổi xu hướng tiêu dùng. `,
      mission:
        "Chúng tôi mong muốn trở thành tập đoàn đa ngành hàng đầu ở Việt Nam và quốc tế.",
      coreValues: "Sáng tạo, trách nhiệm, bền vững.",
      logo: "https://th.bing.com/th/id/OIP.YoRFkWJUuc2WMubY7hEXZAHaD2?rs=1&pid=ImgDetMain",
      founded: 1993,
      employees: 50000,
      industries: ["Bất động sản", "Công nghệ", "Y tế"],
      website: "https://www.vingroup.net",
      benefits: [
        "Chế độ lương và thưởng cạnh tranh.",
        "Bảo hiểm sức khỏe toàn diện.",
        "Môi trường làm việc sáng tạo và chuyên nghiệp.",
        "Chế độ phúc lợi đầy đủ và chính sách nghỉ phép linh hoạt.",
      ],
    },
    {
      id: "3",
      name: "Công ty Tiki",
      location: "TP. Hồ Chí Minh, Việt Nam",
      jobs: [
        { id: "j5", title: "Product Manager" },
        { id: "j6", title: "UI/UX Designer" },
      ],
      description:
        "Tiki là một trong những sàn thương mại điện tử lớn nhất Việt Nam, chuyên cung cấp các sản phẩm tiêu dùng chất lượng, với mục tiêu mang đến trải nghiệm mua sắm tiện lợi và nhanh chóng.",
      mission:
        "Tiki cam kết mang lại sự hài lòng tối đa cho khách hàng thông qua các sản phẩm chính hãng và dịch vụ tận tâm.",
      coreValues: "Khách hàng là trọng tâm, đổi mới, sáng tạo.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Tiki_Logo_2021.png",
      founded: 2010,
      employees: 5000,
      industries: ["Thương mại điện tử", "Logistics", "Tiêu dùng"],
      website: "https://tiki.vn",
      benefits: [
        "Lương thưởng cạnh tranh, cơ hội thăng tiến cao.",
        "Bảo hiểm xã hội, bảo hiểm y tế đầy đủ theo quy định của pháp luật.",
        "Chế độ thưởng vào các dịp lễ, Tết, quà sinh nhật.",
        "Môi trường làm việc trẻ trung, năng động, cơ hội học hỏi và phát triển bản thân.",
        "Cơ hội tham gia các hoạt động ngoại khóa, teambuilding.",
      ],
    },
    // Các công ty khác...
  ];

  // Tìm công ty theo ID
  const company = companies.find((c) => c.id === companyId);

  // Xử lý trường hợp công ty không tồn tại
  if (!company) {
    return (
      <div className="text-center mt-20">
        <p className="text-xl text-red-500">Công ty không tồn tại!</p>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <header className="bg-gray-100 p-6 shadow-md text-center">
        <img
          src={company.logo}
          alt={company.name}
          className="max-md:w-1/2 w-1/4 mx-auto mb-4 object-contain rounded-md"
        />
        <h1 className="text-3xl font-bold">{company.name}</h1>
        <p className="text-gray-600">{company.location}</p>
      </header>

      <main className="p-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 w-full">
          <div className="lg:col-span-9 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Về chúng tôi</h2>
            <p className="mt-4 text-gray-700">{company.description}</p>

            <div className="mt-6">
              <h3 className="text-xl font-medium">Sứ mệnh và Tầm nhìn</h3>
              <p className="mt-4 text-gray-700">{company.mission}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-medium">Giá trị cốt lõi</h3>
              <p className="mt-4 text-gray-700">{company.coreValues}</p>
            </div>
            <h3 className="text-xl font-semibold mt-6">Chế độ đãi ngộ</h3>
            <ul className="mt-4 list-disc pl-6">
              {company.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-700">
                  {benefit}
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-medium mt-6">Vị trí đang tuyển</h3>
            <ul className="mt-4 list-disc pl-6">
              {company.jobs.map((job) => (
                <li key={job.id} className="text-gray-700">
                  {job.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex  flex-col gap-5 ">
            <div className="max-h-min bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">Thông tin chung</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <strong>Năm thành lập:</strong> {company.founded}
                </li>
                <li>
                  <strong>Số lượng nhân viên:</strong>{" "}
                  {company.employees.toLocaleString()}
                </li>
                <li>
                  <strong>Lĩnh vực:</strong> {company.industries.join(", ")}
                </li>
                <li>
                  <strong>Trang web:</strong>{" "}
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline">
                    {company.website}
                  </a>
                </li>
              </ul>
            </div>
            <div className="max-h-min bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Địa Chỉ</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CompanyDetail;
