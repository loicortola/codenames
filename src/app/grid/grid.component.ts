import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Tile} from '../models/Tile';
import {Board} from '../models/Board';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnChanges {

  @Input()
  teamCount: number;
  @Input()
  tilesPerTeam: number;
  @Input()
  neutralCount: number;
  @Input()
  gameOverCount: number;
  board: Board;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.reset();
  }

  reset() {
    this.board = new Board(this.teamCount, this.tilesPerTeam, this.neutralCount, this.gameOverCount);
  }
}
