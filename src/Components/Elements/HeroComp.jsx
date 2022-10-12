import React from 'react'
import {IoIosRocket} from 'react-icons/io'
import AsSeen from './AsSeen'
const HeroComp = () => {
  return (
    < >
     <div className="container-fluid hero-fluid">
            <div className="container">
                <div className="row" >
                    <div className="col-md-6 py-5">
                        <h1 className='py-3'>Decentralized Spot and <br/> Futures Trading on BSC</h1>
                        <p className='py-2'>Automated market maker powered, taking De-Fi game to the next level. Make instant spot exchange, leveraged trades, provide liquidity to earn returns and rewards.</p>
                        <button className='btn btn-warning'>Spot Trading Platform Launched <IoIosRocket className='rocket-icon'/> </button>
                        <hr/>
                        <button className='btn btn-danger'>Earn PSWAP</button>
                        <button className='btn btn-danger ms-1'>Trade on PCS</button>
                        <button className='btn btn-danger ms-1'>Goverance</button>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src="assets/porkswap-pink.png" alt="" />
                    </div>

                </div>
            </div>
     </div>
     <AsSeen/>
    </>
  )
}

export default HeroComp
