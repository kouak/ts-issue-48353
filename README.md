### Reproduction for TypeScript issue #48353

* https://github.com/microsoft/TypeScript/issues/48353
* Possibly this one : https://github.com/microsoft/TypeScript/issues/43340

### Steps to reproduce

* `git clone`
* `pnpm install`
* Open vscode : `code --disable-extensions .`
* Open `src/index.ts`
* Open TS Server log
* Start typing some code in `src/index.ts`, this triggers the error and breaks autocomplete/autoimport in vscode