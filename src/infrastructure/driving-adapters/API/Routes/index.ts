import { Router } from 'express'
import { createChampionCtrl,getAllChampCtrl, updateChampCtrl, deleteByKeyCtrl, updatePropetiesCtrl, ChampByRegionAndTagsCtrl,ChampThreeStrongerCtrl,ChampionGetStrongerAndWeakerCtrl } from '../Implementation/MongoImplementation'


const route = Router()

route.post('/champion', createChampionCtrl.createCtrl)
route.get('/', getAllChampCtrl.champGetList)
route.put('/champion/:key',updateChampCtrl.updateCtrl )
route.delete('/champion/:key', deleteByKeyCtrl.champDeleteByKey)
route.put('/updateprop/', updatePropetiesCtrl.updatePropetieseCtrl)
route.get('/champions/regiontags', ChampByRegionAndTagsCtrl.champGetList)
route.get('/champions/stronger', ChampThreeStrongerCtrl.champGetThreeStronger)
route.get('/champions/strongerweaker', ChampionGetStrongerAndWeakerCtrl.champGetStrongerAndWeaker)
export default route