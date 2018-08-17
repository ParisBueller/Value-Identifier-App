import { Component} from '@angular/core';
import { DataSource,CollectionViewer} from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/Player';
import { BehaviorSubject } from '../../../node_modules/rxjs';
import { catchError, finalize } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements DataSource<Player> {
  players: {} | Player[]

  private playersSubject = new BehaviorSubject<Player[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();


  constructor(private playerService: PlayerService, private afs: AngularFirestore) { 

  }

  connect(collectionViewer:CollectionViewer): Observable<Player[]> {
    return this.playersSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.playersSubject.complete();
    this.loadingSubject.complete();
  }

  
  loadPlayers() {
    
    this.loadingSubject.next(true);

    this.playerService.getPlayers().pipe
                      (catchError(() => of([])),
                      finalize(() => this.loadingSubject.next(false))
    )

    .subscribe(players => this.playersSubject.next(players));

  }
}
