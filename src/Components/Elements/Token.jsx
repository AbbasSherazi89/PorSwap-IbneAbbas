import React from 'react'

const Token = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <h1 className="pb-5 text-center">
            Token <span className="text-danger">Distribution</span>
          </h1>
        
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-2"><h5 className='text-center fw-bold'>50%<br/>Liquidity Rewards<br/>(Locked)</h5></div>
            <div className="col-md-5"></div>
          </div>
          <div className="row token">
            <div className="col-md-3"></div>
            <div className="col-md-2"><h5 className='text-center fw-bold'>10%<br/>Liquidity</h5></div>
            <div className="col-md-2"></div>
            <div className="col-md-2"><h5 className='text-center fw-bold'>510%<br/>Team - locked</h5></div>
            <div className="col-md-3"></div>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-2"><h5 className='text-center fw-bold'>10%<br/>Growth Hacking</h5></div>
            <div className="col-md-6"></div>
            <div className="col-md-2"><h5 className='text-center fw-bold'>20%<br/>Public Sale</h5></div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Token
