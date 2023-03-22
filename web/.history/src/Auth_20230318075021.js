import axios from './util/axiosInstance';

const Auth = {
  login: user => {
    localStorage.setItem('user', JSON.stringify(user));
    axios.defaults.headers.common['Authorization'] = user.token;
  },
};

export default Auth;
