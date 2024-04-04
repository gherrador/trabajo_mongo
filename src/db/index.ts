import { exec } from 'child_process'
import path from 'path'
export class MongoImportFunction {
    private readonly jsonPath: string = path.resolve(__dirname, './champion.json')
    private readonly comando: string = `${process.env.COMMAND} ${this.jsonPath}`;
    constructor() {}
    
    // Ejucion comando MongoImport a travez de Javacript
    async start(): Promise<void> {      
        exec(this.comando, (error: any, stdout: any, stderr: any) => {
            if (error) {
                console.error(`Error al ejecutar el comando: ${error.message}`);
                return;
            }
            if (stderr) {
                console.info(`${stderr}`);
                return;
            }
            console.log(`Salida del comando:\n${stdout}`);
        })
    }
}
