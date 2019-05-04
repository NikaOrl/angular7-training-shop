import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FeedbackService } from 'src/app/core/services/feedback.service';

@Component({
  selector: 'app-product-feedback',
  templateUrl: './product-feedback.component.html',
  styleUrls: ['./product-feedback.component.scss'],
})
export class ProductFeedbackComponent implements OnInit {
  id: number;
  feedback: string;

  constructor(
    private feedbackService: FeedbackService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('productID');
  }

  onFeedback(): void {
    if (this.feedback) {
      this.feedbackService.addFeedback(this.id, this.feedback);
      this.feedback = '';
    }
  }

  getFeedback(): string[] {
    return this.feedbackService.getFeedback(this.id);
  }
}
