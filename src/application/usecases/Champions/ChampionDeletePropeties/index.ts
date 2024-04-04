import { ChampionRepository } from "../../../../domain/Champions/repositories/ChampionsRespository";


export class ChampionUpdatePropeties{
    private readonly _championRepository: ChampionRepository

    constructor(championRepository:ChampionRepository){
        this._championRepository = championRepository
    }

    async run(propeties:object):Promise<number|null>{       
        const numberOfUpdates= await this._championRepository.deleteChampPropeties(propeties)        
        return numberOfUpdates
    }
}