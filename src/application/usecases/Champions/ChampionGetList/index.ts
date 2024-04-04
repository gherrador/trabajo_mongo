import { ChampionEntity } from "../../../../domain/Champions/entities/Champion";
import { ChampionRepository } from "../../../../domain/Champions/repositories/ChampionsRespository";


export class ChampionGetList{
    private readonly _championRepository: ChampionRepository

    constructor(championRepository:ChampionRepository){
        this._championRepository = championRepository
    }

    async run():Promise<ChampionEntity[]>{
        const championList = await this._championRepository.getChampList()
        return championList
    }
}