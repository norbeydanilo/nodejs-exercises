const Logger = require('./logger.js');

const dbLogger = new Logger('DB');
dbLogger.info(`This is an information message`);
const accessLogger = new Logger('ACCESS');
accessLogger.verbose(`This is a verbose message`);