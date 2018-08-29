import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

import { PlayerService } from './../services/player.service';
import { PlayersComponent } from './players/players.component';
import { Player } from '../models/Player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  displayedColumns = [ 'position', 'player','projection','salary','dpp'];
  dataSource: PlayersComponent;
  player: Player;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  

  constructor(private playerService : PlayerService) { }

  ngOnInit() {
    this.dataSource = new PlayersComponent(this.playerService);
    this.dataSource.loadPlayers();
  }


  
}
