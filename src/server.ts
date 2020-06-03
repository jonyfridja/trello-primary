import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('short'));

app.get('/', (req, res) => {
  res.send('hw');
});


const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log('Listening on PORT: ', PORT);
})





