import express from 'express';
import cors from 'cors';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/info', (req, res) => {
  console.log('Testlog');
  res.send({action: 'info', version: '1.0.0'});
});

app.listen(PORT);
console.log(`Running on  http://${HOST}:${PORT}`);