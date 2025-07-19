import  winston, { format } from 'winston';

const { combine, timestamp, json } = format

// Configuración del logger -> https://www.npmjs.com/package/winston
export const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    json(),
  ),
//   defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or higher to `error.log`
    //   (i.e., error, fatal, but not other levels)
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    //
    // - Write all logs with importance level of `info` or higher to `combined.log`
    //   (i.e., fatal, error, warn, and info, but not trace)
    //
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


// Lo vamos a hace así por si el día de mañana queremos cambiar el logger por otro diferente, como por ejemplo uno que envíe los logs a un servicio externo. 
export const buildLogger = (service: string) => {
    return {
        log: ( message: string ) => {
            logger.log('info', { message, service } );
        },
        error: ( message: string ) => {
            logger.log('error', { 
                message, 
                service,
            } );
        },
    }
};