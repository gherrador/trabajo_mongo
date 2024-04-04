import { exec } from 'child_process'
export class NodeModulesInstall {
    private readonly comando: string = `${process.env.INSTALL}`;
    constructor() {}
    
    // Ejucion comando MongoImport a travez de Javacript
    async start(): Promise<void> {       
        exec(this.comando)
    }
}
