# devix-server

> Devix-server is a utility library for development and service-related tasks.（ English | [简体中文](README_zh.md) ）

> ⚠️ This repository has been archived.
> 
> The project has moved to [better-mock-server](https://github.com/OpenKnights/better-mock-server), where all future updates will be maintained.

## Install

Please make sure you install this library using npm or another package manager in a Node.js environment.

```shell
npm install --save-dev devix-server
```

Then, utilize modern module bundling tools such as Vite or Webpack to import this library using modular syntax.

```javascript
// Using ES Module
import { [[ModuleName]] } from 'devix-server'

// Using CommonJS
const { [[ModuleName]]  } = require('devix-server')
```

## Usage

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

// Using createTestServer
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

## API

### createTestServer

A simple Koa test server can be easily configured based on routes.
