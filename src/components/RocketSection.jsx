import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

function normalize(min, max) {
  var delta = max - min;
  return function (val) {
    return (val - min) / delta;
  };
}

const SQUIDWARD_QUERY = gql`
  query tokens($tokenAddress: Bytes!) {
    tokens(where: { id: $tokenAddress }) {
      derivedETH
      totalLiquidity
    }
  }
`;

const ETH_PRICE_QUERY = gql`
  query ethPrice {
    bundle(id: "1") {
      ethPrice
    }
  }
`;

const RocketSection = () => {
  const TOKEN_ADDRESS = "0x9d2aD11DF86E18dBb491c721296FC12F22e90463";
  const supplyCoin = 420690000000000;
  const min = 0;
  const max = 477710000;

  const { data: ethPriceData } = useQuery(ETH_PRICE_QUERY);
  const { data: squidWardData } = useQuery(SQUIDWARD_QUERY, {
    variables: {
      tokenAddress: TOKEN_ADDRESS.toLowerCase(),
    },
  });

  return (
    <div className="max-w-[1500px] mx-auto lg:px-10 px-5">
      <div className="lg:h-[400px] flex lg:flex-row-reverse flex-col justify-around gap-20 items-center w-full lg:mt-[200px] mt-[50px]">
        <div className="lg:w-1/2">
          <div
            style={{
              opacity: "1",
              transform: "none",
            }}
          >
            <div className="text-black lg:text-[70px] text-[40px] font-display">
              SQUID's Moon Mission
            </div>
            <div className="text-black lg:text-[20px] text-[16px] lg:leading-[30px] leading-[28px]">
              Watch $SQUID's moon mission live on our website. $SQUID's
              moon mission is linked to our market cap and it takes 477,710,000
              steps to reach the moon. Stay with us on this journey until we
              make it till the moon.
            </div>
            <div className="mt-10">
              <a
                href="https://raydium.io/swap/?outputCurrency=GahB1yHTvLjsvEapbiqrMPQPyKNodx9GNBJt53GYet7v"
                rel="noopener noreferrer"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="w-full h-[100vw] max-h-[560px] flex flex-col justify-center items-center">
            <div className="bg-scalebg w-full h-full bg-contain bg-no-repeat bg-center max-w-[350px] relative flex items-center justify-center">
              <div className="h-[94%] top-[4%] w-full flex justify-center absolute">
                <img
                  style={{
                    bottom: `${Math.min(
                      Math.max(
                        normalize(
                          min,
                          max
                        )(
                          squidWardData && ethPriceData
                            ? squidWardData.tokens[0].derivedETH *
                                ethPriceData.bundle.ethPrice *
                                supplyCoin
                            : 0
                        ) *
                          100 -
                          9,
                        -9
                      ),
                      100
                    )}%`,
                  }}
                  className="h-[18%] animation-up-down absolute transition-all duration-500 ease-in-out"
                  src="/images/rocket.gif"
                />
              </div>
            </div>
            <div>
              <br></br>
              Current Market cap: Will show up once migrated to Raydium
              {/* {" "}
              {squidWardData && ethPriceData
                ? "$" +
                  new Intl.NumberFormat().format(
                    squidWardData.tokens[0].derivedETH *
                      ethPriceData.bundle.ethPrice *
                      supplyCoin
                  )
                : "Loading..."} */}
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RocketSection;
