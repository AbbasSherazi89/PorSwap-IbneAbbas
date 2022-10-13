import React from "react";

const ProductRoadmap = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <h1 className="text-center">
            Product <span className="text-danger">Roadmap</span>
          </h1>
          <div className="row py-5">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <img
                className="img-fluid"
                src="assets/porkswap-timeline.png"
                alt=""
              />
            </div>
            <div className="col-md-2"></div>
          </div>
          <hr />
          <div className="row py-5 mt-5">
            <div className="col-md-6 text-center">
              <img className="img-fluid" src="assets/gov-platform.png" alt="" />
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <h1 className="fw-bold govern-h1">Governance Platform</h1>
                <br />
                <button className="btn btn-warning mb-4">
                  Launched, Start Voting Now
                </button>
                <br />
              </div>
              <div className="lists">
                <h5>You'll be able to vote for:</h5>
                <ul>
                  <li>Change in underlying protocol</li>
                  <li>Change in pricing oracle</li>
                  <li>Change in futures funding rate</li>
                  <li>Change in platform fees</li>
                  <li>Change inlist/de-list tokens</li>
                  <li>Propose new features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductRoadmap;
