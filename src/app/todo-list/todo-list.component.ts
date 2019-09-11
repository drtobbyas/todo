import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos = [
    {
      title: "Build an Angular app",
      desc: "Build a todo app with Angular"
    },
    {
      title: "Build a React app",
      desc: "Build a todo with React"
    },
    {
      title: "Create a backend",
      desc: "Create a backend with Loopback.js"
    },
    {
      title: "use GraphQL",
      desc: "Use GraphQL to create API"
    },
    {
      title: "Build a Trello clone",
      desc: "Build a clone of the popular project and task management app: Trello"
    },
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
