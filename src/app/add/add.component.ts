import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Question { question: string; options: string[]; }

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  server: Observable<any>;
  questions: Question[] = [];

  constructor(private afs: AngularFirestore) {
    this.server = afs.collection('bets').doc('69A3UONyvVS03vbsxVSE').valueChanges();
  }

  ngOnInit(): void {
  	this.server.forEach((server) =>
      this.questions = server.questions
	)
  }

}
