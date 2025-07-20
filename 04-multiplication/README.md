# Creación del entorno de trabajo más simplificado

1. La instalación de las dependencias que necesitaremos para la realización de las tareas son las siguientes.

```shell
npm i -D typescript @types/node ts-node nodemon rimraf
```

2. Inicialiaciar el archivo de configuración de TytpeScript (Aquí se puede como ya sabemos hacer diferentes configuraciones).

```shell
npx tsx --init --outDir --rootDir src
```

3. Creación del archivo de configuración de Nodemon en el archivo `nodemon.json`
```json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}
```

4. Creación del script para dev, build y start

```json
"dev": "nodemon"
"build": "rimraf ./dist && tsc"
"start": "npm run build && node dist/app.js"
```