import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ecommerce',
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
        <div class="ag-badge mb-6 badge-pulse-blink" style="color:#00E5C3;border-color:rgba(0,229,195,0.3);"><span class="dot" style="background-color:#00E5C3;"></span>// 04 — ecommerce</div>
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
          E-Commerce <span class="text-[#00E5C3]">Store</span>
        </h1>
        <p class="text-white text-lg md:text-xl max-w-3xl mb-12">
          High-converting digital storefronts built with seamless payment gateways, secure checkouts, and optimized product architecture designed to maximize revenue.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">₹65,000</div>
            <div class="text-white text-sm font-mono">Starting Price</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">4–8 wks</div>
            <div class="text-white text-sm font-mono">Typical Timeline</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">+40%</div>
            <div class="text-white text-sm font-mono">Avg. Conversion Lift</div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div class="ag-card p-8">
            <h2 class="text-2xl font-heading font-bold text-[#00E5C3] mb-4">What's Included</h2>
            <ul class="flex flex-col gap-3 text-white text-sm leading-relaxed">
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> Custom storefront design & branding</li>
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> Payment gateway integration (Stripe, Razorpay)</li>
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> Product catalogue & inventory management</li>
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> Mobile-first responsive checkout flow</li>
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> SEO-optimized product pages</li>
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> Analytics & conversion tracking setup</li>
            </ul>
          </div>
          <div class="ag-card p-8">
            <h2 class="text-2xl font-heading font-bold text-[#00E5C3] mb-4">Tech Stack</h2>
            <ul class="flex flex-col gap-3 text-white text-sm leading-relaxed">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00E5C3]"></span> Angular / Next.js frontend</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00E5C3]"></span> Node.js backend API</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00E5C3]"></span> PostgreSQL / MongoDB</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00E5C3]"></span> AWS / Google Cloud hosting</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00E5C3]"></span> CDN & caching for performance</li>
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
