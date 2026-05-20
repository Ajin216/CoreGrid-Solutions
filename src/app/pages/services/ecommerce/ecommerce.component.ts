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
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

            <!-- Basic -->
            <div class="relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg">
              <div class="mb-6">
                <div class="text-xs font-mono text-[#7B61FF] uppercase tracking-widest mb-2">// Basic</div>
                <div class="text-4xl font-heading font-bold text-white mb-1">₹65,000</div>
                <div class="text-white text-sm">One-time · 4–6 week delivery</div>
              </div>
              <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Up to 50 Products</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Standard Theme Customization</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> 1 Payment Gateway Integration</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Basic Shipping Setup</li>
                
              </ul>
              <a routerLink="/contact" class="block text-center border border-[#00E5C3] text-[#00E5C3] font-semibold py-3 rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637] transition-all duration-300">Get Started →</a>
            </div>

            <!-- Standard (Featured) -->
            <div class="relative bg-gradient-to-b from-[rgba(123,97,255,0.15)] to-[rgba(0,229,195,0.05)] backdrop-blur-sm border border-[#7B61FF] rounded-2xl p-8 flex flex-col shadow-[0_0_40px_rgba(123,97,255,0.2)] scale-[1.03]">
              <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7B61FF] to-[#00E5C3] text-[#0F1637] text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full">Most Popular</div>
              <div class="mb-6">
                <div class="text-xs font-mono text-[#00E5C3] uppercase tracking-widest mb-2">// Standard</div>
                <div class="text-4xl font-heading font-bold text-white mb-1">₹1,20,000</div>
                <div class="text-white text-sm">One-time · 6–8 week delivery</div>
              </div>
              <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Up to 500 Products</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Custom Storefront UI/UX</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Multi-Payment Gateways</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Advanced Shipping Rules</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Inventory Management Sync</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> E-commerce SEO Optimization</li>
              </ul>
              <a routerLink="/contact" class="block text-center bg-gradient-to-r from-[#7B61FF] to-[#00E5C3] text-[#0F1637] font-bold py-3 rounded-xl hover:opacity-90 transition-all duration-300">Get Started →</a>
            </div>

            <!-- Premium -->
            <div class="relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg">
              <div class="mb-6">
                <div class="text-xs font-mono text-[#7B61FF] uppercase tracking-widest mb-2">// Premium</div>
                <div class="text-4xl font-heading font-bold text-white mb-1">₹2,50,000+</div>
                <div class="text-white text-sm">One-time · 10–14 week delivery</div>
              </div>
              <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Unlimited Products</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Full Custom Headless Architecture</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> ERP & CRM Integrations</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> B2B/B2C Custom Portals</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Subscriptions & Memberships</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Multi-Currency & Multi-Lingual</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> 3 Months Premium Support</li>
              </ul>
              <a routerLink="/contact" class="block text-center border border-[#00E5C3] text-[#00E5C3] font-semibold py-3 rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637] transition-all duration-300">Contact Us →</a>
            </div>

          
            <!-- Custom -->
            <div class="relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg">
              <div class="mb-6">
                <div class="text-xs font-mono text-[#7B61FF] uppercase tracking-widest mb-2">// Custom</div>
                <div class="text-4xl font-heading font-bold text-white mb-1">Custom</div>
                <div class="text-white text-sm">Built to your specifications</div>
              </div>
              <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Bespoke Strategy & Planning</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Dedicated Project Manager</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Complex & Custom Integrations</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Enterprise-Grade Security</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> 24/7 Priority Support & SLA</li>
              </ul>
              <a routerLink="/contact" class="block text-center border border-[#00E5C3] text-[#00E5C3] font-semibold py-3 rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637] transition-all duration-300">Contact Us →</a>
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
export class EcommerceComponent { }
