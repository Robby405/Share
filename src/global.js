import {MessageBox } from 'element-ui'


function showMess (message,type) {
  MessageBox({
    confirmButtonText: '确定',
    title:'提示',
    message: message,//message的值只能是string或vnode
    type: type || 'error',
    duration: 5 * 1000
  });
}

export default
{
  showMess
}