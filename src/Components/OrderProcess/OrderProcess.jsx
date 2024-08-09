import React from "react";
import Style from "./index.module.css";

function OrderProcess(props) {
  return (
    <div>
      <div className="container mt-5">
        <img src="https://beautyfashionsales.my.site.com/resource/1663582945000/headerLogo" />
      </div>

      <div className="container-fluid">
        <div className={Style.main}>
          <div className="row">
            <div className="col-lg-9">
              <p className={`text-center ${Style.textmain} `}>
                Please review your order carefully once you hit submit order we
                can not make any modification to your order.
              </p>
            </div>
            <div className="col-lg-3 mt-2">
              <button type="button" className={` ${Style.button_show}`}>
                Submit Order
              </button>
              <button type="button" className={` ${Style.button_show}`}>
                Back
              </button>
              <button type="button" className={` ${Style.button_show}`}>
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* center div  */}
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div className={Style.maincenter}>
              <p className={Style.textmain2}>Order</p>

              <div className="container">
                <div class="form-group">
                  <label for="exampleInputEmail1" className={Style.maintext5}>
                    PO Number
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group mt-2">
                  <label for="exampleInputEmail1" className={Style.maintext5}>
                    Close Date
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group mt-2">
                  <label for="exampleInputEmail1" className={Style.maintext5}>
                    Account
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group mt-2">
                  <label for="exampleInputEmail1" className={Style.maintext5}>
                    Shipping Street
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group mt-2">
                  <label for="exampleInputEmail1" className={Style.maintext5}>
                    Shipping City
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group mt-2">
                  <label for="exampleInputEmail1" className={Style.maintext5}>
                    Shipping State
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group mt-2">
                  <label for="exampleInputEmail1" className={Style.maintext5}>
                    Shipping Zip
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group mt-2">
                  <label for="exampleInputEmail1" className={Style.maintext5}>
                    Shipping Country
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group mt-2">
                  <label for="exampleTextarea" className={Style.maintext5}>
                    Additional Information
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleTextarea"
                    aria-describedby="emailHelp"
                    placeholder="Enter details"
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
                <br/>
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>

        {/* last table  */}
        <br />
        <div className={`container-fluid ${Style.main23}`}>
          <p className={Style.lasttext}>Your Cart</p>

          <div className="">
          <hr className={Style.liness}></hr>
            <table class="table">
              <thead>
            
                <tr>
                <th className={Style.headerth} scope="col" style={{color:"rgb(105,105,105)",fontWeight:"300"}}></th>
                <th className={Style.headerth} scope="col" style={{color:"rgb(105,105,105)", fontWeight:"500"}}>Product Code</th>
                <th className={Style.headerth} scope="col" style={{color:"rgb(105,105,105)",fontWeight:"500"}} >Product UPC</th>
                <th className={Style.headerth} scope="col" style={{color:"rgb(105,105,105)", fontWeight:"500"}}>Name</th>
                <th className={Style.headerth} scope="col" style={{color:"rgb(105,105,105)", fontWeight:"500"}}>Product Image</th>
                <th className={Style.headerth} scope="col" style={{color:"rgb(105,105,105)", fontWeight:"500"}}>List Price</th>
                <th className={Style.headerth} scope="col" style={{color:"rgb(105,105,105)", fontWeight:"500"}}>Sales Price</th>
                <th className={Style.headerth} scope="col" style={{color:"rgb(105,105,105)", fontWeight:"500"}}>Quantity</th>
                <th className={Style.headerth}  scope="col" style={{color:"rgb(105,105,105)", fontWeight:"500"}}>Total Price</th>
                </tr>
             
              </thead>
              {/* <div className={Style.tableetr} >
              <p className={`text-end ${Style.textmini}`}>Total : $196.00</p>  
                </div> */}
              

              <tbody>
                <tr>
                <td colspan="9" style={{fontSize:"17px", fontWeight:"500", backgroundColor:"rgb(244,244,244)", textAlign:"center"}} >
                Products
                </td>
             
        
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="">3</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr> 
           
               
              </tbody>
            </table>
            <div className={Style.tableetr}>
              <p className={`text-end ${Style.textmini}`}>Total : $196.00</p>  
                </div>
          </div>
        </div>

        {/* FOOTER  */}


        <div className={Style.main}>
          <div className="row">
            <div className="col-lg-9">
              <p className={`text-center ${Style.textmain} `}>
                Please review your order carefully once you hit submit order we
                can not make any modification to your order.
              </p>
            </div>
            <div className="col-lg-3 mt-2">
              <button type="button" className={` ${Style.button_show}`}>
                Submit Order
              </button>
              <button type="button" className={` ${Style.button_show}`}>
                Back
              </button>
              <button type="button" className={` ${Style.button_show}`}>
                Cancel
              </button>
            </div>
          </div>
        </div>






        <br />
      </div>
    </div>
  );
}

export default OrderProcess;
