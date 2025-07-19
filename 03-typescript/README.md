# Creación de trabajos con TypeScript

tenemos que tener creado las instalaciones necesarias para el trabajo con TypeScript, además esto nos ayudará para el trabajo en desarrollo y luego subida a producción.

Para poder hacer estos trabajos necestamos diferentes instalaciones y configuraciones en archivos como `package.json`

Las instalaciones que necesitamos son:


1. El primer paso que vamos a tener que hacer es **instalar TypeScript en Node** y sus los tipos de Node, como por ejemplo las independencias de desarrollo.
```shell
npm i -D typescript @types/node
```

2. Necesitamos inicialaizar el archivo de configuración de TypeScript *(este punto tiene más formas de configuración)*.
```shell
npx tsc --init --outDir dist/ --rootDir src
```
Puede ser que cuando hagamos esto si no tenemos algún archivo de TypeScript nos de un error al crearse. Te aconsejo que tengas uno creado y si aún así da error y estás trabajando en VSC lo que tienes que hacer es pulsar `CTRL+Shift+P` para abrir la lista de comandos y buscar **Reload Window**, esto hará que se refresque tu VSC y así se quitará el error.
Este es el comando que nos creará el `archivo tsconfig.json`.


3. Para transpilar el código puedes usar.
```shell
npx tsc
npx tsc --watch
```

Con estos comandos podrás hacer el seguimiento de los cambios que hagas en desarrollo, pero en este caso, en el curso estamos utilizando *nodemon* por la información que otorga.

4. Configurar Nodemon y Node-TS
```shell
npm install -D ts-node nodemon
```
De esta manera podremos instalar nodemon y ahora crearemos su archivo de json.
```json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}
```
Aquí tenemos la configuración que necesitaremos para nodemon y para que pueda trabajar.

7. Instalar rimraf para eliminar directorios.
```shell
npm install -D rimraf
```
De esta manera tenemos la librería instalada en nuestro sistema

8. Preparación de lso códigos para `package.json`.
```json
    "dev": "nodemon"
    "dev": "npx nodemon" // En caso de no querer instalar nodemon   
    "build": "rimraf ./dist && tsc",
    "start": "npm run build && node dist/app.js"
```

Así es como debemos configurar el package.json, teniendo en cuenta que el `dev` solo debe estar una vez o bien con el **"nodemon"** porque hemos instalado la librería o si no la hemos querido instalar con el **npx nodemon**