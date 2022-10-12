import React from "react";

const AsSeen = () => {
  return (
    <>
      <div className="container-fluid asseen-fluid py-5">
        <div className="container">
          <h3 className="text-center pb-3 fw-bold">As Seen on</h3>
          <div className="row">
            <div className="col-md-3">
              <img className="img-fluid" src="assets/yahooo.png" alt=""   width={200} />
            </div>

            <div className="col-md-3">
              <img className="img-fluid" src="assets/logo-bloomberg.svg" alt=""   width={200} />
            </div>

            <div className="col-md-3">
              <img className="img-fluid" src="assets/logo-benzinga.webp" alt=""   width={200} />
            </div>

            <div className="col-md-3">
              <img className="img-fluid" src="assets/news-btc.png" alt=""   width={200} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsSeen;
