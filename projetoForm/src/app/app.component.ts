import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

//RouterLinkActive,
@Component({
  selector: 'app-root',
  imports: [    
    RouterOutlet,    
    RouterLink,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetoForm';
}
