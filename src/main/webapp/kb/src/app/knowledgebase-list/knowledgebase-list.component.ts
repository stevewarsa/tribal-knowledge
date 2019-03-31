import { KnowledgebaseEntry } from './../knowledgebase-entry';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  templateUrl: './knowledgebase-list.component.html',
  styleUrls: ['./knowledgebase-list.component.css']
})
export class KnowledgebaseListComponent implements OnInit {
  initializing: boolean = false;
  initializingMessage: string = null;
  kbEntries: KnowledgebaseEntry[] = [];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.initializing = true;
    this.initializingMessage = "Retrieving all Knowledgebase Entries...";
    this.databaseService.getAllKbEntries().subscribe((entries: KnowledgebaseEntry[]) => {
      console.log(entries);
      this.kbEntries = entries;
      this.initializing = false;
      this.initializingMessage = null;
    });
  }
}
