const winston = require("winston");
const { combine, timestamp, prettyPrint } = winston.format;

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp({
            format: "MMM-DD-YYYY HH:mm:ss"
        }),
        prettyPrint()
    ),
    transports: [
        new winston.transports.File({
            filename: 'error.log',
            format: winston.format.simple(), // veya istediğiniz başka bir format
            level: 'error'
        }),]
});

module.exports = logger;