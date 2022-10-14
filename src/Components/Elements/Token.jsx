import React from "react";

const Token = () => {
  return (
    <>
      <div className="container-fluid py-5 token-fluid">
        <div className="container">
          <h1 className="pb-5 text-center">
            Token <span className="text-danger">Distribution</span>
          </h1>
          <div className="col-md-6 m-auto pb-5">
            <div className="token-sale__graph">
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 col-12 text-center">
                  <div data-aos="fade-down" className="fade-main">
                    <h5 className="fs-22">
                      <strong>50%</strong>
                    </h5>
                    <span className="token-span">
                      <strong >Liquidity Rewards (Locked)</strong>
                    </span>
                  </div>
                </div>
                <div className="col-md-4"></div>
              </div>
              <div className="row mb-5">
                <div className="col-md-2"></div>
                <div className="col-md-3 col-12 ">
                  <h5 className="fs-22">
                    <strong>10%</strong>
                  </h5>
                  <span className="token-span">
                    <strong>Liquidity</strong>
                  </span>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3 col-12 text-center">
                  <h5 className="fs-22">
                    <strong>10%</strong>
                  </h5>
                  <span className="token-span">
                    <strong>Team-locked</strong>
                  </span>
                </div>
                <div className="col-md-1"></div>
              </div>
              <div className="row">
                {/* <div className="col-md-1"></div> */}
                <div className="col-md-4 col-12">
                  <h5 class="fs-22">
                    <strong>10%</strong>
                  </h5>
                  <span className="token-span">
                    <strong>Growth Hacking</strong>
                  </span>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4 col-12 text-end">
                  <h5 class="fs-22">
                    <strong>20%</strong>
                  </h5>
                  <span className="token-span">
                    <strong>Public Sale</strong>
                  </span>
                </div>
                {/* <div className="col-md-1"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Token;
