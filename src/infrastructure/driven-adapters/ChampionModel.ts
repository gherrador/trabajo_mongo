import { ChampionEntity } from 'domain/Champions/entities/Champion'
import { Schema, model } from 'mongoose'

const ChampionSchema = new Schema<ChampionEntity>({
    version: {type: String, required: true},
    id: {type:String, required: true},
    key: {type:String, required: true},
    name: {type:String, required: true},
    title: {type: String, required: true},
    region: {type: String, required: true},
    blurb: {type: String, required: true},
    attack: {type: Number, required: true},
    defense: {type: Number, required: true},
    magic: {type: Number, required: true},
    difficulty: {type: Number, required: true},
    tags: {type: String, required: true},
    partype: {type: String, required: true},
    stats: {type: Object, required: true}
})


export const ChampionModel = model<ChampionEntity>('champion', ChampionSchema, 'champion') 