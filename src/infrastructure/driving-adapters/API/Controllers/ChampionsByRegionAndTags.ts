import { ChampionByRegionAndTagsUseCase } from "../../../../application/usecases/Champions/GetAndOrderByRegion"
import {Request, Response} from 'express'

export class ChampByRegionAndTags{
    constructor(private championGetStronger:ChampionByRegionAndTagsUseCase){
        this.champGetList = this.champGetList.bind(this)
    }

    public async champGetList(req:Request, res:Response){
        try{            
            const ChampionList = await this.championGetStronger.run()
            res.send(ChampionList)
        }catch(e){
            const error = e as Error
            res.status(400).send(error.message)
        }
    }
}