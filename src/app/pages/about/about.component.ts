import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../shared/components/banner/banner.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, BannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
