import { setUser } from '../lib/functions';

describe('Should connected to API', () => {
  test('setUser returns "ok"', async () => {
    const pwd = '123456Aa';
    const confirmPwd = '123456Aa';
    const hint = 'texto para ayudar a recordar';

    const result = await setUser(pwd, confirmPwd, hint);

    expect(result).toBe('ok');
  });

  test('setUser returns "ko" its fails', async () => {
    const pwd = 'pruebaKO123';
    const confirmPwd = 'pruebaKO123';
    const hint = 'texto para ayudar a recordar';

    const result = await setUser(pwd, confirmPwd, hint);

    expect(result).toBe('ko');
  });
});
