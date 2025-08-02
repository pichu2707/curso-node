"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronService = void 0;
const cron_1 = require("cron");
class CronService {
    // Este es el punto de entrada del servicio de cron
    static createJob(cronTime, onTick) {
        console.log('Cron service started ...');
        const job = new cron_1.CronJob(cronTime, // Tiempo de cron
        onTick);
        job.start();
        return job;
    }
}
exports.CronService = CronService;
