import * as express from 'express';
import cache from 'memory-cache';
import resizeImage from '../utils/resizeImage';

const imageRouter = express.Router();

imageRouter.get('/', async (req: express.Request, res: express.Response) => {
  const image_name: string = req.query.image_name as string;
  const width: string = req.query.width as string;
  const height: string = req.query.height as string;

  const resizedImageName = image_name + '_' + width + '_' + height + '.jpg';
  const cached = cache.get(resizedImageName);

  let resizedImage;

  if (cached != null) resizedImage = cached;
  else resizedImage = await resizeImage(image_name, width, height);

  if (resizedImage == null)
    return res
      .status(400)
      .send('Image resizing failed, please try again later');

  const html = `<img src="http://localhost:3000/${resizedImage}" >`;

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
  });
  res.write(html);
  res.end();
});

export default imageRouter;
