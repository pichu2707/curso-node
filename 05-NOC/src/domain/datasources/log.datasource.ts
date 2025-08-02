
import { LogEntity, LogSeverityLevel } from "../use-cases/checks/entities/log.entities";

// abstract hace que no se pueda instanciar esta clase directamente
// y que las clases que la extiendan deben implementar sus métodos
export abstract class LogDataSource {

    abstract saveLog( log: LogEntity ): Promise<void>;
    abstract getLogs( severityLevel: LogSeverityLevel ): Promise<LogEntity[]>;

}