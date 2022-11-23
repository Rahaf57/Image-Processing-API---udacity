import sharp from 'sharp';
import cache from 'memory-cache';

const resizeImage = async (
  image_name: string,
  width: string,
  height: string
) => {
  const resizedImageName = image_name + '_' + width + '_' + height + '.jpg';

  try {
    await sharp('../images/' + image_name + '.jpg')
      .resize({
        width: parseInt(width),
        height: parseInt(height),
      })
      .toFile('../public/' + resizedImageName);

    cache.put(resizedImageName, resizedImageName);

    return resizedImageName;
  } catch (error) {
    return null;
  }
};
export default resizeImage;
