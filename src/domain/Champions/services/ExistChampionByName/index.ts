import { ChampionAlreadyExistsException } from "../../../../domain/Champions/exceptions/ChampionAlreadyExists";
import { ChampionEntity } from "../../../../domain/Champions/entities/Champion";
import { ChampionRepository } from "../../../../domain/Champions/repositories/ChampionsRespository";


export class ExistChampionByName{
    private readonly _championRepository: ChampionRepository
    private static INSTANCE: ExistChampionByName

    constructor(championRepository:ChampionRepository){
        this._championRepository = championRepository
    }

    static instance(championRepository:ChampionRepository){
        if(!ExistChampionByName.INSTANCE){
            ExistChampionByName.INSTANCE = new ExistChampionByName(championRepository)
        }
        return ExistChampionByName.INSTANCE
    }

    async run(name:string): Promise<ChampionEntity | null>{
        const champion = await this._championRepository.getChampByName(name)
        if(champion === undefined) throw new ChampionAlreadyExistsException()
        return champion
    }
}