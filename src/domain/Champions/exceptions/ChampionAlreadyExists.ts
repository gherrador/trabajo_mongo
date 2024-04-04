export class ChampionAlreadyExistsException extends Error {
  constructor () {
    super('Champion already exists')
  }
}
