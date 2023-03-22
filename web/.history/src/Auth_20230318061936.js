import axios from 'axios';

// تعيين البورت الافتراضي هنا
const DEFAULT_PORT = 3001;

const Auth = {
  login: user => {
    localStorage.setItem('user', JSON.stringify(user));
    // تحديد البورت في هذا المكان
    axios.defaults.baseURL = `http://localhost:${DEFAULT_PORT}/api`;
    axios.defaults.headers.common['Authorization'] = user.token;
  },
};

export default Auth;
