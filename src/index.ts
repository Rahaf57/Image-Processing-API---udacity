import express from 'express';
import imageRouter from './routes/images';
import check from './utils/validation-middleware';

const myapp = express();
const port = 3000;

const publicPath = __dirname.replace('src', 'public');
myapp.use(express.static(publicPath));

myapp.use('/resize', check, imageRouter);

myapp.use('/public', express.static('public'));

myapp.listen(port, () => {
  console.log('SERVER IS RUN');
});
export default myapp;
