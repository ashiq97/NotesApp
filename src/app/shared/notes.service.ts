import { Injectable } from '@angular/core';
import { note } from './note.module';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: note[] = new Array<note>();
  constructor() { }

  getAll(){
    return this.notes;
  }

  get(id:number){
    return this.notes[id];
  }

  getId(note:note){
    return this.notes.indexOf(note);
  }
  
  add(note:note){
    // this method will add a note to the notes array return the id of the note 
    // where the id = index
    let newLength = this.notes.push(note);
    let index = newLength - 1;
    return index;
  }

  update(id:number,title:string,body:string){
    let note = this.notes[id];
    note.title = title;
    note.body = body;
  }

  delete(id:number){
    this.notes.splice(id,1);
  }


}
