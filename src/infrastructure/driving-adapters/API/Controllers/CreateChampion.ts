import { CreateNewChampion } from '../../../../application/usecases/Champions/CreateNewChampion';
import {Request, Response} from 'express'

export class CreateChampion{
    constructor(private createNewChampion:CreateNewChampion){
        this.createCtrl = this.createCtrl.bind(this)
    }

    public async createCtrl({body}:Request, res:Response){
        try{
            const data = body
            const newChampion = await this.createNewChampion.run(data)
            res.send(newChampion)
        }catch(e){
            const error = e as Error
            res.status(400).send(error.message)
        }
    }
}