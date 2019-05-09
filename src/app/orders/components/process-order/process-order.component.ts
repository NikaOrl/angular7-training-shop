import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

import { OrderProcess } from '../../models/order.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css'],
})
export class ProcessOrderComponent implements OnInit {
  orderData: OrderProcess;
  orderForm: FormGroup;
  validationMessage: string;

  private validationMessagesMap = {
    email: {
      required: 'Please enter your email address.',
      email: 'Please enter a valid email address.',
    },
    clientName: {
      required: 'Please enter your name.',
      minlength: 'Your name should be at least 3 symbols long.',
    },
  };

  constructor(
    private ordersService: OrdersService,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  get phones(): FormArray {
    return <FormArray>this.orderForm.get('phones');
  }

  ngOnInit(): void {
    this.orderData = {
      clientName: '',
      email: '',
      phoneNumbers: null,
      address: null,
    };
    this.createForm();
  }

  onBlur(type: string) {
    const emailControl = this.orderForm.get(type);
    this.setValidationMessage(emailControl, type);
  }

  onOrder(): void {
    this.orderData.clientName = this.orderForm.get('clientName').value;
    this.orderData.email = this.orderForm.get('email').value;
    if (this.orderForm.get('phones').value) {
      this.orderData.phoneNumbers = this.orderForm.get('phones').value;
    }
    if (this.orderForm.get('address').value) {
      this.orderData.address = this.orderForm.get('address').value;
    }
    this.ordersService.onOrder(this.orderData);
    this.router.navigate(['/']);
  }

  onAddPhone(): void {
    this.phones.push(this.buildPhone());
  }

  onDeletePhone(index: number): void {
    this.phones.removeAt(index);
  }

  private createForm(): void {
    this.orderForm = this.fb.group({
      clientName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phones: this.fb.array([this.buildPhone()]),
      needDelivery: false,
      address: '',
    });
  }

  private buildPhone(): FormControl {
    return new FormControl();
  }

  private setValidationMessage(c: AbstractControl, controlName: string): void {
    this.validationMessage = '';

    if ((c.touched || c.dirty) && c.errors) {
      this.validationMessage = Object.keys(c.errors)
        .map(key => this.validationMessagesMap[controlName][key])
        .join(' ');
    }
  }
}
