# Creación de un sistema de multiplicación con parámetros
Este trabajo es para la creación de banderas para la realización de tablas de multiplicar, donde nos da la posibilidad de crear una tabla donde ponemos la `b` base, `l` límite de números a multiplicar y seleccionar si queremos o no que se muestre por pantalla `s`.

Además de todos estos parámetros podemos introducir el nombre del directorio `d` y/o del archivo `n` para que se cree con el nombre seleccionado introduciendo ahí la tabla que hemos dicho de realizar.

Un ejemplo de conexión del código en desarrollo es:

```shell
npx ts-node src/app.ts --base 8 --limite 5 -n tabla-8 -d lenguaje
```

Este ejemplo es en la parte de desarrollo, donde aún tenemos que introducir el **npx ts-node src/app.ts**.

Cómo se puede comprobar estamos seleccionando la `--base 8` que seleccionaa la table de y el `--limite 5` que nos marca desde el 0 a que número tiene que llegar. 

## Creación del entorno de trabajo más simplificado

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

## Creación de Jest 
es necesario introducir los siguientes códigos

```shell 
npm install -D jest @types/jest ts-jest supertest
```

```shell
npm create jest
```

En las hojas que vamos a trabajar los test tenemos que importar para que funcione lo siguiente

````javascript
import { describe, expect, test } from '@jest/globals';
```