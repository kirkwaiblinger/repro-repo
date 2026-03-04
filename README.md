# Repro for eslint/rewrite#329

[eslint/rewrite#329](https://github.com/eslint/rewrite/issues/329)

## To repro

1. `npm i`. Double check that you see the files `folder/ignored-by-nested-gitignore.js` and `folder/ignored-by-root-gitignore.js`. This should happen automatically with the `npm prepare` script.
1. Run `npm lint`. Observe that `folder/ignored-by-root-gitignore.js` does not result in any lint reports (good!) but `folder/ignored-by-nested-gitignore.js` does show a lint report (bad!). Have a look at `eslint.config.mjs` and the `.gitignore` files.
