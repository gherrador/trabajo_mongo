import { ChampionThreeStronger } from "../../../../application/usecases/Champions/Get3ChampionStronger"
import {Request, Response} from 'express'

export class ChampGetThreeStrongerCtrl{
    constructor(private championGetStronger:ChampionThreeStronger){
        this.champGetThreeStronger = this.champGetThreeStronger.bind(this)
    }

    public async champGetThreeStronger(req:Request, res:Response){
        try{            
            const ChampionList = await this.championGetStronger.run()
            res.send(ChampionList)
        }catch(e){
            const error = e as Error
            res.status(400).send(error.message)
        }
    }
}