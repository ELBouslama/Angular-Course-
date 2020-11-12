import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

private todos : Todo[] = [ new Todo("Angular","Projet tp à faire ") , new Todo("Nest","Projet tp à faire 2 ")] ;


  constructor() { }

  getTodos() {
    return this.todos ;
  }

  addTodo( newTodo : Todo) {
    this.todos.push(newTodo) ;
  }

  removeTodo(index: number) { 
    this.todos.splice(index,1) ; 
  }
  logAllTodos(){
    console.log(this.todos)
  }
}
