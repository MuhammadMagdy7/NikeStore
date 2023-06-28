import React from "react";
import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { HeartIcon, ClockIcon, HashtagIcon } from "@heroicons/react/24/solid";
import { truncate } from "lodash";

const Stories = ({ endpoint: { title, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };

  return (
    <>
      <div className="nike-container mb-11">
          <Title title={title} />
        <div className="mt-7">
          <Splide options={splideOptions}>
            {news.map((item, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                  <div className="flex items-center justify-center">
                    <img
                      src={item.img}
                      className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tr-lg rounded-tl-lg"
                      alt={`img/story/${i}`}
                    />
                  </div>
                  <div className="flex items-center justify-between px-4">
                    <div className="flex items-center gap-0.5">
                      <HeartIcon className="icon-style text-red-500" />
                      <span className="text-xs font-bold">{item.like}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <ClockIcon className="icon-style text-black" />
                      <span className="text-xs font-bold">{item.time}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <HashtagIcon className="icon-style text-blue-600" />
                      <span className="text-xs font-bold text-blue-600">
                        {item.by}
                      </span>
                    </div>
                  </div>
                  <div className="grid items-center justify-items-center px-4">
                    <h1 className="text-base font-semibold lg:text-sm">
                      {item.title}
                    </h1>
                    <p className="text-sm text-justify lg:text-xs">
                      {truncate(item.text, {length: 175})}
                    </p>
                  </div>
                  <div className="flex items-center justify-center px-4 w-full">
                    <a
                      className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme"
                      target="_blank"
                      href={item.url}
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;
