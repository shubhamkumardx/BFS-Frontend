import React, { useEffect, useState } from "react";
import axios from "axios";
import Style from "./Home.module.css";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const [AccountData, setAccountData] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState();
  const [ManufacturerData, setManufacturerData] = useState([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState();
  const [selectedManufacturerName, setSelectedManufacturerName] = useState();
  const [Data, setData] = useState([])


  //  console.log(selectedManufacturer)





  const navigate = useNavigate();

  const GetAccountList = async () => {
    try {
      const response = await axios.get("http://localhost:5000/accounts");
      setAccountData(response.data);
      const MainData = response.data.map((account) => ({
        id: account.Id,
        name: account.Name,
        ownerId: account.OwnerId,
        manufacturers: account.Manufacturers_Names__c ? account.Manufacturers_Names__c.split(';').filter(name => name) : []

      }));
      setData(MainData)
      
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    GetAccountList();
  }, []);

  const accountNames = Data.map((account) => account.name);
 
 

  const handleAccountChange = (event, value) => {
    const account = Data.find((acc) => acc.name === value);
    localStorage.setItem("AccountId",(account.id));
    if (account) {
      setSelectedAccount(account.OwnerId);
      setSelectedManufacturerName(account.manufacturers)
    }
  };

  const handleManufactChange = (event, value) => {
    localStorage.setItem("Manufacturer_Name", value);

  };

  useEffect(() => {
    if (selectedAccount) {
      const GetManufactureList = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/manufacturers/${selectedAccount}`
          );
          setManufacturerData(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      GetManufactureList();
    }
  }, [selectedAccount]);

  const ManufacturerNames = ManufacturerData.map((account) => account.Name);
  const options = ["Wholesale Numbers", "Pre Order"];

  const handleProductClick = () => {
    
    navigate("/product");
  };

  return (
    <div className="container">
      <div className=" mt-5">
        <img src="https://beautyfashionsales.my.site.com/resource/1663582945000/headerLogo" />
      </div>

      <div className={Style.main}>
        <p className={Style.heading}>Account</p>
        <Autocomplete
          options={accountNames}
          onChange={handleAccountChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Account"
              variant="outlined"
              sx={{ height: 40 }}
            />
          )}
          // onChange={handleAccountChange}

          sx={{
            width: 330,
            ".MuiAutocomplete-inputRoot": {
              height: 50, // Adjust the height of the Autocomplete input
            },
            ".MuiAutocomplete-listbox": {
              maxHeight: 100, // Adjust the height of the dropdown menu
            },
          }}
        />

        <p className="mt-3">Manufacturer</p>
        <Autocomplete
          // options={ManufacturerNames}
          options={selectedManufacturerName}
        onChange={handleManufactChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Manufacturer"
              variant="outlined"
              sx={{ height: 40 }}
            />
          )}
          sx={{
            width: 330,
            ".MuiAutocomplete-inputRoot": {
              height: 50, // Adjust the height of the Autocomplete input
            },
            ".MuiAutocomplete-listbox": {
              maxHeight: 100, // Adjust the height of the dropdown menu
            },
          }}
        />

        <p className="mt-3">Order Type</p>
        <Autocomplete
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Order Type"
              variant="outlined"
              sx={{ height: 40 }}
            />
          )}
          sx={{
            width: 330,
            ".MuiAutocomplete-inputRoot": {
              height: 50, // Adjust the height of the Autocomplete input
            },
            ".MuiAutocomplete-listbox": {
              maxHeight: 100, // Adjust the height of the dropdown menu
            },
          }}
        />
      </div>

      <button
        type="button"
        className={` ${Style.button_show}`}
        onClick={handleProductClick}
      >
        Show Products
      </button>
    </div>
  );
}

export default Home;
