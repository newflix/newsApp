const express = require('express');
const router = express.Router();
const https = require('https');
const fetch = require('node-fetch');
//const axios = require('axios');
const NewsAPI = require('newsapi');

/* GET home page. */
router.get('/', function(req, res, next) {
  const newsapi = new NewsAPI('cb871d49889e4c599b212fe278503dd3');
 //get top headlines
  newsapi.v2.topHeadlines({
    language: 'en',
    country: 'gb'
  }).then(response => {
    res.send(response.articles);
  }).catch((err)=>{
    console.log('ERRROR:',err)
  });
});

module.exports = router;
