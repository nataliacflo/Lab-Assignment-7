import { Component } from '@angular/core';
import { ToastService } from './toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toast-app';
  toastTypes: Array<string> = [];
  constructor(private toastService: ToastService) {
    this.toastTypes = ['success', 'info', 'warning', 'danger'];
  }

  // success, info, warning, danger
  showToast() {

    const random = Math.floor(Math.random() * 4);
    const toastType = this.toastTypes[random];
    const toastMessage = 'Hi, this is a message. My random number is: ' + random;
    const duration = 4000;
    this.toastService.showToast(toastType, toastMessage, duration);
  }
}
