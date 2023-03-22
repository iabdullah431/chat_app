import axios from './util/axios';

const Auth = {
  login: user => {
    localStorage.setItem('user', JSON.stringify(user));
    axios.defaults.headers.common['Authorization'] = user.token;
  },
};

export default Auth;
