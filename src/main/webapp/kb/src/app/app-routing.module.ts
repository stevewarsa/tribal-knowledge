import { KnowledgebaseListComponent } from './knowledgebase-list/knowledgebase-list.component';
import { NewKbEntryComponent } from './new-kb-entry/new-kb-entry.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: KnowledgebaseListComponent},
  {path: 'newentry', component: NewKbEntryComponent},
  {path: 'home', component: NewKbEntryComponent},
  {path: 'list', component: KnowledgebaseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
