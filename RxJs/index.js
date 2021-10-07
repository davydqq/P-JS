import { pipe, of, from, interval } from 'rxjs';
import {mergeMap, concatMap, switchMap, exhaustMap, map, delay, mergeAll } from 'rxjs/operators';


const data = of([
  {
    brand: 'porsche',
    model: '911'
  },
  {
    brand: 'porsche',
    model: 'macan'
  },
  {
    brand: 'ferarri',
    model: '458'
  },
  {
    brand: 'lamborghini',
    model: 'urus'
  }
]);

const getData = (param) => {
  return of(`retrieved new data with param ${param}`).pipe(
    delay(1200)
  )
}

// from([1,2,3,4]).pipe(map(param => getData(param))).subscribe(val => console.log(val));

// from([1,2,3,4]).pipe(map(param => getData(param))).subscribe(val => val.subscribe(data => console.log(data)));

// from([1,2,3,4]).pipe(map(param => getData(param)), mergeAll()).subscribe(val => console.log(val));

interval(1000).pipe(mergeMap(param => getData(param))).subscribe(val => console.log(val));

// from([1,2,3,4]).pipe(map(param => getData(param)), switchAll()).subscribe(val => console.log(val));

interval(1000).pipe(switchMap(param => getData(param))).subscribe(val => console.log(val));