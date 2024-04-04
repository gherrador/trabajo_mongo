import express from 'express'

import championRoutes from './infrastructure/driving-adapters/API/Routes'


export class Server{
    private readonly _port: string
    private readonly _app:express.Express = express()

    constructor(port: string){
        this._port = port
        this._app
        this._app.use(express.json())
        this._app.use(express.urlencoded({extended: true}))
        this._app.use(championRoutes)
    }

    async listen():Promise<void>{      
           this._app.listen(this._port, () => {
            console.log(`Backend App is running at http://localhost:${this._port}`)
            console.log(' Press CTRL + C to stop the server \n')
        })
    }   
}
