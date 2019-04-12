import request from '../utils/request'

export function UserLogin(loginObj) { 
  return request({
    url: '/users/login?',
    method: 'post',
    data: {
      'name': loginObj.name,
      'psw': loginObj.psw,
      'verification': loginObj.verification
    }
  });
}