'use strict';

var util = require('util');
var moment = require('moment');
var weather1 = require('weather-js');
const uuid = require('uuid');

module.exports = {
  weather
};

function weather(req,res){
var response = {};
response.uid = "urn:uuid:" + uuid.v4();
response.updateDate = new Date();
response.titleText = "Update For Vishakapatnam Weather";


  weather1.find({search: 'Visakhapatnam, Andhra Pradesh', degreeType: 'C'}, function(err, result) {
    if(err) {
      response.mainText = "hello from weather. we are facing technical issue right now. please try again sometime";
      response.redirectionUrl = "http://ramusiripalli.xyz";
      res.json(response);

      console.log(err);}
    else{
      
      var Day0Min = result[0].forecast[0].low;
      var Day0Max = result[0].forecast[0].high;
      var Day0Forecast = result[0].forecast[0].skytextday;

      var Day1Min = result[0].forecast[1].low;
      var Day1Max = result[0].forecast[1].high;
      var Day1Forecast = result[0].forecast[1].skytextday;

      var Day2Min = result[0].forecast[2].low;
      var Day2Max = result[0].forecast[2].high;
      var Day2Forecast = result[0].forecast[2].skytextday;

      var Day3Min = result[0].forecast[3].low;
      var Day3Max = result[0].forecast[3].high;
      var Day3Forecast = result[0].forecast[3].skytextday;

      var Day4Min = result[0].forecast[4].low;
      var Day4Max = result[0].forecast[4].high;
      var Day4Forecast = result[0].forecast[4].skytextday;

     response.redirectionUrl = "http://ramusiripalli.xyz";
     response.mainText = "Hello from weather. Todays minimum weather in Vishakapatnam: "+ Day0Min + " Degree Celsius. The maximum weather is expected to be  "+ 
     Day0Max + " Degree Celsius. The Weather will feel like " + Day0Forecast + 
     ". Tommorow  minimum weather in Vishakapatnam: "+ Day1Min + " Degree Celsius. The maximum weather is expected to be  "+ 
     Day1Max + " Degree Celsius. The Weather will feel like " + Day1Forecast +
     ". Day After Tomorrow  minimum weather in Vishakapatnam: "+ Day2Min + " Degree Celsius. The maximum weather is expected to be  "+ 
     Day2Max + " Degree Celsius. The Weather will feel like " + Day2Forecast +

     ". Day Day after Tomorrow   minimum weather in Vishakapatnam: "+ Day3Min + " Degree Celsius. The maximum weather is expected to be  "+ 
     Day3Max + " Degree Celsius. The Weather will feel like " + Day3Forecast +

     ". Fourth Day  minimum weather in Vishakapatnam: "+ Day4Min + " Degree Celsius. The maximum weather is expected to be  "+ 
     Day4Max + " Degree Celsius. The Weather will feel like " + Day4Forecast + ". Check back in nexthour to get the latest weather."
   

     res.json(response);
    }
   
  });
}
