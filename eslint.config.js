import antfu from '@antfu/eslint-config'
// eslint-disable-next-line antfu/no-import-dist
import { createESLintConfig } from './dist/esm/index.js'

export default antfu(createESLintConfig({ vue: false }))
