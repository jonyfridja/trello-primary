import express from 'express';
import morgan from 'morgan';
import path from 'path';

import { boardGroupRouter } from './api/boardGroup/boardGroup.route';

const app = express();

app.use(morgan('short'));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/api/boardGroups', boardGroupRouter);

app.all('*', (req, res) => {
  res.sendfile(path.resolve(__dirname, 'public', 'index.html'));
});

const { PORT = 3030 } = process.env;
app.listen(PORT, () => {
  console.log('Listening on PORT: ', PORT);
})





