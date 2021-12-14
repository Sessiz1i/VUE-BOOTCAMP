const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'task-service' },
    transports: [
        new winston.transports.File({ filename: 'v1/src/logs/task/error.log', level: 'error', }),
        new winston.transports.File({ filename: 'v1/src/logs/task/info.log', level: 'info' }),
        new winston.transports.File({ filename: 'v1/src/logs/task/combined.log'}),
        //new winston.transports.Console()
    ],
});
// if (process.env.NODE_ENV !== 'production') {
//     logger.add(new winston.transports.Console({format: winston.format.simple()}));
// }

module.exports = logger