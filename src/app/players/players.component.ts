import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/Player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  // players: Player[];
  // displayedColumns = [ 'position', 'player','projection','salary','dpp'];
  // dataSource;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private players : PlayerService, private afs: AngularFirestore) {

    //this.dataSource = new MatTableDataSource(this.players);
  }

  

 ngOnInit() {
    // this.playerService.getPlayers().subscribe(players => {
    //   this.players = players
    //   console.log(players);
    // });
  
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}
