import { Component, OnInit } from '@angular/core';
import { note } from 'src/app/shared/note.module';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes : note[] =  new Array<note>();

  constructor(private noteService:NotesService) { }

  ngOnInit(): void {
    //retreve all notes from Noteservice
    this.notes = this.noteService.getAll();

  }
deleteNote(id:number){
  this.noteService.delete(id);
}
}
