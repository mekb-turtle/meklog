const { Logger, LogLevel } = require(".");
let i, log = new Logger(false);
for (i in LogLevel) {
	log(LogLevel[i], "Hello World!");
}
log = new Logger(log);
for (i in LogLevel) {
	log(LogLevel[i], "Hello World! - same settings from log function");
}
log = new Logger(log.data);
for (i in LogLevel) {
	log(LogLevel[i], "Hello World! - same settings from data");
}
log = new Logger(true);
for (i in LogLevel) {
	log(LogLevel[i], "Hello World! - production");
}
log = new Logger(false, "Prefix");
for (i in LogLevel) {
	log(LogLevel[i], "Hello World! - with prefix");
}
