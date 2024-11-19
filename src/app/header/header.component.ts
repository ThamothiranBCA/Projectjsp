import { NgOptimizedImage } from '@angular/common';
import { Component ,OnInit,Renderer2, ElementRef} from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  headingText: string = 'About us';

  constructor() {} 
  ngOnInit(): void { this.changeHeading(); }

  changeHeading(): void 
  { setTimeout(() =>
    { this.headingText = 'About me'; },
   3000); } 
  // constructor(public renderer: Renderer2, private el: ElementRef) {}
  // ngOnInit(): void { this.updateNavigationText(); }

  // updateNavigationText()  { 
  //   const links = this.el.nativeElement.querySelectorAll('#main-navigation a'); 
  //   setTimeout(() =>{
  //   this.renderer.setProperty(links[0], 'innerHTML', 'About Us Updated'); 
  // },30000)
   }





  
//  changeHeading() {
//   setTimeout(() =>{
//       .textContent = 'see, I am from planet Mars!'
//   },3000)
// }






