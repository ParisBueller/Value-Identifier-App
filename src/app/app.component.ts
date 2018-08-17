import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';

import { PlayerService } from './../services/player.service';
import { PlayersComponent } from './players/players.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  displayedColumns = [ 'position', 'player','projection','salary','dpp'];
  dataSource: PlayersComponent;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  

  constructor(private playerService : PlayerService, private afs: AngularFirestore) { }

  ngOnInit() {
    this.dataSource = new PlayersComponent(this.playerService, this.afs);
    this.dataSource.loadPlayers();
  }


  
}
