import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-manager',
  templateUrl: './todo-manager.component.html',
  styleUrls: ['./todo-manager.component.css']
})
export class TodoManagerComponent implements OnInit {
  name :string = "" ; 
  contenu : string = "" ;
  todos : Todo[] = [] ; 

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos() ;
  }

  addTodo(name :string , contenu : string ) {
    this.todoService.addTodo(new Todo(name,contenu)) ;
    this.name="" ; 
    this.contenu="" ; 
  }
  removeTodo(index: number) { 
    this.todoService.removeTodo(index) ; 
  }

  getValid() {
    return (this.name.length ==0 || this.contenu.length ==0) ;
  }
}
