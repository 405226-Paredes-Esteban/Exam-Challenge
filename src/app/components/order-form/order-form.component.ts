import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../services/order/order.service';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent {
  private readonly orderService = inject(OrderService);
  private readonly productService = inject(ProductService);

  formOrder:FormGroup =new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    products:new FormArray([])
  })

  
}
