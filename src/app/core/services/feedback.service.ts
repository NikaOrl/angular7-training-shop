import { Injectable } from '@angular/core';

import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule,
})
export class FeedbackService {
  private feedback: Map<number, []> = new Map();

  addFeedback(id: number, feedback: string): void {
    const currentDate = new Date();
    if (this.feedback[id]) {
      this.feedback[id].push(`${feedback} at ${currentDate.toLocaleString()}`);
    } else {
      this.feedback[id] = [];
      this.feedback[id][0] = `${feedback} at ${currentDate.toLocaleString()}`;
    }
  }

  getFeedback(id: number): Array<string> {
    return this.feedback[id];
  }
}
