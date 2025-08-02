import fs from 'fs';

import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/use-cases/checks/entities/log.entities";


export class FileSystemDataSource implements LogDataSource {

    private readonly logPath = './logs'; // Ruta donde se guardarán los logs
    private readonly allLogsPath = 'logs/log-all.log'; // Ruta para todos los logs
    private readonly mediumLogsPath = 'logs/log-medium.log'; // Ruta para logs de media severidad
    private readonly highLogsPath = 'logs/log-high.log'; // Ruta para logs de alta severidad

    // Implementación del método para guardar un log y crear los archivos si no existen
    constructor() {
        this.createLogsFiles();
    }

    // Aquí podrías agregar lógica para asegurarte de que las rutas existen

    private createLogsFiles = () => {
        if( !fs.existsSync( this.logPath ) ) {
            fs.mkdirSync( this.logPath );
            }

        // Crear archivos de log si no existen por cada uno
        //Creamos un arreglo con las rutas de los logs

        [
            this.allLogsPath,
            this.mediumLogsPath,
            this.highLogsPath
        ].forEach( path => {
            if( fs.existsSync( path) ) return;

            fs.writeFileSync( path, '');
        })
    }

    async saveLog( newLog: LogEntity ): Promise<void> {

        const logAsJson = `${ JSON.stringify(newLog) }\n`;

        fs.appendFileSync( this.allLogsPath, logAsJson );

        if( newLog.level === LogSeverityLevel.low ) return;

        if( newLog.level === LogSeverityLevel.medium ) {
            fs.appendFileSync( this.mediumLogsPath, logAsJson );
            return;
        } else {
            fs.appendFileSync( this.highLogsPath, logAsJson );
        }
    }


    private getLogsFromFile = (path: string): LogEntity[] => {
        const content = fs.readFileSync( path, 'utf-8' );
        const logs = content.split('\n').map(
            log => LogEntity.fromJson(log)
        );
        return logs
    }

    async getLogs( severityLevel: LogSeverityLevel ): Promise<LogEntity[]> {
        
        switch( severityLevel ) {
            case LogSeverityLevel.low:
                return this.getLogsFromFile(this.allLogsPath);
            
            case LogSeverityLevel.medium:
                return this.getLogsFromFile(this.mediumLogsPath);
            
            case LogSeverityLevel.high:
                return this.getLogsFromFile(this.highLogsPath);

            default:
                throw new Error(`Unknown severity level: ${severityLevel}`);
        }
    }



}