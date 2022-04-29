import { format, transports, createLogger } from 'winston';
const { timestamp, combine, printf, label, errors } = format;
import 'colors';

const devLogger = (labelInfo) => {
  const logFormat = printf(({ level, message, label, timestamp, stack }) => {
    return `${timestamp} [${label}] ${level}: ${stack || message}`;
  });

  return createLogger({
    format: combine(
      format.colorize(),
      timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
      label({ label: `${labelInfo}`.grey }),
      errors({ stack: true }),
      logFormat,
    ),
    defaultMeta: { service: 'user-service' },
    transports: [new transports.Console()],
    // new transports.File({ filename: 'combined.log' })
    // transports: [new transports.File({ filename: 'error.log', level: 'error' }), new transports.File({ filename: 'combined.log' })],
  });
};

export default devLogger;
