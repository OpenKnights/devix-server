# devix-server

> Devix-server 是一个用于开发和服务相关的工具库。（ 简体中文 | [English](README.md) ）

## 安装

请确保您在 Node.js 环境下使用 npm 或其他包管理器安装此库。

```shell
npm install --save-dev devix-server
```

然后，利用现代的模块捆绑工具，如 Vite 或 Webpack，以模块化的语法引入此库。

```javascript
// 使用 ES Module
import { [[ModuleName]] } from 'devix-server'

// 使用 CommonJS
const { [[ModuleName]]  } = require('devix-server')
```

## 使用

```javascript
import { createTestServer } from 'devix-server'

const routes = [
  {
    url: '/testGet',
    method: 'get',
    handler: async (ctx, next) => {
      ctx.body = {
        code: 200,
        data: {},
        message: `POST 接口测试: /testPost`
      }
    }
  }
]

// 使用 createTestServer
let server = await createTestServer({ routes })
const prefix = (api) => `${server.url}${api}`
console.log(`createTestServer url:`, server.url)

fetch(prefix('/testGet'))
  .then((res) => res.json())
  .then((res) => {
    console.log(`res:`, res)
  })

setTimeout(() => {
  server.close()
}, 10000)
```

## 方法

### createTestServer

可以根据路由轻松配置一个简单的 Koa 测试服务器
