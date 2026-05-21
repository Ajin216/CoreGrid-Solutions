import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../shared/components/banner/banner.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, BannerComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {}
