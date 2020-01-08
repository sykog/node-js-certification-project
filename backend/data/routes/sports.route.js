const fetch = require('node-fetch');
const express = require('express');
const app = express();
const sportsRoute = express.Router();
let url = "http://ergast.com/api/f1/2004/1/results.json";



sportsRoute.get('/get-sports',async (req,res) => {
    try{
    const array = [];
    sports = await fetch(url);
    const json = await sports.json();
    const adjustedUrl = json.MRData.RaceTable.Races[0].Results;
    for(let i = 0; i <= 2; i++){
        array.push(adjustedUrl[i]);
    }
    res.json(array);
   
    } catch(err){
      console.error(err)
      res.status(500).json(err)
    }
  });
  
  module.exports = sportsRoute;
