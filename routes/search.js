const express = require('express');
const router = express.Router();
const https = require('https');
const fetch = require('node-fetch');
//const axios = require('axios');
const NewsAPI = require('newsapi');

/* search with search term. */
router.post('/', function(req, res, next) {
  const newsapi = new NewsAPI('cb871d49889e4c599b212fe278503dd3');
  
  newsapi.v2.everything({
    q: req.body.searchTerm,
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk, techcrunch.com',
    from: '2021-5-10',
    to: '2021-5-30',
    language: 'en',
    sortBy: 'relevancy',
    page: 1
  }).then(response => {
   res.json(response);
  }).catch(err=>console.log('ERROR',err));
});

module.exports = router;
