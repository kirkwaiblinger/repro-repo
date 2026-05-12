# Repro For eslint#20865

[eslint/eslint#20865](https://github.com/eslint/eslint/pull/20865)

This repro demonstrates that `eslint.config.js` works fine with ESM syntax even if `"type": "module"` isn't specified, as long as `"type": "commonjs"` isn't specified.

1. `npm i`
1. `npm test`.
1. Observe that the above successfully performed linting, despite the ESM syntax in `eslint.config.js`.
