import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../shared/components/banner/banner.component';

@Component({
  selector: 'app-web-development',
  standalone: true,
  imports: [RouterLink, BannerComponent],
  template: `
    <app-banner 
      badgeText="Web Application"
      title="Build High-Performance"
      highlightTitle="Web Application"
      quote="“Creating fast, secure, and user-friendly web applications designed to grow your business.”"
      dataValue1=""
      dataLabel1=""
      dataValue2=""
      dataLabel2=""
      formTitle="Get a Web Dev Quote"
      formButtonText="Start Building"
      serviceName="Web Development"
      [showBreadcrumbs]="true"
      currentServiceName="Web Development">
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
        <div class="ag-badge mb-6 badge-pulse-blink" style="color:#00E5C3;border-color:rgba(0,229,195,0.3);"><span class="dot" style="background-color:#00E5C3;"></span>// 01 — web_dev</div>
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
          Web <span class="text-[#00E5C3]">Development</span>
        </h1>
        <p class="text-white text-lg md:text-xl max-w-3xl mb-12">
          Pixel-perfect, blazing-fast websites and web applications built on Angular, React, and Next.js — engineered for conversion, authority, and infinite scale.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">₹5,999</div>
            <div class="text-white text-sm font-mono">Starting Price</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">1–3 wks</div>
            <div class="text-white text-sm font-mono">Typical Timeline</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">100%</div>
            <div class="text-white text-sm font-mono">Mobile-First Responsive</div>
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
                <h3 class="text-white font-bold text-lg mb-1">Custom UI/UX Design</h3>
                <p class="text-white text-sm">Bespoke wireframes and interactive prototypes tailored exactly to your brand identity.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">2</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Responsive Layout</h3>
                <p class="text-white text-sm">Flawless functionality and seamless aesthetics across desktops, tablets, and smartphones.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">3</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">CMS Integration</h3>
                <p class="text-white text-sm">Easy content management with headless or traditional CMS solutions for full control.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">4</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Web Vitals Optimized</h3>
                <p class="text-white text-sm">Lightning-fast load times with optimized LCP, CLS, and FID metrics for peak performance.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">5</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">On-Page SEO</h3>
                <p class="text-white text-sm">Built-in search engine foundation, meta tags, and automated sitemaps out of the box.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">6</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Analytics Setup</h3>
                <p class="text-white text-sm">Seamless integration with Google Analytics and automated deployment pipelines.</p>
              </div>
            </div>
            
          </div>
        </div>

        <!-- How We Build Your Website Section -->
        <div class="mb-20">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center">
            How we build your <span class="text-[#00E5C3]">website</span>
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
                  <h3 class="text-white font-bold text-lg mb-1">Discovery</h3>
                  <p class="text-white text-sm">We analyze your business goals and plan the optimal architecture.</p>
                </div>
              </div>

              <!-- Step 2 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  2
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Design</h3>
                  <p class="text-white text-sm">Crafting bespoke UI/UX prototypes tailored to your brand identity.</p>
                </div>
              </div>

              <!-- Step 3 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  3
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Development</h3>
                  <p class="text-white text-sm">Writing clean, scalable code with cutting-edge web technologies.</p>
                </div>
              </div>

              <!-- Step 4 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  4
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Launch</h3>
                  <p class="text-white text-sm">Rigorous testing, SEO optimization, and a seamless live deployment.</p>
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
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Angular / React / Next.js</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Tailwind CSS</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Node.js</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> AWS / Google Cloud</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> CI/CD Pipelines</li>
            </ul>
          </div>
        </div>

        <!-- Pricing Plans -->
        <div class="mb-16">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-4 text-center">
            Pricing <span class="text-[#00E5C3]">Plans</span>
          </h2>
          <p class="text-white text-center mb-12 max-w-2xl mx-auto">Choose a plan that fits your goals. All plans include our signature quality, support, and 100% mobile-first delivery.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            @for (plan of pricingPlans; track plan.name) {
              <div [class]="plan.containerClass">
                @if (plan.badge) {
                  <div [class]="'absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full ' + plan.badgeClass">
                    {{ plan.badge }}
                  </div>
                }

                @if (!plan.isCustom) {
                  <!-- Standard / Promo Cards -->
                  <div class="mb-6 flex flex-col gap-1.5">
                    <div [class]="'text-xs font-mono uppercase tracking-widest mb-1 ' + plan.monoColor">// {{ plan.name }}</div>
                    
                    <!-- Top Row: Anchor & Hook -->
                    <div class="flex items-center gap-2">
                      <span class="relative px-1.5 py-0.5 text-xl font-bold text-white" style="background: linear-gradient(to top right, transparent 45%, #EF4444 48%, #EF4444 52%, transparent 55%), linear-gradient(to bottom right, transparent 45%, #EF4444 48%, #EF4444 52%, transparent 55%);">
                        {{ plan.originalPrice }}
                      </span>
                      <span class="bg-emerald-500/10 text-emerald-400 text-sm font-bold px-2.5 py-1 rounded-full shrink-0">{{ plan.savingsBadge }}</span>
                    </div>

                    <!-- Bottom Row: The New Price -->
                    <div class="text-5xl font-heading font-bold text-white">
                      {{ plan.price }}
                    </div>
                    
                    <div class="text-white text-sm opacity-80 mt-0.5">🏷️ one-time payment</div>
                  </div>
                  
                  <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-6">
                    @for (feature of plan.features; track feature) {
                      <li class="flex items-start gap-2">
                        <span class="text-[#00E5C3] mt-0.5">✓</span> {{ feature }}
                      </li>
                    }
                    @for (notInc of plan.notIncluded; track notInc) {
                      <li class="flex items-start gap-2 text-white/40 line-through decoration-white/20">
                        <span class="text-rose-500/60 mt-0.5 font-bold">✗</span> {{ notInc }}
                      </li>
                    }
                  </ul>

                  <div class="text-center text-xs text-white/60 mb-4 pb-4 border-b border-white/10">
                    <span class="block mb-1">↻ Yearly renewal: {{ plan.yearlyRenewal }}</span>
                    <span>(hosting + SSL + Maintenance)</span>
                  </div>

                  <a (click)="selectPlan(plan.name + ' Web Design', plan.price)"
                     [class]="'cursor-pointer block text-center font-semibold py-3 transition-all duration-300 ' + plan.buttonClass">
                    Choose {{ plan.name }}
                  </a>

                } @else {
                  <!-- Enterprise / Custom Card -->
                  <div class="mb-6 text-center">
                    <div class="text-sm font-bold text-white mb-2">{{ plan.name }}</div>
                    <div class="text-5xl font-heading font-bold text-[#7B61FF] mb-2">Custom</div>
                    <div class="text-white text-sm opacity-80">🏷️ custom quote</div>
                    @if (plan.description) {
                      <p class="text-xs text-white/60 mt-3 leading-relaxed max-w-[220px] mx-auto">
                        {{ plan.description }}
                      </p>
                    }
                  </div>
                  
                  <div class="w-full h-px bg-white/10 my-4"></div>
                  
                  <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8 mt-2">
                    @for (feature of plan.features; track feature) {
                      <li class="flex items-start gap-2">
                        <span class="text-[#7B61FF] mt-0.5">✓</span> {{ feature }}
                      </li>
                    }
                    @for (notInc of plan.notIncluded; track notInc) {
                      <li class="flex items-start gap-2 text-white/40 line-through decoration-white/20">
                        <span class="text-rose-500/60 mt-0.5 font-bold">✗</span> {{ notInc }}
                      </li>
                    }
                  </ul>

                  <a (click)="selectPlan('Enterprise Web Design', 'Custom Quote')"
                     [class]="'cursor-pointer block text-center font-semibold py-3 transition-all duration-300 flex items-center justify-center gap-2 ' + plan.buttonClass">
                    Get Custom Quote
                  </a>
                }
              </div>
            }
          </div>
        </div>
        <div class="text-center">
          <a routerLink="/contact" class="btn-primary">Get a Free Consultation →</a>
        </div>
      </div>
    </section>
  `
})
export class WebDevelopmentComponent {
  pricingPlans = [
    {
      name: 'Basic',
      price: '₹5,999',
      originalPrice: '₹7,999',
      savingsBadge: 'Save 25%',
      features: [
        '5-page custom website',
        'Mobile responsive design',
        'On-page SEO (5 pages)',
        'Contact form',
        '1 year free hosting',
        'SSL certificate',
        '3 design revisions',
        '7-day delivery',
        'Domain Included'
      ],
      notIncluded: [
        'WhatsApp Integration',
        'Pages beyond 5 (Plus has 7)',
        'SEO setup beyond 5 pages',
        'More than 3 design revisions'
      ],
      yearlyRenewal: '₹2999',
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Plus',
      price: '₹12,999',
      originalPrice: '₹14,999',
      savingsBadge: 'Save 13%',
      features: [
        '7-page custom website',
        'Mobile responsive design',
        'On-page SEO (7 pages)',
        'Contact form',
        '1 year free hosting',
        'SSL certificate',
        'WhatsApp Integration',
        '4 design revisions',
        '10-day delivery',
        'Domain Included'
      ],
      notIncluded: [
        'Advanced On-Page SEO (Plus has Basic)',
        'Google Analytics Setup',
        'Lead Capture & Forms (Plus has Contact only)',
        'Post-launch Support (Standard: 1 Month)',
        'Pages beyond 7 (Standard has 10)'
      ],
      yearlyRenewal: '₹3499',
      badge: '★ Most Popular',
      badgeClass: 'bg-[#FF7A00] text-white',
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Standard',
      price: '₹21,999',
      originalPrice: '₹23,999',
      savingsBadge: 'Save 8%',
      features: [
        '10-page custom website',
        'Mobile responsive design',
        'Advanced on-page SEO',
        'Contact & lead forms',
        '1 year free hosting',
        'SSL certificate',
        'WhatsApp Integration',
        'Google Analytics setup',
        '5 design revisions',
        '14-day delivery',
        '1 month support',
        'Domain Included'
      ],
      notIncluded: [
        'CMS Integration (Pro has Basic CMS)',
        'Pages beyond 10 (Pro has 15)',
        'Extended Support (Pro: 2 Months)',
        'More than 5 design revisions (Pro has 8)'
      ],
      yearlyRenewal: '₹3999',
      badge: '★ Most Popular',
      badgeClass: 'bg-[#FF7A00] text-white',
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Pro',
      price: '₹28,999',
      originalPrice: '₹34,499',
      savingsBadge: 'Save 16%',
      features: [
        '15-page custom website',
        'Advanced on-page SEO',
        'Contact & lead forms',
        '1 year free hosting',
        'SSL certificate',
        'Basic CMS setup',
        'WhatsApp Integration',
        'Google Analytics setup',
        '8 design revisions',
        '18-day delivery',
        '2 months support',
        'Domain Included'
      ],
      notIncluded: [
        'Custom UI Animations',
        'Dynamic CMS / Blog Integration',
        'Unlimited revisions (Pro has 8)',
        'Google Search Console Setup',
        'Support beyond 2 months (Premium has 3)'
      ],
      yearlyRenewal: '₹4999',
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Premium',
      price: '₹37,999',
      originalPrice: '₹40,000',
      savingsBadge: 'Save 5%',
      features: [
        '20-page custom website',
        'Custom UI animations',
        'Full SEO setup + blog',
        'Advanced lead capture',
        '1 year free hosting',
        'SSL certificate',
        'CMS (edit content yourself)',
        'WhatsApp & chat integration',
        'Google Analytics + Search Console',
        'Unlimited revisions',
        '21-day delivery',
        '3 months support',
        'Domain Included'
      ],
      notIncluded: [
        'Unlimited Pages (Premium: 20 Pages)',
        'Custom Web App / E-commerce Features',
        'Advanced Integrations (CRM, ERP)',
        '24/7 Priority Support & Maintenance',
        'Dedicated Project Manager'
      ],
      yearlyRenewal: '₹5999',
      badge: '★ Most Popular',
      badgeClass: 'bg-[#FF7A00] text-white',
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Enterprise',
      price: 'Custom Quote',
      description: 'When a basic website is not enough, we build custom solutions. If you need your website to handle thousands of visitors without crashing, take custom payments, or manage your inventory, we code it to work exactly the way your business runs',
      originalPrice: null,
      savingsBadge: null,
      features: [
        'Unlimited pages',
        'Custom web app features',
        'E-commerce functionality',
        'Advanced Integrations (CRM, ERP)',
        'Dedicated project manager',
        'Priority support 24/7',
        'Quarterly SEO audit',
        'Ongoing maintenance',
        'Domain Included'
      ],
      notIncluded: [],
      yearlyRenewal: null,
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg bg-white/5 h-full lg:min-h-[960px] md:min-h-[960px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#7B61FF] text-[#7B61FF] rounded-full hover:bg-[#7B61FF] hover:text-white',
      isCustom: true
    }
  ];

  selectPlan(planName: string, price: string) {
    const text = `Hello CoreGrid team, 
    I am reaching out from your website. I am interested in moving forward with the ${planName} plan under Web Development service at ${price}. 
    Please let me know the next steps to initiate this project.`;
    const whatsappNumber = '919074501397';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
