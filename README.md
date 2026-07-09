# repro-repo

Repo for storing reproductions of issues/bugs

`npm ci && npm test` gives

```text
/[...]/repro-repo/node_modules/typescript-eslint/node_modules/@typescript-eslint/typescript-estree/dist/create-program/shared.js:59
    ts.Extension.Cjs,
                 ^

TypeError: Cannot read properties of undefined (reading 'Cjs')
    at Object.<anonymous> (/[...]/repro-repo/node_modules/typescript-eslint/node_modules/@typescript-eslint/typescript-estree/dist/create-program/shared.js:59:18)
    at Module._compile (node:internal/modules/cjs/loader:1829:14)
    at Object..js (node:internal/modules/cjs/loader:1969:10)
    at Module.load (node:internal/modules/cjs/loader:1552:32)
    at Module._load (node:internal/modules/cjs/loader:1354:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.require (node:internal/modules/cjs/loader:1575:12)
    at require (node:internal/modules/helpers:191:16)
    at Object.<anonymous> (/[...]/repro-repo/node_modules/typescript-eslint/node_modules/@typescript-eslint/typescript-estree/dist/create-program/getWatchProgramsForProjects.js:45:18)
    at Module._compile (node:internal/modules/cjs/loader:1829:14)

Node.js v26.0.0
```