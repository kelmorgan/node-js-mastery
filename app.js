
const Logger = require('./logger');
const logger = new Logger();

// Listen to an event
logger.on('messageLogged', (arg) => {
    console.log('Event raised',arg);
});

logger.log('message');







