import supertest from 'supertest';
import myapp from '../index';
import resizeImage from '../utils/resizeImage';

const request = supertest(myapp);

describe(' Image Not Found', () => {
  const image_name = 'image_ten';
  const width = '500';
  const height = '500';
  it('Test if Image name is not exsit  ', async () => {
    const response = await request.get(
      `/resize?image_name=${image_name}&width=${width}&height=${height}`
    );
    expect(response.status).toBe(404);
  });
});

describe(' Width test ', () => {
  const image_name = 'image_one';
  const height = '500';

  it('Test if not enter the width ', async () => {
    const response = await request.get(
      `/resize?image_name=${image_name}&width=&height=${height}`
    );
    expect(response.text).toBe('Please provide image_name, width and height');
  });
});

describe(' Height test ', () => {
  const image_name = 'image_one';
  const width = '500';
  it('Test if not enter the height ', async () => {
    const response = await request.get(
      `/resize?image_name=${image_name}&width=${width}&height=`
    );
    expect(response.text).toBe('Please provide image_name, width and height');
  });
});

describe(' Image test ', () => {
  const width = '500';
  const height = '500';
  it('Test if not enter the image name ', async () => {
    const response = await request.get(
      `/resize?image_name=&width=${width}&height=${height}`
    );
    expect(response.text).toBe('Please provide image_name, width and height');
  });
});

describe(' Image and width and height test ', () => {
  it(' Test if not enter the image name and width and height  ', async () => {
    const response = await request.get('/resize');
    expect(response.status).toBe(400);
  });
});

describe('Test Function ', () => {
  it('Testing if Function is true ', () => {
    return expectAsync(resizeImage('image_one', '500', '500')).toBeResolved();
  });
});
