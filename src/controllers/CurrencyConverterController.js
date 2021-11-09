const CurrencyConverter = require('../models/CurrencyConverter');

module.exports = (app) => {
  /**
   * Request example:
   *   http://localhost:8000/exchange/10/BRL/USD/4.50
   */
  app.get('/exchange/:amount/:from/:to/:rate', (req, res) => {
    CurrencyConverter.BRLtoUSD();
  });
}
