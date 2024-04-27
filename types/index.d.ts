//! test types
export interface ITestServer extends Koa {
  http?: any
  callback: () => any
  close?: () => void
  port?: number
  url?: string
  listen: () => Promise<any> | any
  use?: any
}

interface TestServerOption {
  url: string
  method: string
  handler: (ctx: any, next: any) => any
}

export interface ITestServerOptions {
  routes?: Array<TestServerOption>
}
