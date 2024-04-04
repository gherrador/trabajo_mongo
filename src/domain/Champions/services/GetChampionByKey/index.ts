import { ChampionNotFoundException } from "../../exceptions/ChampionNotFound";
import { ChampionEntity } from "../../entities/Champion";
import { ChampionRepository } from "../../repositories/ChampionsRespository";


export class ChampionNotFoundByKey{
    private readonly _championRepository: ChampionRepository
    private static INSTANCE: ChampionNotFoundByKey

    constructor(championRepository:ChampionRepository){
        this._championRepository = championRepository
    }

    static instance(championRepository:ChampionRepository){
        if(!ChampionNotFoundByKey.INSTANCE){
            ChampionNotFoundByKey.INSTANCE = new ChampionNotFoundByKey(championRepository)
        }
        return ChampionNotFoundByKey.INSTANCE
    }

    async run(key:string): Promise<ChampionEntity | null>{
        const champion = await this._championRepository.getChampByKey(key)
        if(champion === undefined) throw new ChampionNotFoundException()
        return champion
    }
}