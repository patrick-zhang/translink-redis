const errorHandler = require('../errorHandler');

jest.mock('../../services/logger');

describe('errorHandler', () => {
  it('response error', () => {
    const error = {
      message: 'error',
    };
    const req = {};
    const res = {
      status: jest.fn(() => {
        return {
          json: jest.fn(),
        };
      }),
    };
    errorHandler(error, req, res, null);
    expect(res.status).toHaveBeenCalledWith(500);
  });
});
