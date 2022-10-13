import React from 'react'

const PlatformInterface = () => {
  return (
    <>
     <div className="container-fluid platform-fluid py-5">
        <div className="container">
            <h1 className='text-center'>Platform <span className='text-danger'>Interface</span></h1>
            <p className='text-center pb-5'>De-Fi doesn't need to be boring, bringing UX focused interface</p>
            <div className="row">
                <div className="col-md-12 text-center">
                    <img className='img-fluid ' src="assets/porkswap-product.png" alt="" />
                </div>
            </div>
        </div>
        </div> 
        <div className="container-fluid py-5">
            <div className="container">
            <h1 className='text-center'>$PSWAP <span className='text-danger'>Utilities</span></h1>
            <div className="row pi-row">
                <div className="col-md-3 mt-4 ms-4 pi-card">
                <img
                className="img-fluid"
                src="assets/u1.png"
                alt="f1"
                width={80}
              />
              <h5>Governance</h5>
              <p>
              Vote to modify underlying protocol, change in pricing oracle, futures funding rate, platform fees, list/de-list tokens, new features
              </p>
                </div>
                <div className="col-md-3 mt-4 ms-4 pi-card">
                <img
                className="img-fluid"
                src="assets/u2.png"
                alt="f1"
                width={80}
              />
              <h5>Incentives</h5>
              <p>
              Liquidity providers will be incentivized in $PSWAP for their participation in spot and leverage liquidity pools, and LP tokens can be staked for ARR of around 125%.
              </p>
                </div>
                <div className="col-md-3 mt-4 ms-4 pi-card">
                <img
                className="img-fluid"
                src="assets/u3.png"
                alt="f1"
                width={80}
              />
              <h5>Deflation</h5>
              <p>
              With a fixed supply of 1 million tokens, and only 200,000 in circulation, $PSWAP token will increase in value overtime since it'll be scarce and the team will buy back and burn tokens from platform revenue generated through spot and futures trading.
              </p>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default PlatformInterface
