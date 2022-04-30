import devLogger from './dev-logger.js';
import prodLogger from './prod-logger.js';
import 'colors';

let chooseEnv = null;

const logger = (label) => {
  if (process.env.NODE_ENV === 'development') {
    chooseEnv = devLogger(label);
  }

  if (process.env.NODE_ENV === 'production') {
    chooseEnv = prodLogger(label);
  }

  return chooseEnv;
};

export default logger;
