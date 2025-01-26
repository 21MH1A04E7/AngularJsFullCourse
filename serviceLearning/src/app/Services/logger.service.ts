import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  LoggMessage(name: string, status: string) {
    console.log(
      `a new user with user ${name} with status ${status} is added to user list`
    );
  }
}
