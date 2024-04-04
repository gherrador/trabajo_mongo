import path from 'path'
import * as dotenv from 'dotenv'
import { Server } from './server'
import { MongoImportFunction } from '../src/db'
import { NodeModulesInstall } from '../src/utils'
import { MongoConnection } from './infrastructure/driven-adapters/MongoConnection'

try{
    dotenv.config({
        path: path.resolve(__dirname, '../.env')
    })
       
    const port = process.env.PORT
    new MongoImportFunction().start()
    // new NodeModulesInstall().start()
    new MongoConnection().connection().then(onmessage => console.log(onmessage))
    new Server(`${port}`).listen()
}catch(e){
    const error = e as Error
    console.log(error.message)
}
