import React from "react";
import Token from "./Token";

const LitePaper = () => {
  return (
    <>
      <div id="litepaper" className="container-fluid litepaper-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-4 cardc text-center p-5">
              <img
                className="img-fluid"
                src="assets/f1.svg"
                alt="f1"
                width={50}
              />
              <h3 className="py-4">Deflationary</h3>
              <p>
                While other spot platform tokens mint 750,000 tokens per day,
                we're aiming to burn 10% everyday through the revenue generated
                from the platform. Increasing the value of token over 30X within
                a year.
              </p>
            </div>
            <div className="col-md-4 cardn text-center p-5">
              <img
                className="img-fluid"
                src="assets/f2.svg"
                alt="f1"
                width={50}
              />
              <h3 className="py-4">Community Governance</h3>
              <p>
                We believe in democratizing access to finance, what else can be
                a better way to give entire power to the community. Create
                custom polls, vote for good ones, bring new ideas to the table,
                change the world for better.
              </p>
            </div>
            <div className="col-md-4 cardc text-center  p-5">
              <img
                className="img-fluid"
                src="assets/f3.svg"
                alt="f1"
                width={50}
              />
              <h3 className="py-4">Future Trading</h3>
              <p>
                Bringing forward the true meaning of De-Fi that's decentralizing
                current financial products, bringing derivatives through futures
                trading so you can increase your returns on profit. Buy long or
                sell short, it's on you.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 cardn text-center  p-5">
              <img
                className="img-fluid"
                src="assets/f6.svg"
                alt="f1"
                width={50}
              />
              <h3 className="py-4">Spot Trading</h3>
              <p>
                Improved automated market maker to provide instant fulfillment
                of orders with less slippage, exchange your favourite tokens
                with 10 times less gas than Ethereum.
              </p>
            </div>
            <div className="col-md-4 cardc text-center  p-5">
              <img
                className="img-fluid"
                src="assets/f4.svg"
                alt="f1"
                width={50}
              />
              <h3 className="py-4">Lottery</h3>
              <p>
                Try your luck by gambling the extra tokens that you made by
                providing liquidity, with a chance to 100X your investment.
              </p>
            </div>
            <div className="col-md-4 cardn text-center  p-5">
              <img
                className="img-fluid"
                src="assets/f5.svg"
                alt="f1"
                width={50}
              />
              <h3 className="py-4">Security</h3>
              <p>
                While other projects are getting DNS hijacked, we ensure the
                security of our platform from DNS all the way to Smart Contract
                are state-of-the-art secured.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row asSeen-row">
            <div className="col-md-3">
              <img
                className="img-fluid mt-4"
                src="assets/cmc-logo.png"
                alt=""
                width={200}
              />
            </div>
            <div className="col-md-3">
              <img
                className="img-fluid mt-4"
                src="assets/cg-logo.webp"
                alt=""
                width={200}
              />
            </div>

            <div className="col-md-3">
              <img
                className="img-fluid mt-4"
                src="assets/hb-logo.png"
                alt=""
                width={200}
              />
            </div>

            <div className="col-md-3">
              <img
                className="img-fluid mt-4"
                src="assets/cb-logo.png"
                alt=""
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="containre-fluid video-fluid py-4">
        <div className="container">
          <h1 className="pb-4 text-center">
            How it <span className="text-danger">Works</span>
          </h1>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10 text-center">
              <div className="ratio ratio-16x9">
                <iframe
                 src="https://www.youtube.com/embed/-V5QjGogoig"
                  title="YouTube video"
                  allowFullScreen
                />
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      </div>
      <Token />
    </>
  );
};

export default LitePaper;
