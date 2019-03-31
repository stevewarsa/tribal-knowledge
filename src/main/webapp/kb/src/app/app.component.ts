import { DatabaseService } from './database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kb-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Tribal Knowledge';

  constructor(private databaseService: DatabaseService) {}
}
