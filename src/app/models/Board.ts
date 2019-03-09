import {Tile, Type} from './Tile';

export class Board {
  rowSize: number;
  gameOverCount: number;
  neutralCount: number;
  tilesPerTeam: number;
  teamCount: number;
  firstPlayerTeamId: number;
  tiles: Tile[];

  constructor(teamCount: number, tilesPerTeam: number, neutralCount: number, gameOverCount: number) {
    this.teamCount = teamCount;
    this.tilesPerTeam = tilesPerTeam;
    this.neutralCount = neutralCount;
    this.gameOverCount = gameOverCount;
    this.tiles = [];
    const totalTileCount: number = this.teamCount * this.tilesPerTeam + this.neutralCount + this.gameOverCount + 1;
    this.rowSize = Math.ceil(Math.sqrt(totalTileCount));
    this.firstPlayerTeamId = Math.floor(Math.random() * teamCount);
    this.computeTiles();
  }

  private shuffleTiles() {
    let currentIndex = this.tiles.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.tiles[currentIndex];
      this.tiles[currentIndex] = this.tiles[randomIndex];
      this.tiles[randomIndex] = temporaryValue;
    }

    return this.tiles;
  }

  private computeTiles() {
    for (let teamId = 0; teamId < this.teamCount; teamId++) {
      for (let teamTile = 0; teamTile < this.tilesPerTeam; teamTile++) {
        this.tiles.push(new Tile(Type.TEAM, teamId));
      }
    }
    this.tiles.push(new Tile(Type.TEAM, this.firstPlayerTeamId));
    for (let neutralTile = 0; neutralTile < this.neutralCount; neutralTile++) {
      this.tiles.push(new Tile(Type.NEUTRAL));
    }
    for (let gameOverTile = 0; gameOverTile < this.gameOverCount; gameOverTile++) {
      this.tiles.push(new Tile(Type.GAMEOVER));
    }
    this.shuffleTiles();
    for (let i = this.tiles.length; i < (this.rowSize * this.rowSize); i++) {
      this.tiles.push(new Tile(Type.EMPTY));
    }
  }

}
