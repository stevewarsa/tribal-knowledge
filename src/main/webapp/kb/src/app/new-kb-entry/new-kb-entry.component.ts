import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';
import { KnowledgebaseEntry } from '../knowledgebase-entry';
import { Category } from '../category';

@Component({
  selector: 'kb-new-kb-entry',
  templateUrl: './new-kb-entry.component.html',
  styleUrls: ['./new-kb-entry.component.css']
})
export class NewKbEntryComponent implements OnInit {
  initializing: boolean = false;
  initializingMessage: string = null;
  errorMessage: string = null;
  categories: string[] = [];
  newCategoryNm: string = null;
  newCategoryCd: string = null;
  kb: KnowledgebaseEntry = new KnowledgebaseEntry();

  constructor(private databaseService: DatabaseService, private route: Router) { }

  ngOnInit() {
  }

  saveKbEntry() {
    console.log("Here is the kb to be saved:");
    this.kb.category = new Category();
    this.kb.category.categoryCd = this.newCategoryCd;
    this.kb.category.categoryNm = this.newCategoryNm;
    console.log(this.kb);
    this.databaseService.saveKbEntry(this.kb).subscribe((returnedEntry: KnowledgebaseEntry) => {
      console.log("Here is the entry I got back:");
      console.log(returnedEntry);
    });
  }
}
