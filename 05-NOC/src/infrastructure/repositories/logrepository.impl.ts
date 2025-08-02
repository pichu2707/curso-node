import { LogRepository } from "../../domain/repository/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/use-cases/checks/entities/log.entities";
import { LogDataSource } from '../../domain/datasources/log.datasource';


export class LogRepositoryImpl implements LogRepository {

    constructor( private readonly LogDataSource: LogDataSource ) {}
    
        async saveLog(log: LogEntity): Promise<void> {
            return this.LogDataSource.saveLog(log);
        }

        async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
            return this.LogDataSource.getLogs(severityLevel);
        }


    }
