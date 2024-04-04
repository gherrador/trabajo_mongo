import { ChampionMongoRepository } from '../../../driven-adapters/MongoRespository';
import { ChampionModel } from "../../../../infrastructure/driven-adapters/ChampionModel";
import { CreateNewChampion } from "../../../../application/usecases/Champions/CreateNewChampion";
import { CreateChampion } from "../Controllers/CreateChampion";
import { ChampionGetList } from '../../../../application/usecases/Champions/ChampionGetList';
import { ChampGetAll } from '../Controllers/GetAllChampions';
import { UpdateChampion } from '../../../../application/usecases/Champions/ChampionUpdate';
import { UpdateChampionCtrl } from '../Controllers/ChampionUpdate';
import { ChampDeleteByKey } from '../Controllers/ChampionDeleteByKey';
import { ChampionDeleteByKeyUseCases } from '../../../../application/usecases/Champions/ChampionDeleteByKey';
import { ChampionUpdatePropetiesCtrl } from '../Controllers/deleteChampPropeties';
import { ChampionUpdatePropeties } from '../../../../application/usecases/Champions/ChampionDeletePropeties';
import { ChampByRegionAndTags } from '../Controllers/ChampionsByRegionAndTags';
import { ChampionByRegionAndTagsUseCase } from '../../../../application/usecases/Champions/GetAndOrderByRegion';
import { ChampGetThreeStrongerCtrl } from '../Controllers/ChampionThreeStronger';
import { ChampionThreeStronger } from '../../../../application/usecases/Champions/Get3ChampionStronger';
import { ChampionStrongerAndWeakerByRegionUseCase } from '../../../../application/usecases/Champions/GetStrongerAndWeaker';
import { ChampGetStrongerAndWeakerCtrl } from '../Controllers/GetStrongerAndWeakerByRegion'; 
    /**
 * Iniciar Repository
 */
const ChampionRepository = new ChampionMongoRepository(ChampionModel)

/**
 * Iniciamos casos de uso
 */
const createChampionUseCase = new CreateNewChampion(ChampionRepository)
const getAllChampion = new ChampionGetList(ChampionRepository)
const updateChampion = new UpdateChampion(ChampionRepository)
const deleteChampionByKey = new ChampionDeleteByKeyUseCases(ChampionRepository)
const ChampUpdatePropeties = new ChampionUpdatePropeties(ChampionRepository)
const GetByRegionAndTags = new ChampionByRegionAndTagsUseCase(ChampionRepository)
const ChampThreeStronger = new ChampionThreeStronger(ChampionRepository)
const ChampStrongerAndWeakerByRegionUseCase = new ChampionStrongerAndWeakerByRegionUseCase(ChampionRepository)
/**
 * Iniciar User Controller
 */

export const createChampionCtrl = new CreateChampion(createChampionUseCase)
export const getAllChampCtrl = new ChampGetAll(getAllChampion)
export const updateChampCtrl = new UpdateChampionCtrl(updateChampion)
export const deleteByKeyCtrl = new ChampDeleteByKey(deleteChampionByKey)
export const updatePropetiesCtrl = new ChampionUpdatePropetiesCtrl(ChampUpdatePropeties)
export const ChampByRegionAndTagsCtrl = new ChampByRegionAndTags(GetByRegionAndTags)
export const ChampThreeStrongerCtrl = new ChampGetThreeStrongerCtrl(ChampThreeStronger)
export const ChampionGetStrongerAndWeakerCtrl = new ChampGetStrongerAndWeakerCtrl(ChampStrongerAndWeakerByRegionUseCase)
/**
 * 
 */
