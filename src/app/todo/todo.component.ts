import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  taskArray=[{taskName:'brush teeth',isCompleted:false}]

  //onSubmit Method
  onSubmit(form : NgForm){
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })
    console.log(form);
    form.reset();
  }

  //onDelete Method
  onDelete(index: number){
    this.taskArray.splice(index,1)
  }

  //onCheck Method
  onCheck(index:number){
    console.log(this.taskArray);
    this.taskArray[index].isCompleted=!this.taskArray[index].isCompleted;
  }


}
