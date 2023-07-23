import React from "react";

export default function Guarantee() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl space-y-3 md:mx-auto">
          <h1 className="text-sm text-indigo-600 font-medium">OUR PROMISE</h1>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            IF YOU DO NOT GET YOUR FUNNEL IN{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              3 DAYS
            </span>{" "}
            IT'S{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              FREE
            </span>
          </h2>
        </div>
        <div className="mt-4">
          <a
            href="https://forms.gle/b42SwkWP7vzm2AFL8"
            className="inline-block py-2 px-4 text-white font-medium bg-indigo-800 duration-150 hover:bg-indigo-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
          >
            Let's do this!
          </a>
        </div>
      </div>
    </section>
  );
}
