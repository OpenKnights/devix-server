# devix-server

> Devix-server is a utility library for development and service-related tasks.

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

A test server can be easily configured based on routes.
