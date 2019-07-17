const _local = {
  title: 'GANet Adwhere LINK GENERATOR',
  uName: '用户名',
  logout: ' Log Out',
  loading: 'LOADING',
  login: '登陆',
  loginTitle1: 'GANet',
  loginTitle2: '登陆',
  forgetPassword: '忘记密码',
  GANet: 'GANet',
  infoTitle: '制作您的专属链接',
  copytoast1: '您可以复制代码',
  copytoast2: '直接访问下单',
  selectDomain: '请选择网站',
  website: 'Website',
  sid: 'SID',
  encrypt: 'Encrypt URL',
  copyLink: '复制链接',
  close: '关闭',
  copySuccess: '链接已复制成功!',
  copyError: '链接复制失败,请动一动你发财的小手!'
}

export const local = new Proxy(_local, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver) || '';
  }
})
