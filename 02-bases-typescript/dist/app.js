"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _06_promesas_1 = require("./js-foundation/06-promesas");
const logger_plugin_1 = require("./plugins/logger.plugin");
const logger = (0, logger_plugin_1.buildLogger)('app.js');
(0, _06_promesas_1.getPokemonById)(10).then();
logger.log('Aplicación iniciada');
logger.error('Tenemos un error');
