import request from 'supertest';
import app from '../src/index';

describe('Image API', () => {
  //GET success scenario
  test('GET /images should return a list of images', async () => {
    const response = await request(app).get('/images');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  //PUT success scenario for thumbsUp
  test('PUT /thumbs-up/:id should increment thumbsUP ', async () => {
    const imageId = 1;
    const response = await request(app).put(`/thumbs-up/${imageId}`);
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.thumbsUp).toBeDefined();
  });

  //PUT success scenario for thumbsDown
  test('PUT /thumbs-down/:id should increment thumbsDown', async () => {
    const imageId = 1;
    const response = await request(app).put(`/thumbs-down/${imageId}`);
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.thumbsDown).toBeDefined();
  });

  //PUT Image not found scenario for thumbsUp
  test('PUT /thumbs-up/:id should return not found', async () => {
    const imageId = 13;
    const response = await request(app).put(`/thumbs-up/${imageId}`);
    expect(response.status).toBe(404);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Image not found');
  });

    //PUT Image not found scenario for thumbsDown
    test('PUT /thumbs-down/:id should return not found', async () => {
      const imageId = 13;
      const response = await request(app).put(`/thumbs-down/${imageId}`);
      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('Image not found');
    });
});