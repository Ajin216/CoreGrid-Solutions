import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../shared/components/banner/banner.component';

@Component({
  selector: 'app-services',
  imports: [RouterLink, BannerComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent { }
