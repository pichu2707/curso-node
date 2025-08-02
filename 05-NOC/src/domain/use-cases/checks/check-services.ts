import { LogRepository } from "../../repository/log.repository";
import { LogEntity, LogSeverityLevel } from "./entities/log.entities";

interface CheckServicesInterface {
    execute( url: string ): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;


export class CheckServices implements CheckServicesInterface {

    constructor(
        private readonly logRepository: LogRepository,
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback
    ){}

    public async execute( url: string ): Promise<boolean> {

        try {
            const req = await fetch( url );

            // Verifica si la respuesta es correcta
            if( !req.ok ) {
                throw new Error(`Error on check service: ${url}`);
                }
            
            const log = new LogEntity( `Service ${ url } working`, LogSeverityLevel.low )
            this.logRepository.saveLog( log );
            // Si la respuesta es correcta, puedes hacer algo con los datos
            this.successCallback();
            return true;

            } catch ( error ) {
                const errorMessage = `${ url } is not ok.  ${ error }`;
                const log  = new LogEntity( errorMessage, LogSeverityLevel.high );
                this.logRepository.saveLog( log );
                // Si hay un error, puedes manejarlo aquí
                this.errorCallback(`Error on check service: ${error}`);
                return false;
            }
        }

    }

