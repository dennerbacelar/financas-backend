const express = require('express');

const BillController = require('./controllers/billController');

const routes = express.Router();

routes.get('/bill', BillController.index);
routes.post('/bill', BillController.create);
routes.delete('/bill/:id', BillController.delete);
routes.get('/billbydatevalue', BillController.indexDateValues);
routes.get('/billbydate', BillController.indexBillDate);
routes.get('/billbyId/:id', BillController.indexBillById);

module.exports = routes;