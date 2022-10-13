import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiFillMediumSquare } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid footer-fluid">
        <div className="container">
          <div className="row pb-3">
            <div className="col-md-6 col-sm-12">
              <Link to="/">
                <div>
                  <img
                    className="quant"
                    src="assets/logo.png"
                    alt=" Logo "
                    width={150}
                  />
                  <div>
                    <p className="Footer-p">
                      Decentralized Spot and Futures Trading on Binance
                      Smart Chain
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-sm-12 footer-col2">
              <div className="d-flex nav-links">
                <Link className="nav-link" aria-current="page" to="/home">
                <AiFillMediumSquare className="footer-icons" />
              </Link>
              <Link className="nav-link ms-3" to="/about">
                <BsTwitter className="footer-icons" />
              </Link>
              <Link className="nav-link ms-3" to="/about">
                <BsFacebook className="footer-icons" />
              </Link>
              <Link className="nav-link ms-3" to="/about">
                <BsYoutube className="footer-icons" />
              </Link>
              <Link className="nav-link ms-3" to="/about">
                <RiSendPlaneFill className="footer-icons" />
              </Link>
              </div>
              <div className="Footer-link-div">
              <Link className="Footer-link" href="">
                exchange@porkswap.finance
              </Link>
              </div>  
            </div>
          </div>
          <hr className="line-horizontal" />
          <div className="row">
              <div className="col-md-12">
                <p className="text-center text-white">
                  Copyright © 2022 PorkSwap.finance
                </p>
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
