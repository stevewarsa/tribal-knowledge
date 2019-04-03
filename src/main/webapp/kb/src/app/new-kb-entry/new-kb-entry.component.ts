import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';
import { KnowledgebaseEntry } from '../knowledgebase-entry';
import { Category } from '../category';

@Component({
  templateUrl: './new-kb-entry.component.html',
  styleUrls: ['./new-kb-entry.component.css']
})
export class NewKbEntryComponent implements OnInit {
  initializing: boolean = false;
  initializingMessage: string = null;
  errorMessage: string = null;
  newCategoryNm: string = null;
  newCategoryCd: string = null;
  kb: KnowledgebaseEntry = new KnowledgebaseEntry();
  categories: Category[] = [];
  selectedCategory: Category = null;
  showForm: boolean = false;

  constructor(private databaseService: DatabaseService, private route: Router) { }

  ngOnInit() {
    this.initializing = true;
    this.initializingMessage = "Retrieving all categories...";
    this.databaseService.getAllCategories().subscribe((categories: Category[]) => {
      console.log(categories);
      this.categories = categories;
      this.initializing = false;
      this.initializingMessage = null;
    })
  }

  saveKbEntry() {
    console.log("Here is the kb to be saved:");
    if (this.newCategoryCd && this.newCategoryNm) {
      this.kb.category = new Category();
      this.kb.category.categoryCd = this.newCategoryCd;
      this.kb.category.categoryNm = this.newCategoryNm;
    } else {
      this.kb.category = this.selectedCategory;
    }
    console.log(this.kb);
    this.databaseService.saveKbEntry(this.kb).subscribe((returnedEntry: KnowledgebaseEntry) => {
      console.log("Here is the entry I got back:");
      console.log(returnedEntry);
      this.route.navigate(['']);
    });
  }

  home() {
    this.route.navigate(['']);
  }
}
