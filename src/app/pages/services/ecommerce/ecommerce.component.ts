import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="ag-section bg-ag-bg">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="mb-4">
          <a routerLink="/services" class="text-ag-muted text-sm font-mono hover:text-ag-violet transition-colors">← Back to Services</a>
        </div>
        <div class="ag-badge mb-6"><span class="dot"></span>// 04 — ecommerce</div>
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-ag-text mb-6 tracking-tight">
          E-Commerce <span class="text-gradient">Store</span>
        </h1>
        <p class="text-ag-muted text-lg md:text-xl max-w-3xl mb-12">
          High-converting digital storefronts built with seamless payment gateways, secure checkouts, and optimized product architecture designed to maximize revenue.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-ag-teal mb-2">₹65,000</div>
            <div class="text-ag-muted text-sm font-mono">Starting Price</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-ag-violet mb-2">4–8 wks</div>
            <div class="text-ag-muted text-sm font-mono">Typical Timeline</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-ag-glow mb-2">+40%</div>
            <div class="text-ag-muted text-sm font-mono">Avg. Conversion Lift</div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div class="ag-card p-8">
            <h2 class="text-2xl font-heading font-bold text-ag-text mb-4">What's Included</h2>
            <ul class="flex flex-col gap-3 text-ag-muted text-sm leading-relaxed">
              <li class="flex items-start gap-2"><span class="text-ag-teal mt-1">✓</span> Custom storefront design & branding</li>
              <li class="flex items-start gap-2"><span class="text-ag-teal mt-1">✓</span> Payment gateway integration (Stripe, Razorpay)</li>
              <li class="flex items-start gap-2"><span class="text-ag-teal mt-1">✓</span> Product catalogue & inventory management</li>
              <li class="flex items-start gap-2"><span class="text-ag-teal mt-1">✓</span> Mobile-first responsive checkout flow</li>
              <li class="flex items-start gap-2"><span class="text-ag-teal mt-1">✓</span> SEO-optimized product pages</li>
              <li class="flex items-start gap-2"><span class="text-ag-teal mt-1">✓</span> Analytics & conversion tracking setup</li>
            </ul>
          </div>
          <div class="ag-card p-8">
            <h2 class="text-2xl font-heading font-bold text-ag-text mb-4">Tech Stack</h2>
            <ul class="flex flex-col gap-3 text-ag-muted text-sm leading-relaxed">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-teal"></span> Angular / Next.js frontend</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-teal"></span> Node.js backend API</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-teal"></span> PostgreSQL / MongoDB</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-teal"></span> AWS / Google Cloud hosting</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-teal"></span> CDN & caching for performance</li>
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
export class EcommerceComponent {}
