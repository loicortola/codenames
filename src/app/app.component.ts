import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  teamCount: number;
  tilesPerTeam: number;
  neutralCount: number;
  gameOverCount: number;


  ngOnInit() {
    this.teamCount = 2;
    this.tilesPerTeam = 8;
    this.neutralCount = 7;
    this.gameOverCount = 1;
  }

  reset() {

  }
}
