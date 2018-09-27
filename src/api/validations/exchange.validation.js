const Joi = require('joi');


module.exports = {

  // GET /v1/exchange
  exchangeRate: {
    query: {
      currency:  Joi.string(),
    },
  },


};
