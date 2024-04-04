import { ChampionEntity } from "../entities/Champion";

export class ChampionValue implements ChampionEntity {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    region: string;
    blurb: string;
    attack: number
    defense: number
    magic: number
    difficulty: number
    tags: string;
    partype: string;
    stats: object; 

  constructor(champion: ChampionEntity) {
    this.version = champion.version
    this.id = champion.id
    this.key = champion.key
    this.name = champion.name
    this.title = champion.title
    this.region = champion.region
    this.blurb = champion.blurb
    this.attack = champion.attack
    this.defense = champion.defense
    this.magic = champion.magic
    this.difficulty = champion.difficulty
    this.tags = champion.tags
    this.partype = champion.partype
    this.stats = champion.stats     
  }
}
