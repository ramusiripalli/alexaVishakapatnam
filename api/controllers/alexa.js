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
      
    var day0weather = result[0].forecast[0].skycodeday;
    var day0weather1 = result[0].forecast[0].skytextday;
    console.log("todays weather " + day0weather);
    var day1weather = result[0].forecast[1].skycodeday;
    var day1weather1 = result[0].forecast[1].skytextday;
    console.log("tomorrows weather " + day1weather);
    var day2weather = result[0].forecast[2].skycodeday;
    var day2weather2 = result[0].forecast[2].skytextday;
    console.log("third day weather " + day2weather);
    var day3weather = result[0].forecast[3].skycodeday;
    var day3weather3 = result[0].forecast[3].skytextday;
    console.log("fourth day weather " + day3weather);
    var day4weather = result[0].forecast[4].skycodeday;
    var day4weather4 = result[0].forecast[4].skytextday;
    console.log("fifth day weather " + day4weather);
    response.redirectionUrl = "http://ramusiripalli.xyz";
    response.mainText = "Hello from weather. Todays weather in Vishakapatnam is expected to be " + day0weather + " Degree Celsius "+ day0weather1 +". Tomorrows weather in vishakapatnam is Expected to be " + day1weather + " Degree Celsius "+ day1weather1 + ". Third day weather in Vishakapatnam is expected to  be " + day2weather + " Degree Celsius "+ day2weather2 +" . Fourth day weather in vishakapatnam will be " + day3weather + " Degree Celsius "+ day3weather3 + ". Fifth day weather in vishakapatnam will be " + day4weather+ " Degree Celsius "+ day4weather4;
    res.json(response);
    }
   
  });
}
