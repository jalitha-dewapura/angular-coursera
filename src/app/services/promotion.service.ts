import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  /*getPromotions(): Promotion[] {
    return PROMOTIONS;
  }*/

  getPromotions(id: string): Promise<Promotion[]> {
    return new Promise(resolve => {
      //Simulate server latency with 2 second delay
      setTimeout(() => resolve(PROMOTIONS), 2000);
    });
  }

  /*getPromotion(id: string): Promotion {
    return PROMOTIONS.filter( (promotion) => (promotion.id === id ))[0];
  }*/

  getPromotion(id: string): Promise<Promotion> {
    return new Promise(resolve => {
      //Simulate server latency with 2 second delay
      setTimeout(() => resolve(PROMOTIONS.filter( (promotion) => (promotion.id === id ))[0]), 2000);
    });
  }
  
  /*getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter( (promotion) => promotion.featured )[0];
  }*/

  getFeaturedPromotion(): Promise<Promotion> {
    return new Promise(resolve => {
      //Simulate server latency with 2 second delay
      setTimeout(() => resolve(PROMOTIONS.filter( (promotion) => promotion.featured )[0]), 2000);
    });
  }
}
