import React from "react";

export default function CTA() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <img
              src="https://i.ibb.co/xFMT1h1/Webfinity-Assets-5.png"
              className="md:max-w-lg sm:rounded-lg"
              alt=""
            />
          </div>
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="text-indigo-600 font-semibold">
              I have seen enough!
            </h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Work with us{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                today
              </span>{" "}
              and take the leap to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                new growth
              </span>{" "}
              to scale your business!
            </p>
            <a
              href="https://forms.gle/b42SwkWP7vzm2AFL8"
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Yes I want my sales funnel! Book my FREE UI/UX design consultation
              now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
