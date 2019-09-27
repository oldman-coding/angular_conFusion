import { PROMOTIONS } from './../shared/promotions';
import { Injectable } from '@angular/core';
import {Promotion} from './../shared/promotion';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  getPromotions() : Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id:string): Promotion {
    return PROMOTIONS.filter((promotion)=> promotion.id===id)[0];
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promotion)=> promotion.featured)[0];
  }
  
  constructor() { }
}
