import { Component } from '@angular/core';
import { LoadingService } from '../../core/services/loading.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;
  user = {
    name: 'Felipe'
  }
  isLoading = false
  constructor(private loadingService: LoadingService) {
    this.loadingService.isLoading$.subscribe({
      next: (value) => {
        this.isLoading = value;
      }
    })
  }
}
