import React from "react";

const EnterPage = ({ togglePlay, setEnter }) => {
  return (
    <main className="font-body your-element overflow-x-hidden">
      <div className="bg-blue">
        <div className="max-w-[1500px] mx-auto pt-[120px]">
          <div
            className="fixed top-0 bottom-0 left-0 right-0 z-[10000] bg-main bg-cover bg-center"
            style={{
              zIndex: "1000",
            }}
          >
            <div className="w-full h-full flex items-center flex-col justify-center">
              <button
                onClick={() => {
                  togglePlay();
                  setEnter(true);
                }}
                className="active:top-[2px] whitespace-nowrap uppercase text-black border-2 font-body border-black bg-pink !px-10 lg:hover:opacity-60 transition-all cursor-pointer select-none lg:text-[32px] text-[32px] px-4 lg:py-2 lg:pt-3 py-1 pt-2 md:mt-5 relative z-1"
              >
                ENTER
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="fixed top-0 left-0 right-0 lg:p-5 p-2 lg:pt-4 pt-2 z-[100] bg-red bg-blue border-b-1 border-b-black">
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
                    src="/_next/image?url=%2Fimg%2Flogo2.png&w=3840&q=75"
                    srcSet="/_next/image?url=%2Fimg%2Flogo2.png&w=640&q=75 640w, /_next/image?url=%2Fimg%2Flogo2.png&w=750&q=75 750w, /_next/image?url=%2Fimg%2Flogo2.png&w=828&q=75 828w, /_next/image?url=%2Fimg%2Flogo2.png&w=1080&q=75 1080w, /_next/image?url=%2Fimg%2Flogo2.png&w=1200&q=75 1200w, /_next/image?url=%2Fimg%2Flogo2.png&w=1920&q=75 1920w, /_next/image?url=%2Fimg%2Flogo2.png&w=2048&q=75 2048w, /_next/image?url=%2Fimg%2Flogo2.png&w=3840&q=75 3840w"
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
                      <div className="cursor-pointer select-none bg-pink p-2 border-2 border-black">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-5 font-body text-2xl text-black hidden lg:flex items-center">
                <a
                  className="md:hover:scale-105 cursor-pointer"
                  href="https://dexscreener.com/solana/GahB1yHTvLjsvEapbiqrMPQPyKNodx9GNBJt53GYet7v"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Chart
                </a>
                <a
                  className="md:hover:scale-105 cursor-pointer"
                  href="https://raydium.io/swap/?outputCurrency=GahB1yHTvLjsvEapbiqrMPQPyKNodx9GNBJt53GYet7v"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Buy
                </a>
                <a
                  className="md:hover:scale-105 cursor-pointer"
                  href="#tokenomics"
                >
                  Tokenomics
                </a>
                <a
                  className="md:hover:scale-105 cursor-pointer"
                  href="https://www.t.me/Squidwardjoinchat"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Telegram
                </a>
                <a
                  className="md:hover:scale-105 cursor-pointer"
                  href="https://x.com/SquidOfSol"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Twitter
                </a>
                <div className="relative text-blue-light">
                  <div>
                    <div className="flex justify-center items-center ">
                      <div className="cursor-pointer select-none bg-pink p-2 border-2 border-black">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1500px] mx-auto lg:px-10 px-5">
            <div className="lg:h-[300px] flex lg:flex-row flex-col-reverse justify-around gap-20 items-center w-full lg:mt-[200px] mt-[50px]">
              <div className="lg:w-1/2">
                <div
                  style={{
                    opacity: "1",
                    transform: "scale(0) translateZ(0px)",
                  }}
                >
                  <div className="text-black lg:text-[100px] text-[60px] font-display">
                    SQUID
                  </div>
                  <div className="text-black lg:text-[28px] text-[24px] lg:leading-[30px] leading-[28px]">
                    andru m8 is da unoffishal, offishal king of da streets in da
                    solana kingdm. he savin ppl, animols n even reptyls frm a
                    brokie lyf. he comin to save u, u jus need to accept it n
                    watch how he aikido every 0 from da price till ur bank
                    account goes brr brr. buy SQUID now n change ur lyf, or
                    buy it tmro at 1$ n change ur lyf, or dont buy it, stay
                    poor, brokie.
                  </div>
                  <div className="text-black mt-5 lg:text-[30px] text-[12px]">
                    CA: GahB1yHTvLjsvEapbiqrMPQPyKNodx9GNBJt53GYet7v
                  </div>
                  <div className="mt-10">
                    <a
                      href="https://raydium.io/swap/?outputCurrency=GahB1yHTvLjsvEapbiqrMPQPyKNodx9GNBJt53GYet7v"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <button className="active:top-[2px] whitespace-nowrap uppercase text-black border-2 font-body border-black bg-pink !px-10 lg:hover:opacity-60 transition-all cursor-pointer select-none lg:text-[32px] text-[32px] px-4 lg:py-2 lg:pt-3 py-1 pt-2">
                        BUY SQUID
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    opacity: "1",
                    transform: "scale(0) translateZ(0px)",
                  }}
                >
                  <div className="relative lg:w-[450px] lg:h-[450px] w-[250px] h-[250px]">
                    <img
                      alt="logo"
                      className="object-contain music-bounce z-1"
                      data-nimg="fill"
                      decoding="async"
                      loading="lazy"
                      src="/img/logo-circle.svg"
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
              </div>
            </div>
          </div>
          <div className="lg:mt-32 mt-20 px-3 bg-main bg-cover bg-top lg:h-[1200px] h-[500px]" />
        </div>
        <div className="max-w-[1500px] border-t-1 border-t-black flex flex-col items-center justify-center py-20 mx-auto lg:px-10 px-5">
          <h2 className="lg:text-7xl text-4xl mb-16 text-black lg:!leading-[70px] leading-[54px] break-normal font-display">
            Join bewgeti army
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="relative w-fit mx-auto mb-12 md:mb-0">
              <a
                className="absolute top-[64%] left-[10%] whitespace-nowrap uppercase text-black border-2 font-body border-black bg-pink py-[2px] px-[10px] md:px-10 lg:hover:opacity-60 cursor-pointer select-none lg:text-[32px] text-[16px] px-4 lg:py-2 lg:pt-3"
                href="https://boards.4chan.org/lgbt/"
              >
                stey bwokie
              </a>
              <img alt="chuz" className="" src="/img/chuz.png" />
              <a
                className="absolute top-[64%] right-[10%] md:right-[13%] whitespace-nowrap uppercase text-black border-2 font-body border-black bg-pink py-[2px] px-[10px] md:px-10 lg:hover:opacity-60 cursor-pointer select-none lg:text-[32px] text-[16px] px-4 lg:py-2 lg:pt-3"
                href="https://bugetigen.gtop.wtf"
              >
                drive bewgeti
              </a>
            </div>
            <p className="text-black text-center text-4xl lg:text-6xl">
              iz ur choice <br />
              stey bwokie 4ever <br />
              or <br />
              dreive bewgeti
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EnterPage;
