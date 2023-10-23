import React from "react";

import "@fortawesome/fontawesome-free/css/all.css";

import arrow from "../assets/svg/arrow.svg"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-6xl font-bold text-center">Hi 👋, I'm Luna</h1>
          <h2 className="text-4xl font-bold text-center ">
            I'm a full-stack web developer.
          </h2>
          <div className="flex flex-row justify-center top">
            <a href="About">
              <Image
                src={arrow}
                className=" rotate-45 w-24 h-24"
                alt="arrow"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
