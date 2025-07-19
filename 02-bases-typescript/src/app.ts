import { getPokemonById } from "./js-foundation/06-promesas";
import { buildLogger } from "./plugins/logger.plugin";


const logger = buildLogger('app.js');

getPokemonById(10).then()

logger.log('Aplicación iniciada');
logger.error('Tenemos un error');