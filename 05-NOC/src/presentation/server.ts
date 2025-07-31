import { CheckServices } from "../domain/use-cases/checks/check-services";
import { CronService } from "./cron/cron-service";

export class Server {

    // Este es el punto de entrada de la aplicación
    public static start() {

        console.log('Server started ...');

        CronService.createJob(
            '*/5 * * * * *', // Cada 5 segundos
            () => {
                const url = 'http://localhost:3000';
                new CheckServices(
                    () => { console.log(`${url} is up!`); },
                    ( error ) => console.error(`Error on check service: ${error}`)
                ).execute( url );            // const date = new Date();

            }
        );

    }


}
