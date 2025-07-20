import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";


interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileDestination: string;
    fileName: string;
}

export class ServerApp {


    static run( { base, limit, showTable, fileDestination, fileName }: RunOptions) {
        console.log('Server is running...');

        // Creación de la tabla de multiplicar
        const table = new CreateTable().execute({ base, limit });

        // Guardar la tabla en un archivo
        const wasCreated = new SaveFile()
        .execute({ 
            fileContent: table,
            fileDestination: fileDestination,
            fileName: fileName,
        })

        if( showTable) console.log(table);

        ( wasCreated )
        ? console.log(`La tabla de ${base} fue creada correctamente.`)
        : console.log(`Ha sucedido un error en la tabla del ${base}.`);
    }
}