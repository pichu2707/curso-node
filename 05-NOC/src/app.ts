
import { Server } from "./presentation/server";
import { envs } from './config/plugins/envs.plugin';



(async() => {
    main();
})();

function main(){
    // Server.start();
    // console.log({ email: process.env.MAILER_EMAIL });
    console.log(envs.PORT);
    console.log(envs.MAILER_EMAIL);
    console.log(envs.MAILER_SECRET);
    console.log(envs.PROD);
}