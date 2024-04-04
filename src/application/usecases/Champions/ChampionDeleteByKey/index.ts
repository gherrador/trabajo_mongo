import { ChampionEntity } from "../../../../domain/Champions/entities/Champion";
import { ChampionRepository } from "../../../../domain/Champions/repositories/ChampionsRespository";


export class ChampionDeleteByKeyUseCases{
    private readonly _championRepository: ChampionRepository

    constructor(championRepository:ChampionRepository){
        this._championRepository = championRepository
    }

    async run(key:string):Promise<ChampionEntity | null>{       
        const championDelete = await this._championRepository.DeleteByKey(key)
        return championDelete
    }
}