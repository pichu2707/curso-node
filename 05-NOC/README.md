# Creación de proyecto NOC

## Dependencias instaladas

Las librerías que vamos a necesitar instalar son las siguientes para el seguimiento de estas tareas de la manera más correcta posible.

* [Rimraf](https://www.npmjs.com/package/rimraf)
* [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
* `npx tsc --init --outDir dist/ --rootDir src`


## Configuración dne Package.json

```json
    "dev": "tsnd --respawn --clear src/app.ts",
    "build": "rimraf ./dist && tsc",
    "start": "npm run build && node dist/app.js"
    ```