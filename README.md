# repro-repo

Repo for storing reproductions of issues/bugs

## eslint#20354

Link: https://github.com/eslint/eslint/issues/20354

This repro is to demonstrate that `files` does impact a configuration, by implicitly adding files to the lint run.

In particular, one cannot assume that adding `{ files: ["**/*.some-file-type"] }` is a safe operation.
Furthermore, this makes it impossible to safely add support to an existing, working config for a new language type (for example JSON), even if the language support is scoped to files with a specific extension, since any _unscoped_ rules already in the configuration will now apply to the new file type.

```js
export default defineConfig(
  // existing configs...

  // Addition of this block may cause rules in the existing configuration to start applying to the new file type, 
  // breaking/crashing if they don't already support that file type.
  {
    files: ["**/*.some-file-type"],
    // language support for *.some-file-type
  }
)
```

## Repro Directions

1. Have a look at eslint.config.mjs
2. `npm i`, `npm run lint`.
3. Play with commenting out the `files` object.
