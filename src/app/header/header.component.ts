import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [QRCodeModule,FormsModule,NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
   
  qrdata = "thamu qr ";

}
// import { QRCodeModule } from 'angularx-qrcode';

// @NgModule({
//   declarations: [...],
//   imports: [QRCodeModule],
//   ...
// })
// export class AppModule { }





