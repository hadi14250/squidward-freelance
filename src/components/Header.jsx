import React from "react";
import BgImage from "/images/bg.png";

const Header = ({ togglePlay, play }) => {
  return (
    <div className="fixed top-0 left-0 right-0 lg:p-5 p-2 lg:pt-4 pt-2 z-[100] bg-green-200 border-b-1 border-b-black">
      <div className="flex w-full justify-between items-center relative rounded-full p-2 px-2 max-w-[1500px] mx-auto">
        <div className="flex items-center gap-5">
          <div className="text-black lg:w-[380px] w-[220px] h-[60px] relative">
            <img
              alt="logo"
              className="object-contain z-1"
              data-nimg="fill"
              decoding="async"
              loading="lazy"
              sizes="100vw"
              src={BgImage}
              style={{
                bottom: "0",
                color: "transparent",
                height: "100%",
                left: "0",
                position: "absolute",
                right: "0",
                top: "0",
                width: "100%",
              }}
            />
          </div>
        </div>
        <div className="lg:hidden">
          <div className="relative text-blue-light">
            <div>
              <div className="flex justify-center items-center ">
                <button
                  onClick={() => togglePlay()}
                  className="cursor-pointer select-none bg-blue-500  p-2 border-2 border-black"
                >
                  {play ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-pause text-black"
                    >
                      <rect width="4" height="16" x="6" y="4"></rect>
                      <rect width="4" height="16" x="14" y="4"></rect>
                    </svg>
                  ) : (
                    <svg
                      className="lucide lucide-play text-black"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-5 font-body text-lg text-black hidden lg:flex items-center">
          <a
            className="md:hover:scale-105 cursor-pointer"
            href="https://pump.fun/EHXKyWxWc9XoLtE9fezMSDpYZKgt6BZbFtBU5A4Q28R7"
            rel="chad"
            target="_blank"
          >
            Chart
          </a>
          <a
            className="md:hover:scale-105 cursor-pointer"
            href="https://pump.fun/EHXKyWxWc9XoLtE9fezMSDpYZKgt6BZbFtBU5A4Q28R7"
            rel="chad"
            target="_blank"
          >
            Buy
          </a>
          <a className="md:hover:scale-105 cursor-pointer" href="#tokenomics">
            Tokenomics
          </a>
          <a className="md:hover:scale-105 cursor-pointer" href="#roadmap">
            Roadmap
          </a>
          <a
            className="md:hover:scale-105 cursor-pointer w-[100px]"
            href="#howtobuy"
          >
            How to buy
          </a>
          <a
            className="md:hover:scale-105 cursor-pointer"
            href="https://www.t.me/Squidwardjoinchat"
            rel="chad"
            target="_blank"
          >
            Telegram
          </a>
          <a
            className="md:hover:scale-105 cursor-pointer"
            href="https://x.com/SquidOfSol"
            rel="chad"
            target="_blank"
          >
            Twitter
          </a>
          <div className="relative text-blue-light">
            <div>
              <div className="flex justify-center items-center ">
                <button
                  onClick={() => togglePlay()}
                  className="cursor-pointer select-none bg-blue-500  p-2 border-2 border-black"
                >
                  {play ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-pause text-black"
                    >
                      <rect width="4" height="16" x="6" y="4"></rect>
                      <rect width="4" height="16" x="14" y="4"></rect>
                    </svg>
                  ) : (
                    <svg
                      className="lucide lucide-play text-black"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
