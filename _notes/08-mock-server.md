# 第8章 后端 Mock 环境
简介 前后端分离开发和 mock server 的概念，然后学习怎样使用 JSON server 快速搭建一个 mock server，并且学会使用 Postman 测试接口。

共 4 节 (36分钟) 收起列表

## 8-1 前后端分离开发概念 (07:42)
## 8-2 使用 json-server 打造 mock server (08:16)
```
  npm i json-server -D
```
Add script
```
  "start2": "concurrently \"react-scripts start\" \"npm run mock\"",
  "mock": "json-server --watch db.json --port 3004"
```

Add proxy in package.json
```
"proxy": "http://localhost:3004"
```

## 8-3 分析和创建 Restful 接口 (06:31)

## 8-4 使用 Postman 测试 API (12:39)