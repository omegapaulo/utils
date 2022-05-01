import devLogger from './dev-logger.js';
import prodLogger from './prod-logger.js';

let chooseEnv = null;

const logger = (labelInfo) => {
  if (process.env.NODE_ENV === 'development') {
    chooseEnv = devLogger(labelInfo);
  }

  if (process.env.NODE_ENV === 'production') {
    chooseEnv = prodLogger(labelInfo);
  }

  return chooseEnv;
};

export default logger;
