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

## Subiendo el servidor
Para hacer correr el servidor es necesario que entremos en el directorio `06-json-server` y ahí arrancar con el comando `npm start` y después venir a este directorio y arracar también con el `npm run dev`

## Creación de un dev
1. Clonar el archivo .env.template a .env
2. Configurar las varibales de entorno

```
PORT=3000
MAILER_EMAIL=
MAILER_SECRET=
PROD=false
```