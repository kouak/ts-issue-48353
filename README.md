### Reproduction for TypeScript issue #48353

- https://github.com/microsoft/TypeScript/issues/48353
- Possibly this one : https://github.com/microsoft/TypeScript/issues/43340

### Steps to reproduce

- `git clone`
- `pnpm install`
- Open vscode : `code --disable-extensions .`
- Open `src/index.ts`
- Open TS Server log
- Start typing some code in `src/index.ts`, this triggers the error and breaks autocomplete/autoimport in vscode

### VS code info

Version: 1.77.3
Commit: 704ed70d4fd1c6bd6342c436f1ede30d1cff4710
Date: 2023-04-12T09:16:52.732Z
Electron: 19.1.11
Chromium: 102.0.5005.196
Node.js: 16.14.2
V8: 10.2.154.26-electron.0
OS: Linux x64 6.2.12-arch1-1
Sandboxed: No
