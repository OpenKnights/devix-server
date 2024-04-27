/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  roots: ['<rootDir>/test'],
  clearMocks: true,
  coverageProvider: 'babel',
  extensionsToTreatAsEsm: ['.ts'],
  preset: 'ts-jest',
  collectCoverageFrom: [
    'test/*.{js,jsx, tsx, ts}' // 所有 js/ts/jsx/tsx
  ]
}

export default config
