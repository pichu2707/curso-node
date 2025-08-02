import { CheckServices } from "../domain/use-cases/checks/check-services";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/logrepository.impl";
import { CronService } from "./cron/cron-service";


const fileSystemLogRepository = new LogRepositoryImpl( 
    new FileSystemDataSource()
    )

export class Server {

    // Este es el punto de entrada de la aplicación
    public static start() {

        console.log('Server started ...');

        CronService.createJob(
            '00 00 00 * * *', // Cada 5 segundos
            () => {
                const url = 'https://www.javilazaro.es';
                new CheckServices(
                    fileSystemLogRepository,
                    () => { console.log(`${url} is up!`); },
                    ( error ) => console.error(`Error on check service: ${error}`)
                ).execute( url );            // const date = new Date();

            }
        );

    }


}
