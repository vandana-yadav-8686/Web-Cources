import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-courses',
  templateUrl: './featured-courses.component.html',
  styleUrls: ['./featured-courses.component.css']
})
export class FeaturedCoursesComponent {

  debounceDelay = 500; // Adjust debounce delay as needed

  filter(filterValue: string) {
    console.log('Filtering by:', filterValue);
    // Perform your filtering logic here without debounce
  }
}
