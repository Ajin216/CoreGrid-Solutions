import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EcommerceComponent } from './pages/services/ecommerce/ecommerce.component';
import { FlutterComponent } from './pages/services/flutter/flutter.component';
import { GoogleAdsComponent } from './pages/services/google-ads/google-ads.component';
import { CustomDevComponent } from './pages/services/custom-dev/custom-dev.component';
import { WebDevelopmentComponent } from './pages/services/web-development/web-development.component';
import { SeoOptimizationComponent } from './pages/services/seo-optimization/seo-optimization.component';
import { DigitalMarketingComponent } from './pages/services/digital-marketing/digital-marketing.component';
import { GoogleBusinessProfileComponent } from './pages/services/google-business-profile/google-business-profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Web Development Agency', description: 'CoreGrid Solutions — A cutting-edge web development, SEO, and digital marketing agency.' } },
  { path: 'services', component: ServicesComponent, data: { title: 'Our Services', description: 'Explore our range of digital services including web development, SEO optimization, and digital marketing.' } },
  { path: 'services/web-development', component: WebDevelopmentComponent, data: { title: 'Web Development Services', description: 'Custom web development services building fast, scalable, and secure applications.' } },
  { path: 'services/seo-optimization', component: SeoOptimizationComponent, data: { title: 'SEO Optimization', description: 'Data-driven SEO optimization services to rank higher and increase organic traffic.' } },
  { path: 'services/digital-marketing', component: DigitalMarketingComponent, data: { title: 'Digital Marketing', description: 'Comprehensive digital marketing strategies to grow your brand and reach your audience.' } },
  { path: 'services/ecommerce', component: EcommerceComponent, data: { title: 'E-commerce Solutions', description: 'Build and scale your online store with our robust e-commerce development solutions.' } },
  { path: 'services/flutter', component: FlutterComponent, data: { title: 'Flutter App Development', description: 'Cross-platform mobile app development with Flutter for iOS and Android.' } },
  { path: 'services/google-ads', component: GoogleAdsComponent, data: { title: 'Google Ads Management', description: 'Maximize your ROI with expert Google Ads and PPC campaign management.' } },
  { path: 'services/google-business-profile', component: GoogleBusinessProfileComponent, data: { title: 'Google Business Profile Setup & Management', description: 'Claim, optimize, and manage your Google Business Profile to dominate local searches, earn 5-star reviews, and drive direct calls.' } },
  { path: 'services/custom-dev', component: CustomDevComponent, data: { title: 'Custom Development', description: 'Tailored software and custom development solutions to meet your unique business needs.' } },
  { path: 'portfolio', component: PortfolioComponent, data: { title: 'Our Portfolio', description: 'View our recent projects and success stories.' } },
  { path: 'about', component: AboutComponent, data: { title: 'About Us', description: 'Learn more about CoreGrid Solutions, our mission, and our team of digital experts.' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact Us', description: 'Get in touch with us to discuss your project and how we can help your business grow.' } },
  { path: '404', component: NotFoundComponent, data: { title: 'Page Not Found', description: 'The page you are looking for does not exist.' } },
  { path: '**', component: NotFoundComponent, data: { title: 'Page Not Found', description: 'The page you are looking for does not exist.' } }
];
