export interface ITestServer {
  http?: any
  callback: () => any
  close?: () => void
  port?: number
  url?: string
  listen: () => Promise<any> | any
  use?: any
}

export interface ITestServerOption {
  url: string
  method: string
  handler: (ctx: any, next: any) => any
}

export interface ITestServerOptions {
  routes?: Array<ITestServerOption>
}
