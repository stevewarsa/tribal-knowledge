import { DatabaseService } from './database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kb-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Tribal Knowledge';
  // users: any[] = [];
  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    // this.databaseService.getUsers().subscribe((users: any[]) => {
    //   console.log(users);
    //   this.users = users;
    // });
  }
}
