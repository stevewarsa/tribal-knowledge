import { NewKbEntryComponent } from './new-kb-entry/new-kb-entry.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: NewKbEntryComponent},
  {path: 'newentry', component: NewKbEntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
