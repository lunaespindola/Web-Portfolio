import React from "react";
import Image from "next/image";

import selfie from "../../assets/jpg/me.jpg";
import "@fortawesome/fontawesome-free/css/all.css";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="flex flex-row justify-center top">
            <Image
              src={selfie}
              className="w-64 h-64 object-cover rounded-full"
              alt="selfie"
            />
          </div>
          <h2 className="text-4xl font-bold text-center text-white">
            About Me
          </h2>
          <div className="flex flex-row justify-center top">
            <p className="text-2xl font-bold text-center text-white">
              <br />
              I'm currently an student at the Tecnológico de Monterrey studying
              Informatics.
              <br />
              I have experience in web development, data science, backend
              services.
              <br />
              I'm also a huge fan of the space and animals.
            </p>
          </div>
          <div className="flex flex-col justify-center top">
            <h2 className="text-4xl font-bold text-center text-black pt-5">
              My contact info:
            </h2>

            <div className="flex flex-row justify-center top pt-5">
              <p className="text-2xl font-bold text-center text-white">
                <a href="https://github.com/lunaespindola">
                  <i
                    className="fa-brands fa-github-alt fa-bounce fa-2xl"
                    style={{ color: "#e67f7f" }}
                  ></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/luna-espindola/ "
                  className="pl-5"
                >
                  <i
                    className=" fa-brands fa-linkedin fa-bounce fa-2xl"
                    style={{ color: "#e67f7f" }}
                  ></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
