import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MasterService } from 'src/app/Service/master.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  constructor(private masterService: MasterService) {}

  task = '';
  ngOnInit(): void {}
  onCreate() {
    if (this.task) {
      console.log(this.task);
      this.masterService.onCreateTask(this.task);
    }
  }
}
