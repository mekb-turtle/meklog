const { Logger, LogLevel } = require(".");
let log = new Logger(false);
for (let i in LogLevel) {
	log(LogLevel[i], "Hello World!");
}
log = new Logger(true);
for (let i in LogLevel) {
	log(LogLevel[i], "Hello World! - production");
}
log = new Logger(false, "Prefix");
for (let i in LogLevel) {
	log(LogLevel[i], "Hello World! - with prefix");
}
