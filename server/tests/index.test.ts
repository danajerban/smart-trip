const request = require('supertest');
import app from '../app';

describe('Sanity test', () => {
  test('1 should equal 1', () => {
    expect(1).toBe(1);
  });
});

describe('Not found endpoint', () => {
  test('should return "Route not found" for any URL other than /openai/chat', async () => {
    const urlsToTest = ['/', '/openai', '/openai/chatroom', '/api', '/users'];

    for (const url of urlsToTest) {
      const res = await request(app).get(url);
      expect(res.status).toEqual(404);
      expect(res.text).toEqual('Route not found');
    }
  });
});

describe('OpenAI chat endpoint', () => {
  test('should return 200 if request is valid', async () => {
    await request(app)
      .post('/openai/chat')
      .set('Content-Type', 'application/json')
      .send({ message: 'are you going to take over the world?' })
      .expect(200);
  });

  test('should return 400 if request is not JSON', async () => {
    await request(app)
      .post('/openai/chat')
      .send('are you going to take over the world?')
      .expect(400);
  });

  test('should return 400 if request if there is no message property', async () => {
    await request(app)
      .post('/openai/chat')
      .set('Content-Type', 'application/json')
      .send({ messages: 'are you going to take over the world?' })
      .expect(400);
  });
});
