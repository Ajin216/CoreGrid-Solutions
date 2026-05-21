import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../shared/components/banner/banner.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [RouterLink, BannerComponent],
  template: `
    <app-banner 
      badgeText="E-Commerce Solutions"
      title="Supercharge Your"
      highlightTitle="Online Sales"
      quote="Build powerful, user-friendly e-commerce platforms designed to increase sales and enhance customer experience."
      dataValue1=""
      dataLabel1=""
      dataValue2=""
      dataLabel2=""
      formTitle="Start Selling More"
      formButtonText="Build My Store"
      serviceName="E-Commerce">
    </app-banner>
    <section class="ag-section exact-navy-gradient animate-section-wrapper" style="position:relative;overflow:hidden;">
      <!-- Drifting dot grid background -->
      <div class="moving-dot-grid"></div>

      <!-- Background Space Orbs -->
      <div class="celestial-decorations">
        <div class="space-orb orb-violet-glow" style="top:10%;left:5%;width:250px;height:250px;"></div>
        <div class="space-orb orb-teal-glow" style="bottom:15%;right:5%;width:300px;height:300px;"></div>
      </div>

      <!-- Falling 3D Orbs (Center) -->
      <div class="falling-orb-center ball-1"></div>
      <div class="falling-orb-center ball-2"></div>
      <div class="falling-orb-center ball-3"></div>

      <!-- Falling Side Orbs -->
      <div class="falling-orb orb-left"></div>
      <div class="falling-orb orb-right"></div>

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
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">₹22,999</div>
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
        <!-- What's Included Section -->
        <div class="mb-16">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-8 text-center">
            What's <span class="text-[#00E5C3]">Included</span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 max-w-6xl mx-auto relative">
            
            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">1</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Custom Storefront</h3>
                <p class="text-white text-sm">Bespoke design tailored to your brand, optimized for conversions and user experience.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">2</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Payment Gateways</h3>
                <p class="text-white text-sm">Secure and frictionless checkout integrations like Stripe, Razorpay, and PayPal.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">3</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Inventory Sync</h3>
                <p class="text-white text-sm">Seamless catalogue management and real-time inventory synchronization.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">4</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Mobile-First</h3>
                <p class="text-white text-sm">Flawless responsive checkout flows ensuring a perfect experience on any device.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">5</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">SEO Optimized</h3>
                <p class="text-white text-sm">Advanced on-page SEO specifically tuned for product and category rankings.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">6</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Analytics Tracking</h3>
                <p class="text-white text-sm">Deep e-commerce tracking to measure attribution, drop-offs, and true LTV.</p>
              </div>
            </div>
            
          </div>
        </div>

        <!-- How We Build Your Store Section -->
        <div class="mb-20">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center">
            How we build your <span class="text-[#00E5C3]">store</span>
          </h2>
          
          <div class="relative max-w-5xl mx-auto px-4">
            <!-- Horizontal Connecting Line (Desktop) -->
            <div class="hidden md:block absolute top-[27px] left-[12.5%] right-[12.5%] h-[2px] bg-[#00E5C3]/20 z-0 overflow-hidden rounded-full">
              <div class="animate-light-beam-horizontal"></div>
            </div>

            <!-- Vertical Connecting Line (Mobile) -->
            <div class="block md:hidden absolute left-[43px] top-[28px] bottom-[28px] w-[2px] bg-[#00E5C3]/20 z-0 overflow-hidden rounded-full">
              <div class="animate-light-beam-vertical"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
              <!-- Step 1 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  1
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Strategy</h3>
                  <p class="text-white text-sm">Mapping out product structures and mapping the perfect buyer journey.</p>
                </div>
              </div>

              <!-- Step 2 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  2
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Design</h3>
                  <p class="text-white text-sm">Crafting a high-converting, brand-aligned storefront UI.</p>
                </div>
              </div>

              <!-- Step 3 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  3
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Development</h3>
                  <p class="text-white text-sm">Integrating secure payment gateways and fast product databases.</p>
                </div>
              </div>

              <!-- Step 4 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  4
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Launch</h3>
                  <p class="text-white text-sm">Stress-testing cart flows and deploying your store live.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tech Stack -->
        <div class="mb-16 max-w-4xl mx-auto">
          <div class="ag-card p-8">
            <h2 class="text-2xl font-heading font-bold text-[#00E5C3] mb-6 text-center">Tech Stack</h2>
            <ul class="flex flex-wrap justify-center gap-4 text-white text-sm leading-relaxed">
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Next.js / Angular</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Node.js API</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> PostgreSQL / MongoDB</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> AWS / Google Cloud</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> CDN & Caching</li>
            </ul>
          </div>
        </div>
        <!-- Pricing Plans -->
        <div class="mb-16">
  <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-4 text-center">
    Pricing <span class="text-[#00E5C3]">Plans</span>
  </h2>
  <p class="text-white text-center mb-12 max-w-2xl mx-auto">Choose a plan that fits your goals. All plans include our signature quality, support, and transparent reporting.</p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

    <div class="relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg mt-4">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF7A00] text-white text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full">★ Most Popular</div>
      <div class="mb-6">
        <div class="text-xs font-mono text-[#7B61FF] uppercase tracking-widest mb-2">// Basic Store</div>
        <div class="text-sm text-gray-400 line-through mb-1">₹29,899</div>
        <div class="text-4xl font-heading font-bold text-white mb-1">₹22,999</div>
        <div class="text-white text-sm opacity-80 flex items-center gap-1">🏷️ one-time payment</div>
      </div>
      <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-6">
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Up to 100 products</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> WooCommerce setup</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Custom homepage design</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Product & category pages</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Payment gateway (2)</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Basic shipping setup</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Mobile responsive</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> SSL certificate</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> On-page SEO</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> 1 month support</li>
      </ul>
      <div class="text-center text-xs text-white/60 mb-4 pb-4 border-b border-white/10">
        <span class="block mb-1">↻ Yearly renewal: ₹3999</span>
        <span>(hosting + SSL + Maintenance)</span>
      </div>
      <a (click)="selectPlan('Basic Store', '₹22,999')" class="cursor-pointer block text-center border border-[#00E5C3] text-[#00E5C3] font-semibold py-3 rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637] transition-all duration-300">Choose Basic Store</a>
    </div>

    <div class="relative bg-gradient-to-b from-[rgba(123,97,255,0.15)] to-[rgba(0,229,195,0.05)] backdrop-blur-sm border border-[#7B61FF] rounded-2xl p-8 flex flex-col shadow-[0_0_40px_rgba(123,97,255,0.2)] scale-[1.03] z-10">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF7A00] text-white text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full">★ Most Popular</div>
      <div class="mb-6">
        <div class="text-xs font-mono text-[#00E5C3] uppercase tracking-widest mb-2">// Standard Store</div>
        <div class="text-sm text-[#7B61FF]/70 line-through mb-1">₹48,099</div>
        <div class="text-4xl font-heading font-bold text-white mb-1">₹36,999</div>
        <div class="text-white text-sm opacity-80 flex items-center gap-1">🏷️ one-time payment</div>
      </div>
      <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-6">
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Up to 500 products</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> WooCommerce / Shopify</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Full custom design</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> All page types</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Payment gateways (all)</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Shipping integration</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Coupon & discount system</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Abandoned cart recovery</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Product reviews</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Advanced SEO</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Google Analytics + Pixel</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> 3 months support</li>
      </ul>
      <div class="text-center text-xs text-white/60 mb-4 pb-4 border-b border-[#7B61FF]/30">
        <span class="block mb-1">↻ Yearly renewal: ₹4999</span>
        <span>(hosting + SSL + Maintenance)</span>
      </div>
      <a (click)="selectPlan('Standard Store', '₹36,999')" class="cursor-pointer block text-center bg-gradient-to-r from-[#7B61FF] to-[#00E5C3] text-[#0F1637] font-bold py-3 rounded-xl hover:opacity-90 transition-all duration-300">Choose Standard Store</a>
    </div>

    <div class="relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg bg-white/5 mt-4">
      <div class="mb-6">
        <div class="text-xs font-mono text-[#7B61FF] uppercase tracking-widest mb-2">// Premium Store</div>
        <div class="text-4xl font-heading font-bold text-[#7B61FF] mb-2">Custom</div>
        <div class="text-white text-sm opacity-80 flex items-center gap-1">🏷️ custom quote</div>
      </div>
      <div class="w-full h-px bg-white/10 my-4"></div>
      <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8 mt-2">
        <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Unlimited products</li>
        <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Magento / Custom</li>
        <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Premium UX/UI design</li>
        <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Multi-language support</li>
        <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Multi-currency checkout</li>
        <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Advanced inventory</li>
        <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> ERP/CRM integration</li>
        <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Custom mobile app</li>
        <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Dedicated account manager</li>
        <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Priority 24/7 support</li>
        <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> 6 months maintenance</li>
      </ul>
      <a (click)="selectPlan('Premium Store', 'Custom Quote')" class="cursor-pointer block text-center border border-[#7B61FF] text-[#7B61FF] font-semibold py-3 rounded-full hover:bg-[#7B61FF] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
        <span>📞</span> Get Custom Quote
      </a>
    </div>

  </div>
</div>
        <div class="text-center">
          <a routerLink="/contact" class="btn-primary">Get a Free Consultation →</a>
        </div>
      </div>
    </section>
  `
})
export class EcommerceComponent {
  selectPlan(planName: string, price: string) {
    const text = `Hi, I visited your CoreGrid website and I'm interested in the ${planName} plan at ${price}.`;
    const whatsappNumber = '919074501397';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
