var express = require('express');
var router = express.Router();
var db = require('../service/db');

//** PUBLIC **//
router.get('/', (req, res, next) => {
  res.send('OK');
});

router.get('/categories', (req, res, next) => {
  res.send(db.readCategories());
});

router.get('/categories/:id', (req, res, next) => {
  res.send(db.readCategory(parseInt(req.params.id)));
});

router.get('/products', (req, res, next) => {
  res.send(db.readProducts());
});

router.get('/products/:id', (req, res, next) => {
  res.send(db.readProduct(parseInt(req.params.id)));
});

router.post('/products/search', (req, res, next) => {
  res.send('OK');
});

//** PRIVATE **//
router.put('/private/categories', (req, res, next) => {
    res.send(db.createCategory(req.body));
});

router.post('/private/categories', (req, res, next) => {
    res.send(db.updateCategory(req.body));
});

router.delete('/private/categories/:id', (req, res, next) => {
    res.send(db.deleteCategory(parseInt(req.params.id)));
});

router.put('/private/products', (req, res, next) => {
    res.send(db.createProduct(req.body));
});

router.post('/private/products', (req, res, next) => {
    res.send(db.updateProduct(req.body));
});

router.delete('/private/products/:id', (req, res, next) => {
    res.send(db.deleteProduct(parseInt(req.params.id)));
});

module.exports = router;
