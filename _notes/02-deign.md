
# 第2章 设计稿：从蓝图开始
从原型图出发，分析整个应用的需求和功能点，最后规定了文件结构和代码规范。

共 2 节 (19分钟) 收起列表

## 2-1 从分析设计稿开始 (07:43)
1. Main page: list, chart

2. Create / Edit

3. Charts


## 2-2 文件代码结构 (10:22)
```
  npx create-react-app account-book
```
Presentational and Container Components

components foler
- 只关心数据的展示方式
- 不依赖其它组件
- 不关心数据变化，仅通过props接收数据和回调函数
- 一般使用functional component

containers foler
- 关心数据如何加载
- 有状态
- 为 Presentational component提供props


