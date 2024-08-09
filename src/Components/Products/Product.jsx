import React, { useEffect, useState } from "react";
import Style from "./index.module.css";
import { IoIosWarning } from "react-icons/io";
import { MdError } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const [ProductData, setProductData] = useState([]);
  const [ProductMargin, setProductMargin] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [count, setCount] = useState(Array(ProductData.length).fill(0));

  console.log(categoryData)

  useEffect(() => {
    if (ProductData.length > 0) {
      setCount(Array(ProductData.length).fill(0));
    }
  }, [ProductData]);

  const navigate = useNavigate();

  const name = localStorage.getItem("Manufacturer_Name");

  const GetTableDataProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/products?manufacturer_name=${name}`
      );
      const data = response.data;
          // Group products by category
          const groupedByCategory = data.reduce((acc, product) => {
            const category = product.Category__c || 'No Category';
            if (!acc[category]) {
              acc[category] = [];
            }
            acc[category].push(product);
            return acc;
          }, {});

      setProductData(response.data);
      setCategoryData(Object.entries(groupedByCategory));
    } catch (error) {
      console.log(error);
    }
  };

  const GetProductMargin = async () => {
    try {
      const name_manu = localStorage.getItem("Manufacturer_Name");
      const id = localStorage.getItem("AccountId");
      const response = await axios.get(
        `http://localhost:5000/product-margin?manufacturerName=${name_manu}&Account_Id=${id}`
      );
      //  console.log(response.data[0].Margin__c)
      setProductMargin(response.data[0].Margin__c);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetTableDataProducts();
    GetProductMargin();
  }, []);

  const increment = (index) => {
    setCount((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? count + 1 : count))
    );
  };

  const decrement = (index) => {
    setCount((prevCounts) =>
      prevCounts.map((count, i) =>
        i === index && count > 0 ? count - 1 : count
      )
    );
  };

  const PreviousButton = () => {
    navigate("/");
  };

  const NextButton = () => {
    navigate("/Orderprocess");
  };

  return (
    <div className="">
      <div className="container mt-5">
        <img src="https://beautyfashionsales.my.site.com/resource/1663582945000/headerLogo" />
      </div>

      <div className="container-fluid">
        <div className={Style.header}>
          <div className="row">
            <div className="col-lg-4">
              <p className={Style.main_text}>{name}</p>
            </div>

            <div className="col-lg-8 d-flex">
              <input
                type="text"
                // className="form-control"
                className={`form-control ${Style.main_text1}`}
                placeholder="Search Account"
                style={{ width: "40%" }}
              />

              <button
                type="button"
                className={` ${Style.button_show}`}
                onClick={PreviousButton}
              >
                Back
              </button>
              <button
                type="button"
                className={` ${Style.button_show11}`}
                onClick={NextButton}
              >
                Next
              </button>
              <button type="button" className={` ${Style.button_show22}`}>
                Download Order Form
              </button>
            </div>
          </div>
        </div>

        {/* <div className={Style.header1}>
          <div className="d-flex">
            <IoIosWarning size={26} className={Style.iconss} />
            <p className={Style.texticon}>Warning! Minimum Order Amount $100</p>
          </div>
        </div> */}

        <div className={Style.header2}>
          <div className="d-flex">
            <MdError size={22} className={Style.iconss1} />
            <p className={Style.texticon1}>
              For this manufacturer you have {ProductMargin}% discount for the
              price!
            </p>
          </div>
        </div>

        {/* tables */}

        <div className="mt-2">
          <hr></hr>
          <table class="table mt-0">
            <thead>
              <tr>
                <th
                  className={Style.headerth}
                  scope="col"
                  style={{ color: "rgb(105,105,105)", fontWeight: "500" }}
                ></th>

                <th
                  className={Style.headerth}
                  scope="col"
                  style={{ color: "rgb(105,105,105)", fontWeight: "500" }}
                >
                  Product Code
                </th>
                <th
                  className={Style.headerth}
                  scope="col"
                  style={{ color: "rgb(105,105,105)", fontWeight: "500" }}
                >
                  Product UPC
                </th>
                <th
                  className={Style.headerth}
                  scope="col"
                  style={{ color: "rgb(105,105,105)", fontWeight: "500" }}
                >
                  Name
                </th>
                <th
                  className={Style.headerth}
                  scope="col"
                  style={{ color: "rgb(105,105,105)", fontWeight: "500" }}
                >
                  Product Image
                </th>
                <th
                  className={Style.headerth}
                  scope="col"
                  style={{ color: "rgb(105,105,105)", fontWeight: "500" }}
                >
                  List Price
                </th>
                <th
                  className={Style.headerth}
                  scope="col"
                  style={{ color: "rgb(105,105,105)", fontWeight: "500" }}
                >
                  Sales Price
                </th>
                <th
                  className={Style.headerth}
                  scope="col"
                  style={{ color: "rgb(105,105,105)", fontWeight: "500" }}
                >
                  Min QTY
                </th>
                <th
                  className={Style.headerth}
                  scope="col"
                  style={{ color: "rgb(105,105,105)", fontWeight: "500" }}
                >
                  Quantity
                </th>
              </tr>
            </thead>
{/* 
            <tbody>
              {ProductData.map((maindata, i) => (
                <React.Fragment key={i}>
                  <tr>
                    <td
                      colSpan="9"
                      style={{
                        fontSize: "17px",
                        fontWeight: "500",
                        backgroundColor: "rgb(244,244,244)",
                        textAlign: "center",
                      }}
                    >
                      {maindata.Category__c
                        ? maindata.Category__c
                        : "No Category"}
                    </td>
                  </tr>

                  <tr>
                    <td>{i + 1}</td>
                    <td>{maindata.ProductCode}</td>
                    <td>{maindata.ProductUPC__c}</td>
                    <td>{maindata.Name}</td>
                    <td>No Image!</td>
                    <td>${maindata.ListPrice}</td>
                    <td>${(maindata.ListPrice * ProductMargin) / 100}</td>
                    <td>{maindata.Min_Order_QTY__c}</td>
                    <td>
                      <div style={{ textAlign: "center", display: "flex" }}>
                        <button
                          type="button"
                          className={Style.button_showwwInc}
                          onClick={() => increment(i)}
                        >
                          +
                        </button>
                        <p className={Style.countt}>{count[i]}</p>
                        <button
                          type="button"
                          className={Style.button_showwwDec}
                          onClick={() => decrement(i)}
                        >
                          -
                        </button>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody> */}

<tbody>
        {categoryData.map(([category, products], categoryIndex) => (
          <React.Fragment key={categoryIndex}>
            <tr>
              <td
                colSpan="9"
                style={{
                  fontSize: '17px',
                  fontWeight: '500',
                  backgroundColor: 'rgb(244,244,244)',
                  textAlign: 'center',
                }}
              >
                {category}
              </td>
            </tr>
            {products.map((product, productIndex) => (
              <tr key={productIndex}>
                <td>{productIndex + 1}</td>
                <td>{product.ProductCode}</td>
                <td>{product.ProductUPC__c}</td>
                <td>{product.Name}</td>
                <td>No Image!</td>
                <td>${product.ListPrice}</td>
                <td>${(product.ListPrice * ProductMargin) / 100}</td>
                <td>{product.Min_Order_QTY__c}</td>
                <td>
                  <div style={{ textAlign: 'center', display: 'flex' }}>
                    <button
                      type="button"
                      className={Style.button_showwwInc}
                      onClick={() => increment(productIndex)}
                    >
                      +
                    </button>
                    <p className={Style.countt}>{count[productIndex]}</p>
                    <button
                      type="button"
                      className={Style.button_showwwDec}
                      onClick={() => decrement(productIndex)}
                    >
                      -
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
          </table>
        </div>

        {/* footer  */}
        <div className={Style.header}>
          <div className="row">
            <div className="col-lg-10"></div>

            <div className="col-lg-2 d-flex">
              <button
                type="button"
                className={` ${Style.button_showww}`}
                onClick={PreviousButton}
              >
                Back
              </button>
              <button
                type="button"
                className={` ${Style.button_showww1}`}
                onClick={NextButton}
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <br />
      </div>
    </div>
  );
}

export default Product;
