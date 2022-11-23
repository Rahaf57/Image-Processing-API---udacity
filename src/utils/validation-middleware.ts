import express from 'express';

const images: string[] = [
  'image_one',
  'image_two',
  'image_three',
  'image_foure',
  'image_five',
];

const check = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const image_name: string = req.query.image_name as string;
  const width: string = req.query.width as string;
  const height: string = req.query.height as string;

  if (!image_name || !width || !height)
    return res.status(400).send('Please provide image_name, width and height');
  else if (!images.includes(image_name))
    return res.status(404).send(' Image Not Found!');

  next();
};

export default check;
