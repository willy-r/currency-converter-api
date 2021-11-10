const express = require('express');
const consign = require('consign');

module.exports = () => {
  const app = express();
  
  // Routes to the currency converter.
  consign().include('./src/controllers').into(app);

  return app;
}
