import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-digital-marketing',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="ag-section bg-ag-bg">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="mb-4">
          <a routerLink="/services" class="text-ag-muted text-sm font-mono hover:text-ag-violet transition-colors">← Back to Services</a>
        </div>
        <div class="ag-badge mb-6"><span class="dot"></span>// 03 — marketing</div>
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-ag-text mb-6 tracking-tight">
          Digital <span class="text-gradient">Marketing</span>
        </h1>
        <p class="text-ag-muted text-lg md:text-xl max-w-3xl mb-12">
          Paid ads, social media campaigns, and full-funnel marketing strategies calibrated to maximise ROI, build lasting brand loyalty, and drive measurable growth.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-ag-glow mb-2">₹25,000</div>
            <div class="text-ag-muted text-sm font-mono">Starting at / month</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-ag-violet mb-2">5× ROI</div>
            <div class="text-ag-muted text-sm font-mono">Average Return</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-ag-teal mb-2">Multi-Channel</div>
            <div class="text-ag-muted text-sm font-mono">Campaign Coverage</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div class="ag-card p-8">
            <h2 class="text-2xl font-heading font-bold text-ag-text mb-4">What's Included</h2>
            <ul class="flex flex-col gap-3 text-ag-muted text-sm leading-relaxed">
              <li class="flex items-start gap-2"><span class="text-ag-glow mt-1">✓</span> Social media strategy & content calendar</li>
              <li class="flex items-start gap-2"><span class="text-ag-glow mt-1">✓</span> Meta (Facebook & Instagram) ad campaigns</li>
              <li class="flex items-start gap-2"><span class="text-ag-glow mt-1">✓</span> Audience targeting & lookalike modelling</li>
              <li class="flex items-start gap-2"><span class="text-ag-glow mt-1">✓</span> Creative design for ads & organic posts</li>
              <li class="flex items-start gap-2"><span class="text-ag-glow mt-1">✓</span> Email marketing & automation sequences</li>
              <li class="flex items-start gap-2"><span class="text-ag-glow mt-1">✓</span> Monthly performance & attribution reports</li>
            </ul>
          </div>
          <div class="ag-card p-8">
            <h2 class="text-2xl font-heading font-bold text-ag-text mb-4">Platforms We Master</h2>
            <ul class="flex flex-col gap-3 text-ag-muted text-sm leading-relaxed">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-glow"></span> Meta Ads (Facebook & Instagram)</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-glow"></span> Google Ads & YouTube</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-glow"></span> LinkedIn for B2B campaigns</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-glow"></span> Mailchimp / Klaviyo email</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-glow"></span> Google Analytics 4 & Tag Manager</li>
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
export class DigitalMarketingComponent {}
