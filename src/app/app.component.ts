import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dev-proxy';

  data: any;

  constructor(private corsService: DataService) {}

  ngOnInit(): void {
    this.corsService.getData().subscribe(
      data => {
        console.log(data);
        this.data = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
