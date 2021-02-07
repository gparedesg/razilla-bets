import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

export interface Question { question: string; options: string[]; answer: string }

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  server: Observable<any>;
  questions: Question[] = [];

  constructor(
    private afs: AngularFirestore,
    private auth: AngularFireAuth,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.auth.currentUser.then((user) => {
      const docRef = this.afs.collection('bets').doc(user.uid);
      docRef.get().subscribe(doc => {
        if(doc.exists){
          this.server = this.afs.collection('bets').doc(user.uid).valueChanges()
          this.server.forEach((server) => this.questions = server.bets)
        } else {
          this.server = this.afs.collection('bets').doc('69A3UONyvVS03vbsxVSE').valueChanges()
          this.server.forEach((server) => this.questions = server.questions)
        }
      })
    })
  }

  update() {
    this.auth.currentUser.then((user) => {
      this.afs.collection('bets').doc(user.uid).set({
        'author_uid': user.uid,
        'username': user.displayName,
        'bets': this.questions
      }).then((result) => this.router.navigate(['main']))
    })
  }

}
