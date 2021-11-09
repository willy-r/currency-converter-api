# Currency Converter API

## Desafio

Desenvolva uma **REST API** que faça conversão de moedas.

**Especifícações**:

* A URL da requisição deve seguir o seguinte formato:
  * http://localhost:8000/exchange/{amount}/{from}/{to}/{rate}
  * http://localhost:8000/exchange/10/BRL/USD/4.50

* A resposta deve seguir o seguinte formato:
  ```json
  {
    "valorConvertido": 45,
    "simboloMoeda": "$"
  }
  ```

* Conversões:
  * De Real para Dólar: **BRL -> USD**
  * De Dólar para Real: **USD -> BRL**
  * De Real para Euro: **BRL -> EUR**
  * De Euro para Real: **EUR > BRL**
