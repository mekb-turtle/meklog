<div align="center">
    <h2 align="center">Node.js logging library</h2>
    <p>Inspired by <a href="https://github.com/CallMeEchoCodes/simpllog">Simpllog</a></p>
    <img alt="Stars" src="https://img.shields.io/github/stars/mekb-turtle/log?display_name=tag&style=for-the-badge" />
</div>

### Usage
Submodule the repository:\
`git submodule add https://github.com/mekb-turtle/log`
```js
const { Logger, LogLevel } = require("./log")
const log = new Logger(production: boolean, prefix: string);
log(LogLevel.Info, "Hello, World!");
```
