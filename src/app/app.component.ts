import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jwalary';
  products = [
    {
      name: 'Lipstick',
      imageLink: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61bzAvFrYeL._SX466_.jpg' // Replace with your actual live image link
    },
    {
      name: 'Foundation',
      imageLink: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/31A18wVmT6L._SY445_SX342_QL70_FMwebp_.jpg' // Replace with your actual live image link
    },
    {
      name: 'Foundation',
      imageLink: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61U-25z0I5L._SX522_.jpg' // Replace with your actual live image link
    },
    {
      name: 'Foundation',
      imageLink: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/21uzTh6DhdL._SY445_SX342_QL70_FMwebp_.jpg' // Replace with your actual live image link
    },
    {
      name: 'Foundation',
      imageLink: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71eQ4WrYBuL._AC._SR360,460.jpg' // Replace with your actual live image link
    },
    {
      name: 'Foundation',
      imageLink: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51eybgp9euL._AC._SR360,460.jpg' // Replace with your actual live image link
    },

    {
      name: 'Foundation',
      imageLink: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61NFkX7td8L._AC._SR360,460.jpg' // Replace with your actual live image link
    },
    {
      name: 'Foundation',
      imageLink: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61i92FEieUL._AC._SR360,460.jpg' // Replace with your actual live image link
    },

  ]

  constructor() {
    console.log(this.products)

  }

}
