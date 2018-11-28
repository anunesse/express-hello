var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('OK');
});

router.get('/categories', (req, res, next) => {
  res.send('OK categories');
});

router.get('/categories/:id', (req, res, next) => {
  res.send('OK');
});

router.get('/products', (req, res, next) => {
  res.send('OK');
});

router.get('/products/:id', (req, res, next) => {
  res.send('OK');
});

router.post('/products/search', (req, res, next) => {
  res.send('OK');
});

module.exports = router;
