// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const basename = path.basename(__filename);

import { format, createLogger, transports } from 'winston';
const { timestamp, combine, errors, json } = format;

function prodLogger(labelInfo) {
  return createLogger({
    format: combine(timestamp(), errors({ stack: true }), json()),
    defaultMeta: { service: 'user-service' },
    transports: [new transports.Console()],
    // transports: [new transports.File({ filename: 'combined.log' })],
  });
}

export default prodLogger;
