import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit{
  private readonly orderService = inject(OrderService);
  orders:Order[]=[];

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data)=>{
      this.orders=data;
    })
  }
}
