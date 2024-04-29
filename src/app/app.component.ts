import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TestProject';

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    // this.router.events.pipe(filter(v => v instanceof RouterEvent), map((v => v))).subscribe((value: any) => console.log(value.url))
  }

  public navigate() {
    this.router.navigate(['test', 'home']) // test/home
  }
}
