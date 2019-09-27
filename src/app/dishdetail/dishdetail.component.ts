import { DishService } from './../services/dish.service';
import { Component, OnInit } from "@angular/core";
import { Dish } from "../shared/dish";
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"]
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  constructor(private dishService:DishService, 
    private route: ActivatedRoute,
    private location:Location) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log("id = " + id);
    this.dish = this.dishService.getDish(id);
  }

  goBack() : void{
    this.location.back();
  }
}