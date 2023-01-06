<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>make-executable</h1>
  <a href="https://npmjs.com/package/make-executable">
    <img alt="npm" src="https://img.shields.io/npm/v/make-executable.svg">
  </a>
  <a href="https://github.com/bconnorwhite/make-executable">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/make-executable.svg">
  </a>
  <a href='https://coveralls.io/github/bconnorwhite/make-executable?branch=master'>
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/make-executable.svg?branch=master">
  </a>
  <img alt="Platform: Universal" src="https://img.shields.io/badge/Universal-%233178C6?logo=javascript&logoColor=white" />
</div>

<br />

<blockquote align="center">Set the executable bits on a file.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/make-executable">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/make-executable?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter Follow" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## Installation

<details open>
  <summary>
    <img  src="https://img.shields.io/badge/yarn-2C8EBB?logo=yarn&logoColor=white" alt="Yarn" />
  </summary>

```sh
yarn add make-executable
```

</details>
<details open>
  <summary>
    <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white" alt="NPM" />
  </summary>

```sh
npm install make-executable
```

</details>
<details open>
  <summary>
    <img src="https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white" alt="PNPM" />
  </summary>

```sh
pnpm add make-executable
```

</details>

## API

```ts
import { makeExecutable, makeExecutableSync } from "make-executable";

function makeExecutable(path: string): Promise<boolean | undefined>;

function makeExecutableSync(path: string): boolean | undefined;
```

<!--BEGIN FOOTER-->

<br />

<h2>Dev Dependencies</h2>

- [@types/mock-fs](https://www.npmjs.com/package/@types/mock-fs): TypeScript definitions for mock-fs
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js
- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.
- [mock-fs](https://www.npmjs.com/package/mock-fs): A configurable mock file system.  You know, for testing.


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/make-executable.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _The MIT License_
<!--END FOOTER-->

<br />

## Related Packages

- [fs-safe](https://www.npmjs.com/package/fs-safe): A simple fs wrapper that doesn't throw
- [read-file-safe](https://www.npmjs.com/package/read-file-safe): Read files without try catch
- [write-file-safe](https://www.npmjs.com/package/write-file-safe): Write files, and parent directories if necessary
- [remove-file-safe](https://www.npmjs.com/package/remove-file-safe): Remove a file without try catch
- [watch-file-safe](https://www.npmjs.com/package/watch-file-safe): Watch a file for changes
