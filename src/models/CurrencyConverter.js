class CurrencyConverter {
  BRLtoUSD(amount, rate, res) {
    if (!isNaN(amount) && !isNaN(rate)) {
      res.status(200).json({
        valorConvertido: rate * amount,
        simboloMoeda: '$',
      });
    } else {
      res.status(400).json({
        erro: true,
        msg: 'Os valores para conversão precisam ser números válidos',
      });
    }
  }
}

module.exports = new CurrencyConverter;
