const request = require('supertest'); // библиотека для тестирования HTTP-запросов

// Пример теста для вашего Express-приложения
describe('API Tests', () => {
  let server;

  beforeAll(() => {
    // Импортируйте и запускайте сервер, например, Express
    server = require('server'); // предполагаем, что ваш сервер находится в файле app.js
  });

  afterAll(() => {
    server.close();
  });

  test('should return status 200 for the root endpoint', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
  });

  test('should return message "Hello World!"', async () => {
    const response = await request(server).get('/');
    expect(response.text).toBe('Hello World!');
  });

  // Пример теста на POST запрос
  test('should create a new resource', async () => {
    const response = await request(server)
      .post('/resource')
      .send({ name: 'New Resource' })
      .expect('Content-Type', /json/)
      .expect(201);
    expect(response.body.name).toBe('New Resource');
  });
});
