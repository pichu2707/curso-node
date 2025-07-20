import fs from "fs";
import path from "path";


export interface SaveFileUseCase {
    execute: ( options: SaveFileOptions ) => Boolean;
}

export interface SaveFileOptions {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
}


export class SaveFile implements SaveFileUseCase {

    constructor(
        /** repository: StrageRepository */
    ){}

    execute({
        fileContent,
        fileDestination = 'outputs',
        fileName = 'table',
    }: SaveFileOptions): boolean {

        // Guardar el resultado en un archivo .txt
        try {
            // 1. VAmos a crear el directorio si no existe
            if(!fs.existsSync(fileDestination)) {
                fs.mkdirSync(fileDestination, { recursive: true });
                console.log(`Directorio creado: ${fileDestination}`);
            }

            // 2. Creamos la ruta completa del archivo
            const filePath = path.join(fileDestination, `${fileName}.txt`);

            // 3. Escribimos el contenido en el archivo
            fs.writeFileSync(filePath, fileContent);
            return true;
        } catch (err) {
            console.error('Error al escribir el archivo:', err);
            return false;
        }
    };
}