import { format, createLogger, transports } from 'winston';
const { timestamp, combine, errors, json } = format;

function prodLogger() {
  return createLogger({
    format: combine(timestamp(), errors({ stack: true }), json()),
    defaultMeta: { service: 'user-service' },
    transports: [new transports.Console()],
    // transports: [new transports.File({ filename: 'combined.log' })],
  });
}

export default prodLogger;
