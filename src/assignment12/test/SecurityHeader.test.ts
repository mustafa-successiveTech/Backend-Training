import request from 'supertest';
import app  from '../../../index';

describe('SecurityHeaders Middleware', () => {
  it('should set security headers on the response', async () => {
    const res = await request(app).get('/test');
    
    expect(res.headers['x-content-type-options']).toBe('nosniff');
    expect(res.headers['x-frame-options']).toBe('DENY');
    expect(res.headers['strict-transport-security']).toContain('max-age');
    expect(res.status).toBe(200);
  });
});