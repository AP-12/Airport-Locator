import React, { useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import "./Search.css";
import imag from "../image/3386851.jpg";
const Search = () => {
  const { state } = useLocation();
  const navigate=useNavigate();
  const Airport_id = state.id;
  const Airport_lat = state.lat;
  const Airport_long = state.long;
  console.log({ Airport_id });
  console.log({ Airport_lat });
  console.log({ Airport_long });
  

  useEffect(() => {
    if (1) {
      const ifameData = document.getElementById("iframeid");
      ifameData.src = `https://maps.google.com/maps?q=${Airport_lat},${Airport_long}&h1=es;&output=embed`;
    }
  }, [Airport_lat, Airport_long]);


  function handleData(){
    navigate("/");
  }
  return (
    <>
      {" "}
      <div
        style={{
          backgroundImage: `url(${imag})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="map">
          <iframe id="iframeid" height="500px" width="100%"></iframe>
        </div>
        <h1 className="det">{state.deta}</h1>
        <table className="t">
          <tr>
            <th>CityName</th>
            <td>{state.ci}</td>
          </tr>
          <br />
          <tr>
            <th>CityCode</th>
            <td>{state.co}</td>
          </tr>
          <br />
          <tr>
            <th>CountryName</th>
            <td>{state.cu}</td>
          </tr>
          <br />
          <tr>
            <th>CountryCode</th>
            <td>{state.cuo}</td>
          </tr>
          <br />
          <tr>
            <th>IataCode</th>
            <td>{state.Ia}</td>
          </tr>
        </table>
        <button className="b"onClick={ (e)=>handleData()}>Home</button>
        
      </div>
    </>
  );
};

export default Search;
