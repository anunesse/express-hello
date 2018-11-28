var express = require('express');
var router = express.Router();
var db = require('../service/db');

router.get('/', (req, res, next) => {
  res.send('OK');
});

router.get('/categories', (req, res, next) => {
  res.send(db.readCategories());
});

router.get('/categories/:id', (req, res, next) => {
  res.send(db.readCategories(parseInt(req.params.id)));
});

router.get('/products', (req, res, next) => {
  res.send(db.readProducts());
});

router.get('/products/:id', (req, res, next) => {
  res.send(db.readProducts(parseInt(req.params.id)));
});

router.post('/products/search', (req, res, next) => {
  res.send('OK');
});

module.exports = router;
