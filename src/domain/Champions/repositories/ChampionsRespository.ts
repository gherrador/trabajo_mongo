import { ChampionEntity } from "../entities/Champion"
export interface ChampionRepository{    
    DeleteByKey:(key:string) => Promise<ChampionEntity | null>
    UpdateChampion:(champion:ChampionEntity) => Promise<ChampionEntity | null>
    CreateChampion:(champion:ChampionEntity)=> Promise<ChampionEntity>
    getChampByKey:(key:string) => Promise<ChampionEntity | null>    
    getChampByName:(name:string) => Promise<ChampionEntity | null >   
    getChampList:() => Promise<ChampionEntity[]>
    deleteChampPropeties:(propeties:object) => Promise<number|null>
    getThreeChampsStronger:() =>Promise< ChampionEntity[] |null>
    getChampsByRegionAndTags:() =>Promise< ChampionEntity[] |null>
    getStrongerAndWeaker:()=> Promise<ChampionEntity[]| null>   
    
}