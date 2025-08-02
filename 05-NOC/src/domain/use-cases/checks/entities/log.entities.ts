
//Creamos la enumeración de los niveles de log

export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high',
}


export class LogEntity {

    public level: string; //Enum

    public message: string;

    public createdAt: Date;

    // Constructor para inicializar los valores del log
    constructor(message: string, level: LogSeverityLevel) {
        this.message = message;
        this.level = level;
        this.createdAt = new Date();
    }

    // Método static para no crear una instancia de LogEntity llamado factoring cosntructor
    static fromJson = ( json: string ): LogEntity => {

        const { message, level, createdAt } = JSON.parse(json);
        if( !message || !level || !createdAt ) {
            throw new Error('JSON inválido para crear un LogEntity, falta algún campo requerido: level, message o createdAt');
        }
        
        const log = new LogEntity( message, level );
        log.createdAt = new Date(createdAt);
        return log;

    }

}