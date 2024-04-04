import { ChampionUpdatePropeties } from "../../../../application/usecases/Champions/ChampionDeletePropeties"
import {Request, Response} from 'express'

export class ChampionUpdatePropetiesCtrl{
    constructor(private championUpdatePropeties:ChampionUpdatePropeties){
        this.updatePropetieseCtrl = this.updatePropetieseCtrl.bind(this)
    }

    public async updatePropetieseCtrl({body}:Request, res:Response){
        try{
            const data = body            
            const championsUpdates = await this.championUpdatePropeties.run(data)
            res.status(200).json({"number of documents updated":championsUpdates})
        }catch(e){
            const error = e as Error
            res.status(400).send(error.message)
        }
    }
}