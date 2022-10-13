import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { IoIosRocket } from "react-icons/io";
import AsSeen from "./AsSeen";
const HeroComp = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  return (
    <>
      <div className="container-fluid hero-fluid position-relative">
        <div className="particles position-absolute">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              fullScreen: {
                enable: false,
                zIndex: 1,
              },
              particles: {
                number: {
                  value: 10,
                  density: {
                    enable: false,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#fff",
                },
                shape: {
                  type: "star",
                  options: {
                    sides: 5,
                  },
                },
                opacity: {
                  value: 0.8,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 4,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                rotate: {
                  value: 0,
                  random: true,
                  direction: "clockwise",
                  animation: {
                    enable: true,
                    speed: 5,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 600,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 2,
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: ["grab"],
                  },
                  onclick: {
                    enable: false,
                    mode: "bubble",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                  },
                  repulse: {
                    distance: 200,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
              background: {
                color: "",
                image: "",
                position: "50% 50%",
                repeat: "no-repeat",
                size: "cover",
              },
            }}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-4 hero-c1">
              <h1 className="py-3">
                Decentralized Spot and Futures Trading on BSC
              </h1>
              <p className="hero-p py-2 ">
                Automated market maker powered, taking De-Fi game to the next
                level. Make instant spot exchange, leveraged trades, provide
                liquidity to earn returns and rewards.
              </p>
              <button className="btn btn-warning shadow">
                Spot Trading Platform Launched{" "}
                <IoIosRocket className="rocket-icon" />{" "}
              </button>
              <hr />
              <div className="dangner-btns row m-auto">
                <a
                  // target="_BLANK"
                  style={{ margin: 0 }}
                  className="btn btn-danger shadow btn-block col"
                  href="https://staking.porkswap.finance/"
                  role="button"
                >
                  Earn PSWAP
                </a>{" "}
                &nbsp;&nbsp;
                <a
                  // target="_BLANK"
                  style={{ margin: 0 }}
                  className="btn btn-danger shadow btn-block col"
                  href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x42539f50c5f8a0c929e7895eb265391f58b22a19"
                  role="button"
                >
                  Trade on PCS
                </a>{" "}
                &nbsp;&nbsp;
                <a
                  // target="_BLANK"
                  style={{ margin: 0 }}
                  className="btn btn-danger shadow btn-block col last-btn"
                  href="https://voting.porkswap.finance/"
                  role="button"
                >
                  Governance
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="assets/porkswap-pink.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <AsSeen />
    </>
  );
};

export default HeroComp;
