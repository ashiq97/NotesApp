import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { note } from 'src/app/shared/note.module';
import { NotesService } from 'src/app/shared/notes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  
  note:note;
  noteId:number;
  new:boolean;

  constructor(private noteService: NotesService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    // we want find out if we are creating a new note or editing an existing one
    this.route.params.subscribe((params: Params) => {
      this.note = new note();
      if(params.id){
        this.note = this.noteService.get(params.id);
        this.noteId = params.id;
        this.new = false;
      }
      else{
        this.new = true;
      }
    })
  }
  onSubmit(form: NgForm){
    if(this.new){
      // console.log(form);  
      this.noteService.add(form.value);
    }
    else{
      this.noteService.update(this.noteId,form.value.title,form.value.body);
    }
    this.router.navigateByUrl('/');
  }

  cancel(){
    this.router.navigateByUrl('/');
  }
}
