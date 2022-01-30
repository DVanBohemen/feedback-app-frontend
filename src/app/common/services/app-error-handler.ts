import {ErrorHandler} from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    alert(error);
    console.log(error);
  }
}
