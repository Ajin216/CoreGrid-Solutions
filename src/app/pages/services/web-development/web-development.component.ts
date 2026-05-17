import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-web-development',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="ag-section bg-ag-bg">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="mb-4">
          <a routerLink="/services" class="text-ag-muted text-sm font-mono hover:text-ag-violet transition-colors">← Back to Services</a>
        </div>
        <div class="ag-badge mb-6"><span class="dot"></span>// 01 — web_dev</div>
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-ag-text mb-6 tracking-tight">
          Web <span class="text-gradient">Development</span>
        </h1>
        <p class="text-ag-muted text-lg md:text-xl max-w-3xl mb-12">
          Pixel-perfect, blazing-fast websites and web applications built on Angular, React, and Next.js — engineered for conversion, authority, and infinite scale.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-ag-violet mb-2">₹40,000</div>
            <div class="text-ag-muted text-sm font-mono">Starting Price</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-ag-teal mb-2">3–6 wks</div>
            <div class="text-ag-muted text-sm font-mono">Typical Timeline</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-ag-glow mb-2">100%</div>
            <div class="text-ag-muted text-sm font-mono">Mobile-First Responsive</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div class="ag-card p-8">
            <h2 class="text-2xl font-heading font-bold text-ag-text mb-4">What's Included</h2>
            <ul class="flex flex-col gap-3 text-ag-muted text-sm leading-relaxed">
              <li class="flex items-start gap-2"><span class="text-ag-violet mt-1">✓</span> Custom UI/UX design & prototyping</li>
              <li class="flex items-start gap-2"><span class="text-ag-violet mt-1">✓</span> Responsive layout for all screen sizes</li>
              <li class="flex items-start gap-2"><span class="text-ag-violet mt-1">✓</span> CMS integration (headless or traditional)</li>
              <li class="flex items-start gap-2"><span class="text-ag-violet mt-1">✓</span> Core Web Vitals optimization (LCP, CLS, FID)</li>
              <li class="flex items-start gap-2"><span class="text-ag-violet mt-1">✓</span> On-page SEO foundation & sitemap</li>
              <li class="flex items-start gap-2"><span class="text-ag-violet mt-1">✓</span> Analytics integration & deployment</li>
            </ul>
          </div>
          <div class="ag-card p-8">
            <h2 class="text-2xl font-heading font-bold text-ag-text mb-4">Tech Stack</h2>
            <ul class="flex flex-col gap-3 text-ag-muted text-sm leading-relaxed">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-violet"></span> Angular 19 / React / Next.js</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-violet"></span> Tailwind CSS & component libraries</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-violet"></span> Node.js backend APIs</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-violet"></span> AWS / Google Cloud hosting & CDN</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-violet"></span> CI/CD with GitHub Actions</li>
            </ul>
          </div>
        </div>

        <div class="text-center">
          <a routerLink="/contact" class="btn-primary">Get a Free Consultation →</a>
        </div>
      </div>
    </section>
  `
})
export class WebDevelopmentComponent {}
