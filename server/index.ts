import app from './app';
const { HOST, PORT } = require('./config.ts');

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
