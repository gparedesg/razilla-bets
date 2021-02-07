import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
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

  constructor(
  	private afs: AngularFirestore,
  	private auth: AngularFireAuth,
  	private router: Router
  ) { }

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

  logout() {
    this.auth.signOut()
      .then((result) => {
        this.router.navigate(['/'])
      }).catch((error) => {
        console.error(error)
      })
  }

}
