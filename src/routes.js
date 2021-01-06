const express = require('express');

const BillController = require('./controllers/billController');

const routes = express.Router();

routes.get('/bill', BillController.index);
routes.get('/billbydatevalue', BillController.indexDateValues);
routes.get('/billbydate', BillController.indexBillDate);
routes.get('/billbyId/:id', BillController.indexBillById);
routes.post('/bill', BillController.create);

module.exports = routes;