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
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                <img
                className="img-fluid"
                src="assets/u3.png"
                alt="f1"
                width={80}
              />
              <p>
                While other spot platform tokens mint 750,000 tokens per day,
                we're aiming to burn 10% everyday through the revenue generated
                from the platform. Increasing the value of token over 30X within
                a year.
              </p>
                </div>
                <div className="col-md-3">
                <img
                className="img-fluid"
                src="assets/u3.png"
                alt="f1"
                width={80}
              />
              <p>
                While other spot platform tokens mint 750,000 tokens per day,
                we're aiming to burn 10% everyday through the revenue generated
                from the platform. Increasing the value of token over 30X within
                a year.
              </p>
                </div>
                <div className="col-md-3">
                <img
                className="img-fluid"
                src="assets/u3.png"
                alt="f1"
                width={80}
              />
              <p>
                While other spot platform tokens mint 750,000 tokens per day,
                we're aiming to burn 10% everyday through the revenue generated
                from the platform. Increasing the value of token over 30X within
                a year.
              </p>
                </div>
                <div className="col-md-1"></div>
            </div>
            </div>
        </div>
    </>
  )
}

export default PlatformInterface
