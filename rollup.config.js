import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import typescript from 'rollup-plugin-typescript2'

const entries = ['src/index.ts']
const plugins = [typescript(), esbuild()]

const rollupConfig = [
  ...entries.map((input) => ({
    input,
    output: [
      {
        file: input.replace('src/', 'dist/').replace('.ts', '.esm.js'),
        format: 'es'
      },
      {
        file: input.replace('src/', 'dist/').replace('.ts', '.cjs.js'),
        format: 'cjs'
      }
    ],
    plugins
  })),
  ...entries.map((input) => ({
    input,
    output: [
      {
        file: input.replace('src/', './').replace('.ts', '.d.ts'),
        format: 'esm'
      }
    ],
    plugins: [dts({ respectExternal: true })]
  }))
]

export default rollupConfig
