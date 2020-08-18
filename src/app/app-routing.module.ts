import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { MianLayoutComponent } from './pages/mian-layout/mian-layout.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';


const routes: Routes = [
  {path:'',component:MianLayoutComponent, children: [
    {path:'',component:NotesListComponent},
    {path:':new',component:NoteDetailsComponent},
    {path:':id',component:NoteDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
