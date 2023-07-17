import React, { useEffect, useState } from "react";

import "./SerachBar.css";
import axios from "axios";

import img from "../image/airport-terminal.jpg";
import {  useNavigate } from "react-router-dom";
const SerachBar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  // const [longitude, setLongitude] = useState("");
  // const [latitude, setLatitude] = useState("");

  const fetchData = async (value) => {
   
      try {
        const response = await axios.get(
          'http://localhost:4000/Data'
        );
  
         console.log(response.data);
  
      const res = response.data;
      //Users can use the filter() method for arrays in JavaScript and not with objects. So, there are alternative methods to filter the object by the keys. Users can use the Object.keys() method to filter the JavaScript objects, use the reduce() function, and accumulate the filtered keys.
      const filteredData = res.filter((item) =>
      item.address.cityName?.toLowerCase().startsWith(value?.toLowerCase())
      );
        
      setData(filteredData);
      console.log(filteredData);
      // if (filteredData.length > 0) {
      //   const { longitude, latitude } = filteredData[0].geoCode;
      //   console.log(longitude);
      //   console.log(latitude);
      //   setLongitude(longitude);
      //   setLatitude(latitude);
      // } else {
      //   setLongitude(" ");
      //   setLatitude(" ");

      // }
    } catch (error) {
      //Users can use the filter() method for arrays in JavaScript and not with objects. So, there are alternative methods to filter the object by the keys. Users can use the Object.keys() method to filter the JavaScript objects, use the reduce() function, and accumulate the filtered keys.

      console.error(error);
    }
  };
  const handleChange = (value) => {
    fetchData(value);
    setInput(value);
  };
  useEffect(() => {
    let clear = setTimeout(() => {
      fetchData();
    }, 800);
    return () => clearTimeout(clear);
  }, []);

  function handleRoute(id, lat, long, ci, co, cu, cuo, deta, Ia) {
    console.log("id", id);
    navigate(`/map/${id}`, {
      state: { id, lat, long, ci, co, cu, cuo, deta, Ia },
    });
  }

  return (
    <>
      <div
        style={{ 
          position:"relative",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          
        }}
      >
       
        <h1 className="A">Search airport Detail by city name</h1>
        <div className="input-wrapper">
          <input
            type="Search"
            placeholder="type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <h4 className="data">For example Istanbul,Manchester,Bethel....</h4>
        <div className="City">
       
          {input.length > 0
            ? data.map((item) => (
                
                <div
                  key={item.id}
                  onClick={(e) =>
                    handleRoute(
                      item.id,
                      item.geoCode.latitude,
                      item.geoCode.longitude,
                      item.address.cityName,
                      item.address.cityCode,
                      item.address.countryName,
                      item.address.countryCode,
                      item.detailedName,
                      item.iataCode
                    )
                  }
                >
                  {<strong>{item.address.cityName}</strong>}
                </div>
              ))
            : null}
        </div>
        
      </div>
     
    </>
  );
};

export default SerachBar;
