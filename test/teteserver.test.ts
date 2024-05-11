import { createTestServer } from '../src/test'

let server: any
const routes = [
  {
    url: '/testGet',
    method: 'get',
    handler: async (ctx: any) => {
      ctx.body = {
        code: 0,
        data: '/testGet',
        message: `POST 接口测试: /testGet`
      }
    }
  }
]
beforeAll(async () => {
  server = await createTestServer({ routes })
})
afterAll(() => {
  server.close()
})

const prefix = (api: string) => `${server.url}${api}`

test('should be ok when response in time', async () => {
  // receive response before timeout
  const response = await fetch(prefix('/testGet')).then((res) => res.json())

  expect(response.data).toEqual('/testGet')
})
