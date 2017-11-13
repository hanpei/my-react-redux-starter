const delay = ms => new Promise(res => setTimeout(res, ms));

export const login = async ({ username, password }) => {
  if (username === 'test' && password === 'test') {
    await delay(1000);
    return {
      code: 0,
      token: 'token_for_test',
      message: '登陆成功',
    };
  }
  return {
    code: -2,
    message: '用户名密码错误',
  };
};

export default login;
