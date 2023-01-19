import { transports, format } from 'winston';
export const useLogger = {
    transports: [
      new transports.File({
        filename: 'user.log',
        level: 'info',
        format: format.combine(format.timestamp(),format.json())
})

    ],
    
}
  
// log messages

// debug(message: any, context?: string)
// log(message: any, context?: string)
// error(message: any, stack?: string, context?: string)
// verbose(message: any, context?: string)
// warn(message: any, context?: string)