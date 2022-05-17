import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World Testing');
});

app.use('/popular', require('./src/routes'));

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}.`);
});

export default app;
