import React from "react";

export default function heroOne() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-indigo-600 font-medium">
            CALLING OUT ALL STARTUPS & SMALL BUSINESS OWNERS
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            DO YOU WANT A{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              SIMPLE, BEAUTIFUL, GROWTH-CENTRIC
            </span>{" "}
            SALES FUNNEL IN JUST 3 DAYS?
          </h2>
          <p className="max-w-2xl mx-auto">
            Creating a sales funnel can be hard and expensive. We make it easy
            and affordable. Access our FREE ‘Sales Funnel Checklist’ below.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="https://drive.google.com/file/d/1as9IW5eMnpPKcnfyxyEc0vj5V8Q_n6mW/view?usp=sharing"
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              I Want It Now!
            </a>
          </div>
        </div>
        <br />
        <center>
          <iframe
            src="https://drive.google.com/file/d/1soHQKpQ8uw9ok1jGsbsrojKNsrP9DHWz/preview"
            className="lg:w-[1040px] lg:h-[640px] sm:w-full sm:h-full"
            allow="autoplay"
          />
        </center>
      </div>
    </section>
  );
}
