import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { MasterService } from 'src/app/Service/master.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css'],
})
export class ShowTaskComponent implements OnInit, OnDestroy {
  constructor(private masterSerive: MasterService) {}
  tasks: any[] = ['task1', 'task2', 'task3'];
  private createTaskObservable: Subscription;
  ngOnInit(): void {
    this.createTaskObservable = this.masterSerive.CreateTask.subscribe({
      next: (val) => {
        console.log('show task', val);
        this.tasks.push(val);
      },
      error: (error) => console.log(error),
      complete: () => console.log('competed'),
    });
  }
  ngOnDestroy(): void {
    if (this.createTaskObservable) {
      this.createTaskObservable.unsubscribe();
    }
  }
}
