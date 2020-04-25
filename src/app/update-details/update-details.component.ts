import { Component, OnInit } from '@angular/core';
import {Observable, from} from "rxjs";
import {ProductService} from "../product.service";
import {Product} from "../product";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  id: number;
  product :Product;
  submitted=false;
  products: Observable<Product[]>;
  constructor(private route: ActivatedRoute,private router:Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.product= new Product();

    this.id=this.route.snapshot.params['id'];

    this.productService.getProduct(this.id)
    .subscribe(data => {
      console.log(data)
      this.product=data;
    },error => console.log(error));
  }
  
  onSubmit(){
    this.updateProduct();
  }

  reloadDta()
  {
    this.products=this.productService.getProductsList();
  }
  gotoList()
  {
    this.router.navigate(['/products']);
  }
  updateProduct()
  {
    this.productService.updateProduct(this.id,this.product)
    .subscribe(data=>console.log(data),error=> console.log(error));

    this.product=new Product();
    this.reloadDta();
    this.gotoList();
  }

}
