import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor() {}
  //subject
  CreateTask = new Subject<string>();
  onCreateTask(value: string) {
    this.CreateTask.next(value);
  }
}
