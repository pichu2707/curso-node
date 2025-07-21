export interface CreateTableUseCase {
    execute: ( options: CreateTableOptions ) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}
export class CreateTable implements CreateTableUseCase {

    constructor(
        /**
         * DI = Dependency Injection -> inyección de dependencias
         */
    ){}

    execute({ base, limit= 10 }: CreateTableOptions): string{

        /**
         * Aquí se implementa la lógica para crear una tabla de multiplicar
         */
        let outputMessage = '';

        //Creando encabezado
        const separator = '='.repeat(50);
        const title = `Tabla de multiplicar del ${base}`;
        const header = `${separator}\n${title}\n${separator}\n`;

        for ( let i = 0; i <= limit; i++ ) {
        outputMessage += `${base} x ${i} = ${base * i}`;

        if ( i < limit ) outputMessage += '\n';
        }

        return header + outputMessage;
        }

}