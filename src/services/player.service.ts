import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Player } from '../models/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  Week1Collection: AngularFirestoreCollection<Player>;
  Week1Doc: AngularFirestoreDocument<Player>;
  players: Observable<Player[]>;
  player: Observable<Player>;

  constructor(private afs: AngularFirestore) { 
    this.Week1Collection = this.afs.collection('Week1');
  }

  getPlayers(): Observable<Player[]> {
    //Get players with id
    this.players = this.Week1Collection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Player;
        data.id = action.payload.doc.id;
        return data;

      });
    }));

    return this.players;
  }
  
}
