import { ChampionNotFoundByKey } from "../../../../domain/Champions/services/GetChampionByKey"
import { ChampionEntity } from "../../../../domain/Champions/entities/Champion";
import { ChampionRepository } from "../../../../domain/Champions/repositories/ChampionsRespository";
import { ChampionNotFoundException } from "../../../../domain/Champions/exceptions/ChampionNotFound";

export class UpdateChampion {
    private readonly _championRepository: ChampionRepository
    private readonly _championNotFound: ChampionNotFoundByKey

    constructor(championRepository: ChampionRepository) {
        this._championRepository = championRepository
        this._championNotFound = ChampionNotFoundByKey.instance(this._championRepository)
    }

    async run(key: string, propeties: ChampionEntity): Promise<ChampionEntity |  null> {        
        const championExist = await this._championNotFound.run(key)
        if (!championExist) throw new ChampionNotFoundException()
        const dataToUpdate:ChampionEntity = {
            version: propeties.version ?? championExist.version,
            id: propeties.id ?? championExist.id,
            key: propeties.key ?? championExist.key,
            name: propeties.name ?? championExist.name,
            title: propeties.title ?? championExist.title,
            region: propeties.region ?? championExist.region,
            blurb: propeties.blurb ?? championExist.blurb,
            attack: propeties.attack ?? championExist.attack,
            defense: propeties.defense ?? championExist.defense,
            magic: propeties.magic ??  championExist.magic,
            difficulty: propeties.difficulty ?? championExist.difficulty,
            tags: propeties.tags ?? championExist.tags,
            partype: propeties.partype ?? championExist.partype,
            stats: propeties.stats ?? championExist.stats
        }
        const championUpdate: ChampionEntity | null = await this._championRepository.UpdateChampion(dataToUpdate)
        return championUpdate
    }
}