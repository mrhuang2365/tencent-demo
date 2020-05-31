# tencent-demo

> 1. 活动核心主要为：抽奖、中奖、存储、和动画展示
> 2. 技术采用vue框架，其他：es6类、requestAnimationFrame、 css3 animation

### 目录结构
```
|-src
  |--assets           静态资源
  |--components       组件
  |--js               
    |--draw.js        抽奖管理类（负责初始化、抽奖、中奖、存储等功能）
  |--ui-extend        第三方ui引用
  |--util             公用工具
  |--App.vue          
  |--main.js

```
## 本地运行

``` bash
# install dependencies
npm install

# 开发模式： 访问 localhost:8080
npm run dev

```
## 发布运行
``` bash
# 打包
npm run build

# 项目运行 
node server.js
# 访问 localhost:3000
```

