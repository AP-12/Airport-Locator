const express=require("express");
const axios=require("axios");
const cors= require("cors");
require("./db");
 const Data=require("./Schema");
 require('dotenv').config();

const app=express();
app.use(cors());
 const apiKey=process.env.API_KEY;
 const apiSecret=process.env.API_SECRET;
const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
  
      const accessToken = response.data.access_token;
     // console.log("ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt",accessToken);
      const Airportresponse = await axios.get(
        `https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT&keyword=airport`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
        }
      );

   

      const res = Airportresponse.data.data;
      // console.log(res);
        
       await Data.deleteMany();
       
     console.log(await Data.insertMany(res));
       
    }

catch(error){
 console.log(error);
}
};
fetchData();
app.get('/Data',async(req,res)=>{
    const data=await Data.find({}).lean();
    //console.log("########",data);
    res.json(data);
})

app.listen(4000,()=>{
    console.log("server started");
})