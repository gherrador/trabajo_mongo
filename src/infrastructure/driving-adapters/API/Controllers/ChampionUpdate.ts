import { UpdateChampion } from '../../../../application/usecases/Champions/ChampionUpdate';
import {Request, Response} from 'express'

export class UpdateChampionCtrl{
    constructor(private updateChampion:UpdateChampion){
        this.updateCtrl = this.updateCtrl.bind(this)
    }

    public async updateCtrl({body, params}:Request, res:Response){
        try{
            const data = body
            const key = params.key            
            
            const champUpdated = await this.updateChampion.run(String(key), data)
            res.send(champUpdated)
        }catch(e){
            const error = e as Error
            res.status(400).send(error.message)
        }
    }
}