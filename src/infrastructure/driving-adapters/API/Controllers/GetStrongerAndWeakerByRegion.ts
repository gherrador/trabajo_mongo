import { ChampionStrongerAndWeakerByRegionUseCase } from "../../../../application/usecases/Champions/GetStrongerAndWeaker"
import {Request, Response} from 'express'

export class ChampGetStrongerAndWeakerCtrl{
    constructor(private championGetStrongerAndWeaker:ChampionStrongerAndWeakerByRegionUseCase){
        this.champGetStrongerAndWeaker = this.champGetStrongerAndWeaker.bind(this)
    }

    public async champGetStrongerAndWeaker(req:Request, res:Response){
        try{            
            const ChampionList = await this.championGetStrongerAndWeaker.run()
            res.send(ChampionList)
        }catch(e){
            const error = e as Error
            res.status(400).send(error.message)
        }
    }
}