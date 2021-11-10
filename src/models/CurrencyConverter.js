class CurrencyConverter {
  _simbols = { BRL: 'R$', USD: '$', EUR: '€' };
  _conversions = ['BRL', 'USD', 'EUR'];

  convert(params, res) {
    const errors = this._validateParams(params);

    if (errors.length) {
      res.status(400).json(errors);
    } else {
      res.status(200).json({
        valorConvertido: params.rate * params.amount,
        simboloMoeda: this._simbols[params.to],
      });
    }
  }

  /**
   * to and from params should be one of: 'BRL', 'USD' and 'EUR'.
   * amount and rate params should be >= 0 and be numbers.
   */
  _validateParams(params) {
    const validations = [
      {
        paramName: 'from',
        isValid: this._conversions.includes(params.from),
        errMsg: `Valor passado inválido, precisa ser um dos ${this._conversions.join(', ')}`, 
      },
      {
        paramName: 'to',
        isValid: this._conversions.includes(params.to),
        errMsg: `Valor passado inválido, precisa ser um dos ${this._conversions.join(', ')}`, 
      },
      {
        paramName: 'amount',
        isValid: !isNaN(params.amount) && params.amount >= 0,
        errMsg: `Valor passado inválido, precisa ser um número maior que 0`, 
      },
      {
        paramName: 'rate',
        isValid: !isNaN(params.rate) && params.rate >= 0,
        errMsg: `Valor passado inválido, precisa ser um número maior que 0`, 
      },
    ];

    // Get errors, if any.
    return validations.filter((validationObj) => !validationObj.isValid);
  }
}

module.exports = new CurrencyConverter;
