import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Question { question: string; options: string[]; answer: string }

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  server: Observable<any>;
  questions: Question[] = [];
  users: any[] = [];
  userName: string;

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.server = this.afs.collection('bets').valueChanges()
    this.server.forEach((server) => {
      server.forEach((question) => {
        if(question.author_uid) {
          this.users.push({
          	'username': question.username,
          	'bets': question.bets
          })
        }
      })
    })
  }

}
