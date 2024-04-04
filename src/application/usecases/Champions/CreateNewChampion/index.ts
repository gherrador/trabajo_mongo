import { ChampionAlreadyExistsException } from "../../../../domain/Champions/exceptions/ChampionAlreadyExists";
import { ChampionEntity } from "../../../../domain/Champions/entities/Champion";
import { ChampionRepository } from "../../../../domain/Champions/repositories/ChampionsRespository";
import { ExistChampionByName } from "../../../../domain/Champions/services/ExistChampionByName";
import { ChampionValue } from "../../../../domain/Champions/values";


export class CreateNewChampion{
    private readonly _championRepository: ChampionRepository
    private readonly _existChampionByName: ExistChampionByName

    constructor(championRepository:ChampionRepository){
        this._championRepository = championRepository
        this._existChampionByName = ExistChampionByName.instance(this._championRepository)
    }

    async run(champion:ChampionEntity):Promise<ChampionEntity>{
        const championExist = await this._existChampionByName.run(champion.name)
        if(championExist) throw new ChampionAlreadyExistsException()
        const newChampion = await new ChampionValue(champion)
        const championCreated: ChampionEntity = await this._championRepository.CreateChampion(newChampion)
        return championCreated      
    }
}