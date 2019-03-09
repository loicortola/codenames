import {Component, Input, OnInit} from '@angular/core';
import {Tile, Type} from '../../models/Tile';

@Component({
  selector: '[appTile]',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input()
  tile: Tile;

  constructor() { }

  ngOnInit() {
  }

}
