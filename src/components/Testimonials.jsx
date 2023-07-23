import React from "react";

export default function Testimonials() {
  const team = [
    {
      avatar: "https://i.ibb.co/YThmQwv/Past-Webfinity-Clients.png",
      name: "Showtime Karaoke",
      title: "The biggest family karaoke in BSD city.",
    },
    {
      avatar: "https://i.ibb.co/jHn5X48/Past-Webfinity-Clients-2.png",
      name: "AMPM Dance Studio",
      title: "The biggest dance studio in Jakarta.",
    },
    {
      avatar: "https://i.ibb.co/txjVg5n/Past-Webfinity-Clients-3.png",
      name: "Maxley Suites",
      title: "Hotel & lodging.",
    },
  ];

  return (
    <section className="bg-white py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto sm:text-center">
          <p className="text-gray-600 mt-3">#TOWEBFINITYANDBEYOND</p>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            TRUSTED BY ENTREPRENEURS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              ALL OVER SOUTHEAST ASIA
            </span>
          </h2>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {team.map((item, idx) => (
              <li key={idx}>
                <div className="w-full h-60 sm:h-52 md:h-56">
                  <img
                    src={item.avatar}
                    className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-lg text-gray-700 font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-indigo-600">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
