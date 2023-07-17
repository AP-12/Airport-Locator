const mongoose=require("mongoose");
const airportSchema = new mongoose.Schema({
    type: String,
    subType: String,
    name: String,
    detailedName: String,
    id: String,
    self: {
      href: String,
      methods: [String]
    },
    timeZoneOffset: String,
    iataCode: String,
    geoCode: {
      latitude: Number,
      longitude: Number
    },
    address: {
      cityName: String,
      cityCode: String,
      countryName: String,
      countryCode: String,
      regionCode: String
    },
    analytics: {
      travelers: Object
    }
  });
  
  const Data = mongoose.model('airport', airportSchema
  );
  module.exports=Data;