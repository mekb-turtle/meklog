const LogLevel = {
	Debug: {
		name: "Debug",
		color: [ 38, 5, 13 ],
		error: false,
		production: false,
		textColor: null
	},
	Info: {
		name: "Info",
		color: null,
		error: false,
		production: true,
		textColor: null
	},
	Success: {
		name: "Success",
		color: [ 38, 5, 10 ],
		error: false,
		production: true,
		textColor: null
	},
	Warning: {
		name: "Warning",
		color: [ 38, 5, 11 ],
		error: true,
		production: true,
		textColor: [ 38, 5, 11 ]
	},
	Error: {
		name: "Error",
		color: [ 38, 5, 9 ],
		error: true,
		production: true,
		textColor: [ 38, 5, 9 ]
	},
	Fatal: {
		name: "Fatal",
		color: [ 38, 5, 0, 48, 5, 9 ],
		error: true,
		production: true,
		textColor: [ 38, 5, 9 ]
	}
};

const LogLevel_ = Object.freeze(Object.keys(LogLevel).reduce((r, v) => { r[v] = v; return r; }, {}));

function color(colors, text) {
	if (colors == null) return text;
	if (typeof colors != "object") colors = [ 38, 5, colors ];
	return `\x1b[${colors.join(";")}m${text}\x1b[0m`;
}

function bracket(text) {
	return `${color(7, "[")}${text}${color(7, "]")}`;
}

function Logger(production, prefix) {
	if (production != null && arguments.length === 1 && production.data != null && typeof production.data === "object")
		production = production.data;

	if (production != null && typeof production === "object" && arguments.length === 1 && typeof production.production === "boolean")
		({ prefix, production } = production);

	if (typeof production !== "boolean") {
		throw new TypeError("production must be of type boolean");
	}

	if (prefix != null && typeof prefix !== "string") {
		throw new TypeError("prefix must be of type string");
	}

	if (prefix == null || prefix.length == 0) prefix = null;

	const log = function(level, ...messages) {
		if (typeof level !== "string" || !Object.keys(LogLevel).includes(level)) {
			throw new TypeError("type must be a LogLevel");
		}
		for (const i in messages) {
			if (typeof messages[i] !== "string") {
				throw new TypeError("message must be a string");
			}
		}
		const logType = LogLevel[level];
		if (production && !logType.production) return;
		const prefixText = prefix != null ? bracket(prefix) + " " : "";
		const typeText = bracket(color(logType.color, logType.name.toUpperCase()));
		for (const i in messages) {
			const output = `${prefixText}${typeText} ${messages[i]}`;
			console[logType.error ? "error" : "log"](output);
		}
	};

	log.data = Object.freeze({ production, prefix });

	return Object.freeze(log);
}

module.exports = { Logger, LogLevel: LogLevel_ };
