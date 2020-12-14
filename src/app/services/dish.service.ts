import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  //Initial Method
  /*getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }*/

  //With promises
  /*getDishes(): Promise<Dish[]> {
    return new Promise(resolve => {
      //Simulate server latency with 2 second delay
      setTimeout(() => resolve(DISHES), 2000);
    });
  }*/

  //With RxJS toPromise
  /*getDishes(): Promise<Dish[]> {
    return of(DISHES).pipe(delay(2000)).toPromise();
  }*/

  //With RxJS Observable
  /*getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }*/

  //using json-server
  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes');
  }
 

  //initial method
  /*getDish(id: string): Promise<Dish> {
    return Promise.resolve(DISHES.filter( (dish) => (dish.id === id ))[0]);
  }*/

  //with promise
  /*getDish(id: string): Promise<Dish> {
    return new Promise(resolve => {
      //Simulate server latency with 2 second delay
      setTimeout(() => resolve(DISHES.filter( (dish) => (dish.id === id ))[0]), 2000);
    });
  }*/

  //with RxJS toPromise
  /*getDish(id: string): Promise<Dish> {
    return of(DISHES.filter( (dish) => (dish.id === id ))[0]).pipe(delay(2000)).toPromise();
  }*/

  //With RxJS Observable
  /*getDish(id: string): Observable<Dish> {
    return of(DISHES.filter( (dish) => (dish.id === id ))[0]).pipe(delay(2000));
  }*/

  //using json-server
  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/' + id);
  }

  //Initial Method
  /*getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.filter( (dish) => dish.featured )[0]);
  }*/

  //With Promise
  /*getFeaturedDish(): Promise<Dish> {
    return new Promise(resolve => {
      //Simulate server latency with 2 second delay
      setTimeout(() => resolve(DISHES.filter( (dish) => dish.featured )[0]), 2000);
    });
  }*/

  //With RxJS toPromise
  /*getFeaturedDish(): Promise<Dish> {
    return of(DISHES.filter( (dish) => dish.featured )[0]).pipe(delay(2000)).toPromise();
  }*/

  //With RxJS Observable
  /*getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter( (dish) => dish.featured )[0]).pipe(delay(2000));
  }*/

  //using json-server
  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]));
  }

  /*getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id));
  }*/

  //using json-server
  getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }
    
}
