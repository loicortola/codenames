export enum Type {
  TEAM,
  EMPTY,
  NEUTRAL,
  GAMEOVER
}

export class Tile {

  type: Type;
  teamId: number;

  constructor(type: Type, teamId?: number) {
    this.type = type;
    this.teamId = teamId;
  }

  isNeutral() {
    return this.type === Type.NEUTRAL;
  }

  isGameOver() {
    return this.type === Type.GAMEOVER;
  }

  isEmpty() {
    return this.type === Type.EMPTY;
  }

  isOfTeam(teamId: number) {
    return this.type === Type.TEAM && this.teamId === teamId;
  }
}
