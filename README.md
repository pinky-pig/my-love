![20231019092355](https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20231019092355.png)

## Features

1. P5.js 页面背景颜色填充
2. View Transition API 路由页面过渡
3. Dom.getAnimations() 多个动画相接
4. GSAP 鼠标拖尾
5. GSAP 抛物线 SVG 路径运动
6. GSAP 鼠标移动视差

## points

1. 父组件调用子组件的方法和变量 `useImperativeHandle`

2. view transition api 在路由跳转的时候，不能使用懒加载，只能 import ，否则不生效。。。

3. 从 dataV 上通过地址遍历获 Geo JSON 数据本地测试可以，部署之后阿里云那边服务器 403 forbidden

4. 页面移动视差，其实很简单，就是鼠标当前的坐标 `x || y` ，分别相对于中间的偏差 `window.innerWidth / 2 || window.innerHeight / 2` ，这个偏差再乘以一个系数，这样就构成了鼠标移动的时候的页面视差。

![20231010164443](https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20231010164443.png)
