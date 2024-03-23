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
module.exports = {
  extends: ['shymean'],
}
```

for typescript `tsconfig.json`
```
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "strict": true, // for webstorm
  },
}
```

