const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/exchange.controller');
const {
  exchangeRate,
} = require('../../validations/exchange.validation');

const router = express.Router();

router
  .route('/:currency/:amount?')
  /**
   * @api {get} /api/v1/exchange/:currency/:amount     Exchangerate
   * @apiDescription Get a list of users
   * @apiVersion 1.0.0
   * @apiName Exchange Rate
   * @apiGroup Exchnage
   *
   * @apiParam  USD        Currency
   * @apiParam  1      Amount
   *
   */
  .get(controller.exchangeRate);
module.exports = router;
