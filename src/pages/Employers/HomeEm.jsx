// import React from "react";

function HomeEm() {
  return (
    <main>
      <div className="flex gap-6 flex-wrapflex flex-col lg:flex-row min-h-screen">
        <div className="w-full md:order-2 lg:w-1/2 flex justify-center items-center bg-gray-50">
          <img
            src="https://itviec.com/assets/employer_landing/hire-the-best-it-15-95d4b6df6293a405cd77c094b8c7eb5dcc99cf8711f5b47751c841cfa51023a0.png"
            alt=""
            className="w-7/12 sm:w-10/12 md:w-8/12"
          />
        </div>
        <div className="p-4 md:pl-9  md:order-1 lg:w-1/2 gap-4 flex flex-col justify-center items-center w-100">
          <h1 className="text-4xl font-serif ">
            Hire the best IT Professionals in Vietnam with TLJob
          </h1>
          <h3 className="text-2xl font-serif">
            With in-depth understanding in the IT sector and specialized skills,
            we can help you reach and hire the best IT candidates.
          </h3>
          <a href="/" className=" w-full">
            <button className="w-full text-white p-3 text-2xl md:w-2/5 bg-red-500 rounded-3xl">
              Contact Now
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}

export default HomeEm;
