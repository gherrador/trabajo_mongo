export class ChampionNotFoundException extends Error {
  constructor () {
    super('Champion Not Found')
  }
}
