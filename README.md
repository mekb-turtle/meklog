<div align="center">
    <h2 align="center">meklog</h2>
    <h3 align="center">Node.js logging library</h3>
    <p>Inspired by <a href="https://github.com/CallMeEchoCodes/simpllog">Simpllog</a></p>
    <img alt="Stars" src="https://img.shields.io/github/stars/mekb-turtle/log?display_name=tag&style=for-the-badge" />
</div>

### Usage
`npm i meklog`
```js
const { Logger, LogLevel } = require("./log")
const log = new Logger(production: boolean, prefix: string);
log(LogLevel.Info, "Hello, World!");
```
