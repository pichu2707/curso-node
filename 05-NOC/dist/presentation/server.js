"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const check_services_1 = require("../domain/use-cases/checks/check-services");
const cron_service_1 = require("./cron/cron-service");
class Server {
    // Este es el punto de entrada de la aplicación
    static start() {
        console.log('Server started ...');
        cron_service_1.CronService.createJob('*/5 * * * * *', // Cada 5 segundos
        () => {
            const url = 'http://localhost:3000';
            new check_services_1.CheckServices(() => { console.log(`${url} is up!`); }, (error) => console.error(`Error on check service: ${error}`)).execute(url); // const date = new Date();
        });
    }
}
exports.Server = Server;
