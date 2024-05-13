README
=== 

eslint package for myself



## install
```
npm i eslint-config-shymean
```
## config

edit `eslintrc.js`
```
import antfu from '@antfu/eslint-config'
import { createESLintConfig } from 'eslint-config-shymean'

export default antfu(createESLintConfig())

```

for typescript `tsconfig.json`
```
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "strict": true,
  },
}
```

