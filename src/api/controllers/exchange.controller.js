const httpStatus = require('http-status');
const {
  omit
} = require('lodash');
const {
  handler: errorHandler
} = require('../middlewares/error');
const request = require('request');



/*
/**
 * Create new user
 * @public
 */
exports.exchangeRate = (req, res, next) => {

  try {
    const currency = "AED_" + req.params.currency || "USD";
    const qnt=req.params.amount;

    console.log(req.params)
    const url = "http://free.currencyconverterapi.com/api/v5/convert?q=" + currency + "&compact=y";

    request
      .get(url)
      .on('response', function (response) {
  

       response.on('data', function (chunk) {
          console.log('BODY: ' + chunk);

          price= JSON.parse(chunk)[currency].val || 0;

          res.status(httpStatus.OK);
          res.json({
            status: 200,
            message: "Success",
            result: {
              exchangePrice: parseFloat(price) * parseFloat(qnt)
            }
          })
        });


      }).on('error', function (err) {
        console.log(err)
      });



  } catch (error) {
    next(error);
  }

};
