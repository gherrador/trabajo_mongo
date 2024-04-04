import mongoose from 'mongoose';
export class MongoConnection {
    private readonly MONGO_URI: string = `${process.env.MONGO_URI}`;
    constructor() {}

    async connection():Promise<string>{
        return new Promise((resolve, reject) => {
            mongoose.connect(this.MONGO_URI)
            resolve('DB connected')
            reject('Error - DB Not connected')
        })
    }
}
    

