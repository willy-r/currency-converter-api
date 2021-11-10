const CurrencyConverter = require('../models/CurrencyConverter');

function CurrencyConverterController(app) {
  /**
   * Request example:
   *   http://localhost:8000/exchange/10/BRL/USD/4.50
   */
  app.get('/exchange/:amount/:from/:to/:rate', (req, res) => {
    const params = {
      amount: parseFloat(req.params.amount),
      rate: parseFloat(req.params.rate),
      from: req.params.from.toUpperCase(),
      to: req.params.to.toUpperCase(),
    };
    
    CurrencyConverter.convert(params, res);
  });
}

module.exports = CurrencyConverterController;
