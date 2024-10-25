import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html'
})
export default class LoginComponent {
  imgRight = signal('https://res.cloudinary.com/djp3pbhfg/image/upload/v1729884068/udrawright_tt3u7g.webp');
  imgLeft = signal('https://res.cloudinary.com/djp3pbhfg/image/upload/v1729884068/udrawleft_twnna6.webp');
  imgTrello = signal('https://res.cloudinary.com/djp3pbhfg/image/upload/v1729884067/trelloLogo_kccptn.webp');
}
