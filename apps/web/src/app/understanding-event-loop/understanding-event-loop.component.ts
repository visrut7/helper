import { Component } from '@angular/core';

@Component({
  selector: 'app-understanding-event-loop',
  standalone: true,
  imports: [],
  templateUrl: './understanding-event-loop.component.html',
  styleUrl: './understanding-event-loop.component.css',
})
export class UnderstandingEventLoopComponent {
  blockMainThread() {
    console.log(`thread is blocked on: ${this.getCurrentTime()}`);
    this.syncDelay(2000);
    console.log(`thread is released on: ${this.getCurrentTime()}`);
  }

  async asyncDelayWithoutBlockingMainThread() {
    console.log(`function called on: ${this.getCurrentTime()}`);
    await this.asyncDelay(2000);
    console.log(`function execution done on: ${this.getCurrentTime()}`);
  }

  syncDelay(milliseconds: number) {
    const startTime = Date.now();
    while (Date.now() - startTime < milliseconds) {}
  }

  asyncDelay(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  private getCurrentTime() {
    return new Date(Date.now()).toLocaleTimeString('in', { hour12: true });
  }
}
