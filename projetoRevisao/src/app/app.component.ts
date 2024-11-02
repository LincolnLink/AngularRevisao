import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [   
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetoRevisao';
  //shouldRun: any;

  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  //   }
  // }
  //if(typeof window !== 'undefined'){   
  //}  
  //shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);


  
}
