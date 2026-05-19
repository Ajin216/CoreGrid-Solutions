import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-google-ads',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="ag-section exact-navy-gradient animate-section-wrapper" style="position:relative;overflow:hidden;">
      <!-- Drifting dot grid background -->
      <div class="moving-dot-grid"></div>

      <!-- Background Space Orbs -->
      <div class="celestial-decorations">
        <div class="space-orb orb-violet-glow" style="top:10%;left:5%;width:250px;height:250px;"></div>
        <div class="space-orb orb-teal-glow" style="bottom:15%;right:5%;width:300px;height:300px;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div class="mb-4">
          <a routerLink="/services" class="text-[#00E5C3] text-sm font-mono hover:text-white transition-colors">← Back to Services</a>
        </div>
        <div class="ag-badge mb-6 badge-pulse-blink" style="color:#00E5C3;border-color:rgba(0,229,195,0.3);"><span class="dot" style="background-color:#00E5C3;"></span>// 06 — advertising</div>
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
          Google Ads <span class="text-[#00E5C3]">Management</span>
        </h1>
        <p class="text-white text-lg md:text-xl max-w-3xl mb-12">
          Precision-targeted PPC campaigns, high-intent search ads, and strategic remarketing funnels engineered to maximize ROI and dramatically lower your customer acquisition costs.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">₹20,000</div>
            <div class="text-white text-sm font-mono">Starting at / month</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">−35%</div>
            <div class="text-white text-sm font-mono">Avg. CAC Reduction</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">3× ROAS</div>
            <div class="text-white text-sm font-mono">Avg. Return on Ad Spend</div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div class="ag-card p-8">
            <h2 class="text-2xl font-heading font-bold text-[#00E5C3] mb-4">What's Included</h2>
            <ul class="flex flex-col gap-3 text-white text-sm leading-relaxed">
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> Campaign strategy & keyword research</li>
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> Search, Display, Shopping & YouTube ads</li>
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> A/B testing of ad copy & creatives</li>
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> Conversion tracking & attribution setup</li>
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> Monthly performance reporting</li>
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> Remarketing audience management</li>
            </ul>
          </div>
          <div class="ag-card p-8">
            <h2 class="text-2xl font-heading font-bold text-[#00E5C3] mb-4">Tools We Use</h2>
            <ul class="flex flex-col gap-3 text-white text-sm leading-relaxed">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00E5C3]"></span> Google Ads Manager</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00E5C3]"></span> Google Analytics 4</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00E5C3]"></span> Google Tag Manager</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00E5C3]"></span> SEMrush for competitor intel</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00E5C3]"></span> Looker Studio dashboards</li>
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
export class GoogleAdsComponent {}
