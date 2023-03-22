import instance from './util/axiosInstance';

const Auth = {
  login: user => {
    localStorage.setItem('user', JSON.stringify(user));
    instance.defaults.headers.common['Authorization'] = user.token;
  },
};

export default Auth;
