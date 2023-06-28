import React, { useEffect } from "react";
import Clips from "./utils/Clips";
import SocialLink from "./utils/SocialLink";

const HeroSection = ({heroapi: {title, subtitle, img, sociallinks, btntext, videos}}) => {
  useEffect(() => {
  }, [])
  
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute left-0 right-0 top-0 z-10 opacity-100"></div>
        <div className="z-20 opacity-100 relative grid items-center justify-center nike-container">
          <div className="grid items-center justify-items-center mt-28 md:mt-24">
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">{title}</h1>
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">{subtitle}</h1>
            <button type="button" className="button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5 ">{btntext}</button>
            <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top[27vh] left-[11%] xl:left-0 w-auto h-auto">
              {videos?.map((video, i)=> (
                <Clips key={i} imgsrc={video.imgsrc} clip={video.clip} />
              ))}
            </div>
            <div className="grid items-center absolute top-[33vh] right-0 gap-3">
            {sociallinks?.map((icon, i)=> (
                <SocialLink key={i} icon={icon.icon} />
              ))}
            </div>
          </div>
          <div className="my-8">
            <img src={img} alt="img/hero" className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg]
            hover:rotate-0 cursor-pointer object-fill" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;