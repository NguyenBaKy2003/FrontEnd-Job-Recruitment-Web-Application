// import React from "react";

const CreateJob = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Tạo công việc của nhà tuyển dụng
      </h2>

      <form>
        {/* Tiêu đề */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700">
            Tiêu đề
          </label>
          <input
            type="text"
            id="title"
            placeholder="Nhập tiêu đề tin tuyển dụng"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Mô tả */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700">
            Mô tả tuyển dụng
          </label>
          <textarea
            id="description"
            placeholder="Nhập mô tả cho tin tuyển dụng"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows="3"></textarea>
        </div>

        {/* Yêu cầu */}
        <div className="mb-4">
          <label
            htmlFor="requirements"
            className="block text-sm font-medium text-gray-700">
            Yêu cầu tuyển dụng
          </label>
          <textarea
            id="requirements"
            placeholder="Nhập yêu cầu tuyển dụng"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows="3"></textarea>
        </div>

        {/* Quyền lợi */}
        <div className="mb-4">
          <label
            htmlFor="benefits"
            className="block text-sm font-medium text-gray-700">
            Quyền lợi
          </label>
          <textarea
            id="benefits"
            placeholder="Nhập quyền lợi cho ứng viên"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows="3"></textarea>
        </div>

        {/* Hạn ứng tuyển */}
        <div className="mb-4">
          <label
            htmlFor="deadline"
            className="block text-sm font-medium text-gray-700">
            Hạn ứng tuyển
          </label>
          <input
            type="date"
            id="deadline"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Địa điểm làm việc */}
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700">
            Địa điểm làm việc
          </label>
          <select
            id="location"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option>Chọn tỉnh/thành phố</option>
            <option>Hà Nội</option>
            <option>TP. Hồ Chí Minh</option>
            <option>Đà Nẵng</option>
          </select>
        </div>

        {/* Mức lương */}
        <div className="mb-4">
          <label
            htmlFor="salary"
            className="block text-sm font-medium text-gray-700">
            Mức lương
          </label>
          <select
            id="salary"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option>Dưới 10 triệu</option>
            <option>10 - 20 triệu</option>
            <option>20 - 30 triệu</option>
          </select>
        </div>

        {/* Phương thức làm việc */}
        <div className="mb-4">
          <label
            htmlFor="working-method"
            className="block text-sm font-medium text-gray-700">
            Phương thức làm việc
          </label>
          <select
            id="working-method"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option>Full time</option>
            <option>Part time</option>
            <option>Remote</option>
          </select>
        </div>

        {/* Danh mục */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700">
            Danh mục
          </label>
          <select
            id="category"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option>Công nghệ thông tin</option>
            <option>Marketing</option>
            <option>Thiết kế</option>
          </select>
        </div>

        {/* Vị trí */}
        <div className="mb-4">
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-700">
            Vị trí
          </label>
          <select
            id="position"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option>Back-end</option>
            <option>Front-end</option>
            <option>Full-stack</option>
          </select>
        </div>

        {/* Kỹ năng */}
        <div className="mb-6">
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-gray-700">
            Kỹ năng
          </label>
          <select
            id="skills"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option>Java</option>
            <option>Python</option>
            <option>ReactJS</option>
          </select>
        </div>

        {/* Button Tạo tin */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition">
          TẠO TIN
        </button>
      </form>
    </div>
  );
};

export default CreateJob;
