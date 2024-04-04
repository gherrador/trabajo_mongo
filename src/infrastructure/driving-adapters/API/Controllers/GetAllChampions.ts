import { ChampionGetList } from '../../../../application/usecases/Champions/ChampionGetList';
import {Request, Response} from 'express'

export class ChampGetAll{
    constructor(private championGetList:ChampionGetList){
        this.champGetList = this.champGetList.bind(this)
    }

    public async champGetList(req:Request, res:Response){
        try{            
            const newChampion = await this.championGetList.run()
            res.send(newChampion)
        }catch(e){
            const error = e as Error
            res.status(400).send(error.message)
        }
    }
}