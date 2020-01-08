const express = require('express');
const app = express();
const newsRoute = express.Router();
let News = require('../News');

// Get Top 3 news
newsRoute.get('/',async (req,res) => {
  try{
  let news = await News.find().sort({date: -1}).limit(3)
  res.json(news);
  } catch(err){
    console.error(err)
    res.status(500).json(err)
  }
})

module.exports = newsRoute;