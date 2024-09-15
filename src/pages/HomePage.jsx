import RocketSection from "../components/RocketSection";
import BgImage from "/images/bg.png";
import squidsvg from "/images/squidsvg.svg";
import slideshow1 from "/images/slideshow1.png";
import slideshow2 from "/images/slideshow2.png";
import slideshow3 from "/images/slideshow3.png";
import slideshow4 from "/images/slideshow4.png";
import slideshow5 from "/images/slideshow5.png";
import slideshow6 from "/images/slideshow6.png";
import slideshow7 from "/images/slideshow7.png";
import slideshow8 from "/images/slideshow8.png";
import HowToBuy from "../components/HowToBuy";
import Roadmap from "/images/roadmap.png";

function HomePage() {
  return (
    <main className="font-body your-element overflow-x-hidden">
      <div className="bg-home bg-fixed bg-cover bg-no-repeat">
        <div className="max-w-[1500px] mx-auto pt-[150px] lg:pt-[180px]" />
        <RocketSection />
        <div className="max-w-[1500px] mx-auto pt-[20px] lg:pt-[120px]" />
        <div className="pb-[150px]">
          <div className="max-w-[1500px] mx-auto lg:px-10 px-5">
            <div className="lg:h-[400px] flex lg:flex-row flex-col justify-around gap-20 items-center w-full lg:mt-[200px] mt-[50px]">
              <div className="lg:w-1/2">
                <div
                  style={{
                    opacity: "1",
                    transform: "none",
                  }}
                >
                  <div className="text-black lg:text-[70px] text-[40px] font-display">
                    ABOUT
                  </div>
                  <div className="text-black lg:text-[15px] text-[16px] lg:leading-[30px] leading-[28px]">
                    SQUID at the bottom of the sea was watching as all his
                    friends and enemies would grow and climb the ladder to the
                    moon and beyond. His patience ran out one day as he saw
                    retards and degenerates dress up as Pepe and doge to climb
                    the same ladder he could easily climb, so he looked at
                    himself in the mirror and envisioned not a retard but the
                    CHADDEST of them all, the most GIGA, he's the only one of
                    his kind.
                    <br></br>
                    <br></br>
                    He is CHADWICK. CHADWICK doesn't care about ladders and
                    rocket emojis, his IQ is beyond 9000 his swag puts all Chads
                    to shame. He became the ONE. The ONE who for the first time
                    asked Andrew Tate what color his Buggatti is, now he wants
                    all his followers to end up with a Buggatti so that they can
                    ask all the degens what color their Buggatti is.
                  </div>
                  <div className="text-black mt-5 lg:text-[20px] text-[12px]">
                    CA: EHXKyWxWc9XoLtE9fezMSDpYZKgt6BZbFtBU5A4Q28R7
                  </div>
                  <div className="mt-10">
                    <a
                      href="https://pump.fun/EHXKyWxWc9XoLtE9fezMSDpYZKgt6BZbFtBU5A4Q28R7"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <button className="active:top-[2px] whitespace-nowrap uppercase text-black border-2 font-body border-black bg-blue-500 !px-10 lg:hover:opacity-60 transition-all cursor-pointer select-none lg:text-[16px] text-[16px] px-4 lg:py-2 lg:pt-3 py-1 pt-2">
                        BUY $SQUID
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    opacity: "1",
                    transform: "none",
                  }}
                >
                  <div className="relative lg:w-[450px] lg:h-[450px] w-[250px] h-[250px]">
                    <img
                      alt="logo"
                      className="object-contain music-bounce z-1"
                      data-nimg="fill"
                      decoding="async"
                      loading="lazy"
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
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-full">
  <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0 max-w-2xl mx-auto">
    <iframe
      className="w-full h-auto aspect-video"
      src="https://www.youtube.com/embed/beoM-DKodWw"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen>
    </iframe>
  </div>
</div>

        <div>
          <div className="text-black font-bold text-xl py-20">
            <div className="lg:block hidden">
              <div
                className="rfm-marquee-container "
                style={{
                  "--pause-on-click": "running",
                  "--pause-on-hover": "running",
                  "--transform": "none",
                  "--width": "100%",
                }}
              >
                <div
                  className="rfm-marquee"
                  style={{
                    "--delay": "0s",
                    "--direction": "normal",
                    "--duration": "1.6s",
                    "--iteration-count": "infinite",
                    "--min-width": "100%",
                    "--play": "running",
                  }}
                >
                  <div className="rfm-initial-child-container">
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <img
                        alt="bob"
                        className="object-contain"
                        data-nimg="1"
                        decoding="async"
                        height="500"
                        loading="lazy"
                        src={slideshow1}
                        style={{
                          color: "transparent",
                        }}
                        width="500"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="rfm-marquee"
                  style={{
                    "--delay": "0s",
                    "--direction": "normal",
                    "--duration": "1.6s",
                    "--iteration-count": "infinite",
                    "--min-width": "100%",
                    "--play": "running",
                  }}
                >
                  <div
                    className="rfm-child"
                    style={{
                      "--transform": "none",
                    }}
                  >
                    <img
                      alt="bob"
                      className="object-contain"
                      data-nimg="1"
                      decoding="async"
                      height="500"
                      loading="lazy"
                      src={slideshow2}
                      style={{
                        color: "transparent",
                      }}
                      width="500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:hidden">
              <div
                className="rfm-marquee-container "
                style={{
                  "--pause-on-click": "running",
                  "--pause-on-hover": "running",
                  "--transform": "none",
                  "--width": "100%",
                }}
              >
                <div
                  className="rfm-marquee"
                  style={{
                    "--delay": "0s",
                    "--direction": "normal",
                    "--duration": "1.74s",
                    "--iteration-count": "infinite",
                    "--min-width": "100%",
                    "--play": "running",
                  }}
                >
                  <div className="rfm-initial-child-container">
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <img
                        alt="bob"
                        className="object-contain"
                        data-nimg="1"
                        decoding="async"
                        height="300"
                        loading="lazy"
                        src={slideshow3}
                        style={{
                          color: "transparent",
                        }}
                        width="300"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="rfm-marquee"
                  style={{
                    "--delay": "0s",
                    "--direction": "normal",
                    "--duration": "1.74s",
                    "--iteration-count": "infinite",
                    "--min-width": "100%",
                    "--play": "running",
                  }}
                >
                  <div
                    className="rfm-child"
                    style={{
                      "--transform": "none",
                    }}
                  >
                    <img
                      alt="bob"
                      className="object-contain"
                      data-nimg="1"
                      decoding="async"
                      height="300"
                      loading="lazy"
                      src={slideshow4}
                      style={{
                        color: "transparent",
                      }}
                      width="300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1500px] mx-auto px-3" id="tokenomics">
            <div className="md:flex gap-0 items-between">
              <div className="lg:w-1/2 relative">
                <div className="lg:w-[700px] lg:h-[468px] h-[300px] w-full relative">
                  <img
                    alt="head"
                    className="w-full relative object-contain object-top"
                    data-nimg="fill"
                    decoding="async"
                    loading="lazy"
                    sizes="100vw"
                    src={slideshow5}
                    style={{
                      color: "transparent",
                      height: "100%",
                      inset: "0px",
                      position: "absolute",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
              <div className="flex lg:flex-row flex-col justify-center lg:mb-20 text-center lg:px-20 px-8 text-black bg-blue-200 py-[45px] md:w-1/2 shadow-lg border-[#000] border">
                <div className="flex justify-between lg:flex-row flex-col-reverse">
                  <div className="lg:text-right text-left lg:mt-5">
                    <h1 className="lg:text-7xl text-4xl mb-4 text-black lg:!leading-[70px] leading-[54px] break-normal font-display">
                      TOKENOMICS
                    </h1>
                    <div className="lg:text-[28px] text-[16px] lg:max-w-none max-w-[320px] lg:mx-auto mt-1 break-all">
                      <p>CA: 0x9d2aD11DF86E18dBb491c721296FC12F22e90463</p>
                      <p>Total Supply: 1,000,000,000</p>
                      <p>Taxes: 0/0</p>
                      <p>LP: BURNT</p>
                      <p>Ownership: renounced</p>
                    </div>
                    <div className="mt-10">
                      <a
                        href="https://pump.fun/EHXKyWxWc9XoLtE9fezMSDpYZKgt6BZbFtBU5A4Q28R7"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <button className="active:top-[2px] whitespace-nowrap uppercase text-black border-2 font-body border-black bg-blue-500 !px-10 lg:hover:opacity-60 transition-all cursor-pointer select-none lg:text-[16px] text-[16px] px-4 lg:py-2 lg:pt-3 py-1 pt-2">
                          BUY $SQUID
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="max-w-[1500px] mx-auto pt-[80px] lg:pt-[20px]" />
            <HowToBuy id="roadmap" title="Roadmap">
              <div className="bg-blue-500 w-full flex flex-col lg:flex-row gap-5 items-center justify-center p-8 lg:p-10">
                <img src="/images/roadmap.png" className="w-[150px]" />
                <div className="flex flex-col">
                  <p className="text-[22px]">
                    Phase 1: Meme <br></br> <br></br>
                    Phase 2: HODL <br></br> <br></br>
                    Phase 3: What color is your Buggatti?
                  </p>
                </div>
              </div>
            </HowToBuy>
            <div className="max-w-[1500px] mx-auto pt-[120px] lg:pt-[150px]" />
            <HowToBuy id="howtobuy" title="How to buy">
              <div className="bg-blue-500 w-full flex flex-col lg:flex-row gap-5 items-center justify-center p-8 lg:p-10">
                <img src="/images/wallet.png" className="w-[150px]" />
                <div className="flex flex-col">
                  <h1 className="text-[32px]">Create a wallet</h1>
                  <p className="text-[22px]">
                  Go to app store or google play and download Phantom or any wallet of your choice. If you're using desktop, go to Phantom.app and download the browser extension.
                  </p>
                </div>
              </div>
              <div className="bg-blue-500 w-full flex flex-col lg:flex-row gap-5 items-center justify-center p-8 lg:p-10">
                <img src="/images/eth.png" className="w-[150px]" />
                <div className="flex flex-col">
                  <h1 className="text-[32px]">Purchase Solana</h1>
                  <p className="text-[22px]">
                    To buy $SQUID you need Solana, you can either buy on Phantom, send from a centralised exchange to your wallet, or send it from another wallet.
                  </p>
                </div>
              </div>
              <div className="bg-blue-500 w-full flex flex-col lg:flex-row gap-5 items-center justify-center p-8 lg:p-10">
                <img src="/images/bg.png" className="w-[150px]" />
                <div className="flex flex-col">
                  <h1 className="text-[32px]">Buy $SQUID from pump.fun</h1>
                  <p className="text-[22px]">
                    Visist pump.fun in google chrome or on the browser inside your Phantom app. Connect your wallet. Paste $SQUID ca into pump.fun, select SQUID, and confirm. When Phantom prompts you for a wallet signature, sign. Once signed, confirm the transaction and HODL.
                  </p>
                </div>
              </div>
            </HowToBuy>
            <div className="flex lg:mt-30 mt-20 justify-center w-full mb-0  shadow-lg border-[#000] border overflow-hidden bg-blue-200">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="relative lg:w-[100%] w-[100%] lg:h-[600px] h-[150px]">
                  <img
                    alt="poster"
                    className="lg:object-cover object-cover object-top border-b-1 border-black"
                    data-nimg="fill"
                    decoding="async"
                    loading="lazy"
                    sizes="100vw"
                    src={squidsvg}
                    style={{
                      color: "transparent",
                      height: "100%",
                      inset: "0px",
                      position: "absolute",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="lg:w-auto w-full lg:mt-0 mt-5 px-5 py-10">
                  <div className="flex lg:flex-row  flex-col gap-4 lg:text-2xl text-2xl font-body">
                    <a
                      className="cursor-pointer bg-blue-500 shadow-lg border-[#000] border lg:p-4 lg:pb-3 p-3 px-5 gap-4 text-black lg:hover:scale-105 flex justify-between"
                      href="https://pump.fun/EHXKyWxWc9XoLtE9fezMSDpYZKgt6BZbFtBU5A4Q28R7"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="lg:mt-0 mt-[5px] text-[12px]">
                        SQUID CHART{" "}
                      </div>
                      <div>
                        <svg
                          className="lucide lucide-chevron-right "
                          fill="none"
                          height="30"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="30"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                    </a>
                    <a
                      className="cursor-pointer bg-blue-500 shadow-lg border-[#000] border lg:p-4 lg:pb-3 p-3 px-5 gap-4 text-black lg:hover:scale-105 flex justify-between"
                      href="https://pump.fun/EHXKyWxWc9XoLtE9fezMSDpYZKgt6BZbFtBU5A4Q28R7"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="lg:mt-0 mt-[5px] text-[12px]">
                        BUY SQUID
                      </div>
                      <div>
                        <svg
                          className="lucide lucide-chevron-right "
                          fill="none"
                          height="30"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="30"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                    </a>
                    <a
                      className="cursor-pointer bg-blue-500 shadow-lg border-[#000] border lg:p-4 lg:pb-3 p-3 px-5 gap-4 text-black lg:hover:scale-105 flex justify-between"
                      href="https://x.com/SquidOfSol"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="lg:mt-0 mt-[5px] text-[12px]">
                        TWITTER
                      </div>
                      <div>
                        <svg
                          className="lucide lucide-chevron-right "
                          fill="none"
                          height="30"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="30"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                    </a>
                    <a
                      className="cursor-pointer bg-blue-500 shadow-lg border-[#000] border lg:p-4 lg:pb-3 p-3 px-5 gap-4 text-black lg:hover:scale-105 flex justify-between"
                      href="https://www.t.me/Squidwardjoinchat"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="lg:mt-0 mt-[5px] text-[12px]">
                        TELEGRAM
                      </div>
                      <div>
                        <svg
                          className="lucide lucide-chevron-right "
                          fill="none"
                          height="30"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="30"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 z-0">
            <div className="z-10 relative">
              <div className="bg-blue-200 text-black font-display tg:ext-xl py-2 border-t-1 border-b-1 border-black italic">
                <div
                  className="rfm-marquee-container "
                  style={{
                    "--pause-on-click": "running",
                    "--pause-on-hover": "running",
                    "--transform": "none",
                    "--width": "100%",
                  }}
                >
                  <div
                    className="rfm-marquee"
                    style={{
                      "--delay": "0s",
                      "--direction": "reverse",
                      "--duration": "13.5053125s",
                      "--iteration-count": "infinite",
                      "--min-width": "100%",
                      "--play": "running",
                    }}
                  >
                    <div className="rfm-initial-child-container">
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rfm-marquee"
                    style={{
                      "--delay": "0s",
                      "--direction": "reverse",
                      "--duration": "13.5053125s",
                      "--iteration-count": "infinite",
                      "--min-width": "100%",
                      "--play": "running",
                    }}
                  >
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-1">
                <div
                  className="rfm-marquee-container "
                  style={{
                    "--pause-on-click": "running",
                    "--pause-on-hover": "running",
                    "--transform": "none",
                    "--width": "100%",
                  }}
                >
                  <div
                    className="rfm-marquee"
                    style={{
                      "--delay": "0s",
                      "--direction": "normal",
                      "--duration": "20s",
                      "--iteration-count": "infinite",
                      "--min-width": "100%",
                      "--play": "running",
                    }}
                  >
                    <div className="rfm-initial-child-container">
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="lg:w-[17vw] lg:h-[17vw] h-[250px] w-[250px] relative">
                          <img
                            alt="tweet"
                            className="object-stretch"
                            src={slideshow1}
                            style={{
                              color: "transparent",
                              height: "100%",
                              inset: "0px",
                              position: "absolute",
                              zIndex: 99999,
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="lg:w-[17vw] lg:h-[17vw] h-[250px] w-[250px] relative">
                          <img
                            alt="tweet"
                            className="object-stretch"
                            src={slideshow2}
                            style={{
                              color: "transparent",
                              height: "100%",
                              inset: "0px",
                              position: "absolute",
                              zIndex: 99999,
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="lg:w-[17vw] lg:h-[17vw] h-[250px] w-[250px] relative">
                          <img
                            alt="tweet"
                            className="object-stretch"
                            data-nimg="fill"
                            decoding="async"
                            loading="lazy"
                            sizes="100vw"
                            src={slideshow3}
                            style={{
                              color: "transparent",
                              height: "100%",
                              inset: "0px",
                              position: "absolute",
                              zIndex: 99999,
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="lg:w-[17vw] lg:h-[17vw] h-[250px] w-[250px] relative">
                          <img
                            alt="tweet"
                            className="object-stretch"
                            data-nimg="fill"
                            decoding="async"
                            loading="lazy"
                            sizes="100vw"
                            src={slideshow4}
                            style={{
                              color: "transparent",
                              height: "100%",
                              inset: "0px",
                              position: "absolute",
                              zIndex: 99999,
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="lg:w-[17vw] lg:h-[17vw] h-[250px] w-[250px] relative">
                          <img
                            alt="tweet"
                            className="object-stretch"
                            data-nimg="fill"
                            decoding="async"
                            loading="lazy"
                            sizes="100vw"
                            src={slideshow5}
                            style={{
                              color: "transparent",
                              height: "100%",
                              inset: "0px",
                              position: "absolute",
                              zIndex: 99999,
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="lg:w-[17vw] lg:h-[17vw] h-[250px] w-[250px] relative">
                          <img
                            alt="tweet"
                            className="object-stretch"
                            data-nimg="fill"
                            decoding="async"
                            loading="lazy"
                            sizes="100vw"
                            src={slideshow6}
                            style={{
                              color: "transparent",
                              height: "100%",
                              inset: "0px",
                              position: "absolute",
                              zIndex: 99999,
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="lg:w-[17vw] lg:h-[17vw] h-[250px] w-[250px] relative">
                          <img
                            alt="tweet"
                            className="object-stretch"
                            data-nimg="fill"
                            decoding="async"
                            loading="lazy"
                            sizes="100vw"
                            src={slideshow7}
                            style={{
                              color: "transparent",
                              height: "100%",
                              inset: "0px",
                              position: "absolute",
                              zIndex: 99999,
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="lg:w-[17vw] lg:h-[17vw] h-[250px] w-[250px] relative">
                          <img
                            alt="tweet"
                            className="object-stretch"
                            data-nimg="fill"
                            decoding="async"
                            loading="lazy"
                            sizes="100vw"
                            src={slideshow8}
                            style={{
                              color: "transparent",
                              height: "100%",
                              inset: "0px",
                              position: "absolute",
                              zIndex: 99999,
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rfm-marquee"
                    style={{
                      "--delay": "0s",
                      "--direction": "normal",
                      "--duration": "20s",
                      "--iteration-count": "infinite",
                      "--min-width": "100%",
                      "--play": "running",
                    }}
                  >
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="lg:w-[17vw] lg:h-[17vw] h-[250px] w-[250px] relative">
                        <img
                          alt="tweet"
                          className="object-stretch"
                          data-nimg="fill"
                          decoding="async"
                          loading="lazy"
                          sizes="100vw"
                          src={BgImage}
                          style={{
                            color: "transparent",
                            height: "100%",
                            inset: "0px",
                            position: "absolute",
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="lg:w-[17vw] lg:h-[17vw] h-[250px] w-[250px] relative">
                        <img
                          alt="tweet"
                          className="object-stretch"
                          data-nimg="fill"
                          decoding="async"
                          loading="lazy"
                          sizes="100vw"
                          src={slideshow1}
                          style={{
                            color: "transparent",
                            height: "100%",
                            inset: "0px",
                            position: "absolute",
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="lg:w-[17vw] lg:h-[17vw] h-[250px] w-[250px] relative">
                        <img
                          alt="tweet"
                          className="object-stretch"
                          data-nimg="fill"
                          decoding="async"
                          loading="lazy"
                          sizes="100vw"
                          src={slideshow2}
                          style={{
                            color: "transparent",
                            height: "100%",
                            inset: "0px",
                            position: "absolute",
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="lg:w-[17vw] lg:h-[17vw] h-[250px] w-[250px] relative">
                        <img
                          alt="tweet"
                          className="object-stretch"
                          data-nimg="fill"
                          decoding="async"
                          loading="lazy"
                          sizes="100vw"
                          src={slideshow3}
                          style={{
                            color: "transparent",
                            height: "100%",
                            inset: "0px",
                            position: "absolute",
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="lg:w-[17vw] lg:h-[17vw] h-[250px] w-[250px] relative">
                        <img
                          alt="tweet"
                          className="object-stretch"
                          data-nimg="fill"
                          decoding="async"
                          loading="lazy"
                          sizes="100vw"
                          src={slideshow4}
                          style={{
                            color: "transparent",
                            height: "100%",
                            inset: "0px",
                            position: "absolute",
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="lg:w-[17vw] lg:h-[17vw] h-[250px] w-[250px] relative">
                        <img
                          alt="tweet"
                          className="object-stretch"
                          data-nimg="fill"
                          decoding="async"
                          loading="lazy"
                          sizes="100vw"
                          src={slideshow5}
                          style={{
                            color: "transparent",
                            height: "100%",
                            inset: "0px",
                            position: "absolute",
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="lg:w-[17vw] lg:h-[17vw] h-[250px] w-[250px] relative">
                        <img
                          alt="tweet"
                          className="object-stretch"
                          data-nimg="fill"
                          decoding="async"
                          loading="lazy"
                          sizes="100vw"
                          src={slideshow6}
                          style={{
                            color: "transparent",
                            height: "100%",
                            inset: "0px",
                            position: "absolute",
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="lg:w-[17vw] lg:h-[17vw] h-[250px] w-[250px] relative">
                        <img
                          alt="tweet"
                          className="object-stretch"
                          data-nimg="fill"
                          decoding="async"
                          loading="lazy"
                          sizes="100vw"
                          src={slideshow7}
                          style={{
                            color: "transparent",
                            height: "100%",
                            inset: "0px",
                            position: "absolute",
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-200 text-black font-display tg:ext-xl py-2 border-t-1 border-b-1 border-black italic">
                <div
                  className="rfm-marquee-container "
                  style={{
                    "--pause-on-click": "running",
                    "--pause-on-hover": "running",
                    "--transform": "none",
                    "--width": "100%",
                  }}
                >
                  <div
                    className="rfm-marquee"
                    style={{
                      "--delay": "0s",
                      "--direction": "reverse",
                      "--duration": "13.5053125s",
                      "--iteration-count": "infinite",
                      "--min-width": "100%",
                      "--play": "running",
                    }}
                  >
                    <div className="rfm-initial-child-container">
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                      <div
                        className="rfm-child"
                        style={{
                          "--transform": "none",
                        }}
                      >
                        <div className="mr-2">SQUID</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rfm-marquee"
                    style={{
                      "--delay": "0s",
                      "--direction": "reverse",
                      "--duration": "13.5053125s",
                      "--iteration-count": "infinite",
                      "--min-width": "100%",
                      "--play": "running",
                    }}
                  >
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                    <div
                      className="rfm-child"
                      style={{
                        "--transform": "none",
                      }}
                    >
                      <div className="mr-2">SQUID</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "70vh",
              }}
            >
              <div
                className="text-black lg:text-[30px] text-[40px] font-display"
                style={{ textAlign: "center" }}
              >
                Disclaimers
              </div>

              <div class="text-black lg:text-[15px] text-[16px] lg:leading-[30px] leading-[28px] text-center px-4 lg:px-8">
                <p>
                  $SQUID coin has no association with Stephen Hillenburg or
                  his creation SQUID the Octopus. This token is simply
                  paying homage to a meme we all love and recognize.
                  <br></br>
                  <br></br>
                  $SQUID is a meme coin with no intrinsic value or
                  expectation of financial return. There is no formal team or
                  roadmap. the coin is completely useless and for entertainment
                  purposes only.
                </p>
              </div>

              <footer class="w-full text-center text-xs absolute bottom-0 pb-2">
                © 2024 by SQUID. All rights reserved! <br></br> mail: chad@theSQUID.com
              </footer>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
