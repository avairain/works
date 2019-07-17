# 打包
## 需要的node.js
## https://nodejs.org/dist/v10.16.0/node-v10.16.0-x64.msi
## 安装好了之后

## 打开cmd (shift + 右键  选择打开命令行(PowerShell))

## 运行 
```shell
$ npm i
```
## 安装好依赖之后

## 运行 
```shell
 $ npm run build
```
## build 目录下的 ``` app.bundle.js ``` 是目标文件

# ajax以及动态数据
## 这个操作是在打包之前的操作
## ajax在 src/component/ 目录下
### Root.js 里面 login 方法(line22 - line28) 是登陆接口 可以写登陆以及获取链接的ajax，获取的数据 通过 this.setState() 传递给页面

# src/common/js/config.js 是全部是label信息
