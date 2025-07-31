
interface CheckServicesInterface {
    execute( url: string ): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;


export class CheckServices implements CheckServicesInterface {

    constructor(
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback
    ){}

    public async execute( url: string ): Promise<boolean> {

        try {
            const req = await fetch( url );

            // Verifica si la respuesta es correcta
            if( !req.ok ) {
                throw new Error(`Error on check service: ${url}`);
                }
            // Si la respuesta es correcta, puedes hacer algo con los datos
            this.successCallback();
            return true;

            } catch ( error ) {
                console.log(`Error on check service: ${error}`);
                this.errorCallback(`Error on check service: ${error}`);
                return false;
            }
        }

    }

