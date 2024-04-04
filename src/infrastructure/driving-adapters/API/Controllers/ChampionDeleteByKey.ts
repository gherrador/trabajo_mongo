import { ChampionDeleteByKeyUseCases } from "../../../../application/usecases/Champions/ChampionDeleteByKey"
import {Request, Response} from 'express'

export class ChampDeleteByKey{
    constructor(private championDeleteByKeyUseCases:ChampionDeleteByKeyUseCases){
        this.champDeleteByKey = this.champDeleteByKey.bind(this)
    }

    public async champDeleteByKey({params}:Request, res:Response){
        const key = params.key
        try{            
            const championDeleted = await this.championDeleteByKeyUseCases.run(String(key))
            res.send(championDeleted)
        }catch(e){
            const error = e as Error
            res.status(400).send(error.message)
        }
    }
}