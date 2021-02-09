# 第5章 组件测试 试看
简介了测试的基本概念，介绍 通用测试工具 Jest 和 React 测试框架 enzyme，然后使用这两种工具完成首页所有展示型组件的测试和首页的集成测试。

共 7 节 (106分钟) 收起列表

## 5-1 为什么要有测试 (07:19)

## 5-2 通用框架 Jest 简介 (10:17)

## 5-3 React 测试工具简介 (14:15)
Enzyme : Render React, Jquery 链式写法
```
  npm i enzyme enzyme-adapter-react-16 -D
```

setupTests.js
```
  import {configure} from 'enzyme'
  import Adapter from 'enzyme-adapter-react-16'

  configure({adapter: new Adapter()})
```

## 5-4 价格题目列表测试分析和编写 (21:22)试看

## 5-5 月份选择器添加测试 (19:37)
Use mount


## 5-6 月份选择器进阶测试 (14:23)
???
## 5-7 首页单元测试分析和编写 (17:56)
???

