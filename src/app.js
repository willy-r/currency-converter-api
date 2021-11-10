const customExpress = require('./config/customExpress');

const app = customExpress();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
