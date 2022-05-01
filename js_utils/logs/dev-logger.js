// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const basename = path.basename(__filename);

// In order to use commonjs in a file uncomment the lines bellow:
// import { createRequireFromPath } from 'module';
// const require = createRequireFromPath(__filename);

import { format, transports, createLogger } from 'winston';
const { timestamp, combine, printf, label, errors, colorize } = format;

import 'colors';

const devLogger = (labelInfo) => {
  const logFormat = printf(({ level, message, label, timestamp, stack }) => {
    return `${timestamp}`.black + ' - ' + `[${label}] - ${level} - data:${stack || JSON.stringify(message, null, 3)}`;
  });

  return createLogger({
    format: combine(
      timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
      label({ label: `${labelInfo}`.grey }),
      errors({ stack: true }),
      colorize(),
      logFormat,
    ),
    // defaultMeta: { service: 'user-service' },
    transports: [new transports.Console()],
    // new transports.File({ filename: 'combined.log' })
    // transports: [new transports.File({ filename: 'error.log', level: 'error' }), new transports.File({ filename: 'combined.log' })],
    exitOnError: false,
  });
};

export default devLogger;
