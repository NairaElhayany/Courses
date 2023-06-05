import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {

  }
  courses= [
    {'id':1,'name':'Learn HTML','description':'HTML is the foundation of all web pages. Without HTML, you wouldn’t be able to organize text or add images or videos to your web pages. HTML is the beginning of everything you need to know to create engaging web pages! You will learn all the common HTML tags used to structure HTML pages, the skeleton of all websites. You will also be able to create HTML tables to present tabular data efficiently.','image':"../../assets/img/1.png"},
    {'id':2,'name':'Learn CSS','description':'Without CSS, every web page would be drab plain text and images that flowed straight down the page. With CSS, you can add color and background images and change the layout of your page — your web pages can feel like works of art! You will learn many aspects of styling web pages! You’ll be able to set up the correct file structure, edit text and colors, and create attractive layouts. With these skills, you’ll be able to customize the appearance of your web pages to suit your every need! We recommend that you complete Learn HTML before learning CSS.','image':"../../assets/img/2.jpg"},
    {'id':3,'name':'Learn JS','description':'JavaScript is a fun and flexible programming language. It’s one of the core technologies of web development and can be used on both the front-end and the back-end.','image':"../../assets/img/3.png"},
    {'id':4,'name':'Learn PHP','description':' PHP is a general-purpose scripting language widely used as a server-side language for creating dynamic web pages. Though its reputation is mixed, PHP is still extremely popular and is used in over 75% of all websites where the server-side programming language is known.','image':"../../assets/img/4.png"},
    {'id':5,'name':'Learn Angular','description':'Angular is a development platform, built on TypeScript. As a platform','image':"../../assets/img/20.png"},
    {'id':5,'name':'Learn Typescript','description':'TypeScript is a strongly typed programming language that builds on JavaScript','image':"../../assets/img/22.png"},
    {'id':5,'name':'Learn Nodejs','description':'Node.js® is a JavaScript runtime built on Chromes V8 JavaScript engine.','image':"../../assets/img/nj.png"},
    {'id':8,'name':'Learn Reactjs','description':' framework is an open-source JavaScript framework and library developed by Facebook','image':"../../assets/img/21.jpg"},
    {'id':9,'name':'Learn mySQL','description':'MySQL Database Service is a fully managed database service to deploy cloud-native applications. HeatWave, an integrated, high-performance query accelerator boosts MySQL performance by 5400x.','image':"../../assets/img/8.jpg"},
    {'id':10,'name':'Learn Laravel','description':'Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','image':"../../assets/img/6.png"},
  ]
}
