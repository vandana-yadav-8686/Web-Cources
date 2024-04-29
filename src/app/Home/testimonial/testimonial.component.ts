import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  carouselOptions = {
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  };

  testimonials = [
    {
      imageSrc: './../../../assets/testimonial-1.jpg',
      clientName: 'Client Name 1',
      profession: 'Profession 1',
      text: 'Testimonial text 1'
    },
    {
      imageSrc: './../../../assets/testimonial-2.jpg',
      clientName: 'Client Name 2',
      profession: 'Profession 2',
      text: 'Testimonial text 2'
    },
    {
      imageSrc: './../../../assets/testimonial-3.jpg',
      clientName: 'Client Name 3',
      profession: 'Profession 3',
      text: 'Testimonial text 3'
    },
    {
      imageSrc: './../../../assets/testimonial-4.jpg',
      clientName: 'Client Name 4',
      profession: 'Profession 4',
      text: 'Testimonial text 4'
    }
  ];
}
