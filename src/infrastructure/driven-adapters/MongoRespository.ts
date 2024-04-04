import { ChampionEntity } from "domain/Champions/entities/Champion";
import { ChampionRepository } from "../../domain/Champions/repositories/ChampionsRespository";
import { ChampionModel } from "./ChampionModel";

export class ChampionMongoRepository implements ChampionRepository {
    private readonly _championModel: typeof ChampionModel
    constructor(championModel: typeof ChampionModel) {
        this._championModel = championModel
    }
   
    async getStrongerAndWeaker(): Promise<ChampionEntity[] | null>{
        const championList = await this._championModel.aggregate([
            { "$group": { 
                _id: { group: '$region', subgroup: "$tags" }, "champions": {
                                    "$push": "$$CURRENT"
                                },
                "max": { "$max": "$attack" }, 
                "min": { "$min": "$attack" } 
            }}                    
        ])        
        return championList

    };


    async getChampByName(name: string): Promise<ChampionEntity | null> {
        const championExist = await this._championModel.findOne({ name: name })
        return championExist

    }
    async getChampByKey(Key: string): Promise<ChampionEntity | null> {
        const championExist = await this._championModel.findOne({ key: Key })
        return championExist
    }

    async CreateChampion(champion: ChampionEntity): Promise<ChampionEntity> {
        const data: ChampionEntity = {
            version: champion.version,
            id: champion.id,
            key: champion.key,
            name: champion.name,
            title: champion.title,
            region: champion.region,
            blurb: champion.blurb,
            attack: champion.attack,
            defense: champion.defense,
            magic: champion.magic,
            difficulty: champion.difficulty,
            tags: champion.tags,
            partype: champion.partype,
            stats: champion.stats
        }
        const newChampion = await this._championModel.create(data)
        return newChampion
    }

    async DeleteByKey(key: string): Promise<ChampionEntity | null> {
        const championDelete = await this._championModel.findOneAndDelete({ key: key })
        return championDelete
    };

    async deleteChampPropeties(propeties: object): Promise<number | null> {
        const championList = await this._championModel.updateMany({}, { $unset: propeties })
        const documentModified = championList.modifiedCount

        return documentModified
    }
    async getChampList(): Promise<ChampionEntity[]> {
        const champList = await this._championModel.find({})
        return champList
    }
    async UpdateChampion(champion: ChampionEntity): Promise<ChampionEntity | null> {
        await this._championModel.findOneAndUpdate({ key: champion.key },
            {
                $set:
                {
                    version: champion.version,
                    id: champion.id,
                    key: champion.key,
                    name: champion.name,
                    title: champion.title,
                    region: champion.region,
                    blurb: champion.blurb,
                    attack: champion.attack,
                    defense: champion.defense,
                    magic: champion.magic,
                    difficulty: champion.difficulty,
                    tags: champion.tags,
                    partype: champion.partype,
                    stats: champion.stats
                }
            }
        )
        return champion
    }

    async getThreeChampsStronger(): Promise<ChampionEntity[] | null> {
        const championList = await this._championModel.aggregate([            
            { $sort : { attack : -1, _id: 1 } },
            { $limit : 3 }            
        ])
        return championList

    };

    async getChampsByRegionAndTags(): Promise<ChampionEntity[] | null> {
        const championList = await this._championModel.aggregate([
            { $sort : { region : -1, _id: 1 } },
            {
                $group: {
                    _id: { group: '$region', subgroup: "$tags" }, "champions": {
                        "$push": "$$CURRENT"
                    }
                }
            }              
        ])
        // { "$group": { 
        //     _id: { group: '$region', subgroup: "$tags" }, "champions": {
        //                         "$push": "$$CURRENT"
        //                     },
        //     "max": { "$max": "$attack" }, 
        //     "min": { "$min": "$attack" } 
        // }}             

        return championList
    }


    async getChamp(propety: object): Promise<ChampionEntity | null> {
        const champion = ChampionModel.findOne(propety);
        return champion
    }

}