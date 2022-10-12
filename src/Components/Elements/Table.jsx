import React from "react";
import {BsCheckLg} from 'react-icons/bs'
import {ImCross} from 'react-icons/im'
const Table = () => {
  return (
    <>
      <div className="container-fluid py-5 table-fluid">
        <div className="container">
          <h1 className="text-center">Comparison Table</h1>
          <p className="text-center">
            We are building whole ecosystem tools for future identities and
            data.
          </p>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"><img className="img-fluid mb-2" src="assets/uniswap.png" alt="" width={150} /></th>
                <th scope="col"><img className="img-fluid mb-2" src="assets/pancakeswap.png" alt="" width={150} /></th>
                <th scope="col"><img className="img-fluid mb-2" src="assets/logo.png" alt="" width={150} /></th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd">
                <th scope="row">Automated Market Maker</th>
                <td><BsCheckLg className="check"/></td>
                <td><BsCheckLg className="check"/></td>
                <td><BsCheckLg className="check"/></td>
              </tr>
              <tr className="even">
                <th scope="row">Spot Trading</th>
                <td><BsCheckLg className="check"/></td>
                <td><BsCheckLg className="check"/></td>
                <td><BsCheckLg className="check"/></td>
              </tr>
              <tr className="odd">
                <th scope="row">Futures Trading</th>
                <td colSpan={2}><ImCross className="cross"/></td>
                <td><BsCheckLg className="check"/></td>
              </tr>
              <tr className="even">
                <th scope="row">Governance</th>
                <td><BsCheckLg className="check"/></td>
                <td><BsCheckLg className="check"/></td>
                <td><BsCheckLg className="check"/></td>
              </tr>
              <tr className="odd">
                <th scope="row">Leveraged Trading</th>
                <td><ImCross className="cross"/></td>
                <td><ImCross className="cross"/></td>
                <td><BsCheckLg className="check"/></td>
              </tr>
              <tr className="even">
                <th scope="row">Gas Fees</th>
                <td colSpan={2} className="text-danger fw-bold">$71.53</td>
                <td className="text-success fw-bold">$0.42</td>
              </tr>
              <tr className="odd">
                <th scope="row">Inflationary</th>
                <td><ImCross className="cross"/></td>
                <td><ImCross className="cross"/></td>
                <td><BsCheckLg className="check"/></td>
              </tr>
              <tr className="even">
                <th scope="row">Deflationary</th>
                <td><ImCross className="cross"/></td>
                <td><ImCross className="cross"/></td>
                <td><BsCheckLg className="check"/></td>
              </tr>
              <tr className="odd">
                <th scope="row">Fixed Supply</th>
                <td colSpan={2}><ImCross className="cross"/></td>
                <td><BsCheckLg className="check"/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
