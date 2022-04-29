import devLogger from './dev-logger';
import prodLogger from './prod-logger';

let logger = null;

if (process.env.NODE_ENV === 'development') {
  logger = devLogger();
}

if (process.env.NODE_ENV === 'production') {
  logger = prodLogger();
}

export default logger;
