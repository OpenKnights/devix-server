import { createTestServer } from '../src/test'

let server: any
const routes = [
  {
    url: '/testGet',
    method: 'get',
    handler: async (ctx: any, next: any) => {
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
  expect.assertions(1)

  // receive response before timeout
  let response = await fetch(prefix('/testGet'))
  .then((res) => res.json())


  expect(response.data).toEqual('/testGet')

})
