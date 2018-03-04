import { Component } from '@angular/core';

@Component({
  selector: 'get-footer',
  templateUrl: 'get-footer.html'
})
export class GetFooterComponent {
  year: number = new Date().getFullYear();

  constructor() { }

}
