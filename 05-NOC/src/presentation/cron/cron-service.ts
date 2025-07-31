import { CronJob } from "cron";


type CronTime = string | Date;
type onTick = () => void;

export class CronService {

    // Este es el punto de entrada del servicio de cron
    static createJob( cronTime: CronTime, onTick: onTick ): CronJob {

        console.log('Cron service started ...');

        const job = new CronJob(
            cronTime, // Tiempo de cron
            onTick,   // Función a ejecutar
        );
        
        job.start();

        return job;
    }

}