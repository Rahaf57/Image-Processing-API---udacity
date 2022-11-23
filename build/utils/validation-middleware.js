'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const images = [
  'image_one',
  'image_two',
  'image_three',
  'image_foure',
  'image_five',
];
const check = (req, res, next) => {
  const image_name = req.query.image_name;
  const width = req.query.width;
  const height = req.query.height;
  if (!image_name || !width || !height)
    return res.status(400).send('Please provide image_name, width and height');
  else if (!images.includes(image_name))
    return res.status(404).send(' Image Not Found!');
  next();
};
exports.default = check;
