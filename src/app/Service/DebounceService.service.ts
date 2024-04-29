// // debounce.service.ts

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DebounceService {

//   constructor() { }

//   debounce(func: (...args: any[]) => void, delay: number): (...args: any[]) => void {
//     let timeoutId: number | undefined = undefined;
//     return (...args: any[]) => {
//       clearTimeout(timeoutId!);
//       timeoutId = setTimeout(() => {
//         func.apply(this, args);
//       },delay );
//     };
//   }
// }
