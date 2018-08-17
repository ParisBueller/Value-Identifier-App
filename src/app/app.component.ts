import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

import { PlayerService } from './../services/player.service';
import { Player } from './../models/Player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  players: Player[];
  displayedColumns = [ 'position', 'player','projection','salary','dpp'];
  dataSource = new PlayerDataSource(this.player);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  

  constructor(private player : PlayerService, private afs: AngularFirestore) {
 
    
  }

}
  export class PlayerDataSource extends DataSource<any> {
    
    constructor(private player: PlayerService) {
      super()
     
    }
    
    connect() {
      return this.player.getPlayers();
      
    }

    disconnect() {

    }
  }

  

