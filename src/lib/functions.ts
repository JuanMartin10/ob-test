import { submitForm } from '../services/api';

const setUser = async (pwd: string, confirmPwd: string, hint: string) => {
  try {
    await submitForm(pwd, confirmPwd, hint);
    return 'ok';
  } catch (error) {
    return 'ko';
  }
};

export { setUser };
