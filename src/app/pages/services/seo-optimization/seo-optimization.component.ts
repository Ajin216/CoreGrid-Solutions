import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../shared/components/banner/banner.component';

@Component({
  selector: 'app-seo-optimization',
  standalone: true,
  imports: [RouterLink, BannerComponent],
  template: `
    <app-banner 
      badgeText="SEO Strategy"
      title="Rank Higher On"
      highlightTitle="Google"
      quote="We help your business rank higher on search engines and attract customers actively searching for your services"
      dataValue1=""
      dataLabel1=""
      dataValue2=""
      dataLabel2=""
      formTitle="Get a Free SEO Audit"
      formButtonText="Boost Rankings"
      serviceName="SEO Optimization"
      [showBreadcrumbs]="true"
      currentServiceName="SEO Optimization">
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
        <div class="ag-badge mb-6 badge-pulse-blink" style="color:#00E5C3;border-color:rgba(0,229,195,0.3);"><span class="dot" style="background-color:#00E5C3;"></span>// 02 — seo</div>
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
          SEO <span class="text-[#00E5C3]">Optimization</span>
        </h1>
        <p class="text-white text-lg md:text-xl max-w-3xl mb-12">
          Data-driven keyword strategies, technical audits, and authority link building that systematically push your brand to page one — and keep it there.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">₹6,999</div>
            <div class="text-white text-sm font-mono">Starting at / month</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">+150%</div>
            <div class="text-white text-sm font-mono">Avg. Organic Traffic Lift</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">Page 1</div>
            <div class="text-white text-sm font-mono">Ranking Target</div>
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
                <h3 class="text-white font-bold text-lg mb-1">Technical Audit</h3>
                <p class="text-white text-sm">Comprehensive crawl, indexing analysis, and Core Web Vitals optimization.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">2</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Keyword Strategy</h3>
                <p class="text-white text-sm">Identifying low-competition, high-value search terms specific to your niche.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">3</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">On-Page SEO</h3>
                <p class="text-white text-sm">Refining meta tags, heading hierarchies, and implementing rich snippets/schema.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">4</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Link Building</h3>
                <p class="text-white text-sm">Earning high-authority backlinks through strategic outreach and content.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">5</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Content Optimization</h3>
                <p class="text-white text-sm">Aligning existing content with search intent and producing new pillar pages.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">6</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Performance Tracking</h3>
                <p class="text-white text-sm">Real-time rank tracking, traffic analysis, and comprehensive monthly reporting.</p>
              </div>
            </div>
            
          </div>
        </div>

        <!-- How We Rank Your Site Section -->
        <div class="mb-20">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center">
            How we rank your <span class="text-[#00E5C3]">site</span>
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
                  <h3 class="text-white font-bold text-lg mb-1">Audit</h3>
                  <p class="text-white text-sm">Uncovering technical errors and finding immediate ranking opportunities.</p>
                </div>
              </div>

              <!-- Step 2 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  2
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Foundation</h3>
                  <p class="text-white text-sm">Fixing indexing issues, improving speed, and mapping site architecture.</p>
                </div>
              </div>

              <!-- Step 3 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  3
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Content</h3>
                  <p class="text-white text-sm">Optimizing on-page elements and expanding content breadth.</p>
                </div>
              </div>

              <!-- Step 4 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  4
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Authority</h3>
                  <p class="text-white text-sm">Acquiring powerful backlinks to signal trust to search engines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tech Stack -->
        <div class="mb-16 max-w-4xl mx-auto">
          <div class="ag-card p-8">
            <h2 class="text-2xl font-heading font-bold text-[#00E5C3] mb-6 text-center">Tools We Use</h2>
            <ul class="flex flex-wrap justify-center gap-4 text-white text-sm leading-relaxed">
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> SEMrush & Ahrefs</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Google Search Console</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Google Analytics 4</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Screaming Frog</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Looker Studio</li>
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
                    
                    <!-- Top Row: Original Price + Savings Badge -->
                    @if (plan.originalPrice) {
                      <div class="flex items-center gap-2">
                        <span class="relative px-1.5 py-0.5 text-xl font-bold text-white" style="background: linear-gradient(to top right, transparent 45%, #EF4444 48%, #EF4444 52%, transparent 55%), linear-gradient(to bottom right, transparent 45%, #EF4444 48%, #EF4444 52%, transparent 55%);">
                          {{ plan.originalPrice }}
                        </span>
                        <span class="bg-emerald-500/10 text-emerald-400 text-sm font-bold px-2.5 py-1 rounded-full shrink-0">{{ plan.savingsBadge }}</span>
                      </div>
                    }

                    <!-- Bottom Row: Price -->
                    <div class="flex items-baseline gap-1.5">
                      <span class="text-5xl font-heading font-bold text-white">
                        {{ plan.price }}
                      </span>
                      <span class="text-white text-sm opacity-80">/month</span>
                    </div>
                    <div class="text-white text-xs opacity-60 flex items-center gap-1 mt-0.5">
                      <span>🕒</span> {{ plan.timeline }}
                    </div>
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
                    <span>↻ Monthly renewal (cancel anytime)</span>
                  </div>

                  <a (click)="selectPlan(plan.name + ' SEO', plan.price)"
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
                    <div class="text-white text-xs opacity-60 flex items-center justify-center gap-1 mt-2.5">
                      <span>🕒</span> {{ plan.timeline }}
                    </div>
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

                  <a (click)="selectPlan('Enterprise SEO', 'Custom Quote')"
                     [class]="'cursor-pointer block text-center font-semibold py-3 transition-all duration-300 flex items-center justify-center gap-2 ' + plan.buttonClass">
                    Get Custom Quote
                  </a>
                }
              </div>
            }
          </div>
        </div>
        <div class="text-center">
          <a routerLink="/contact" class="btn-primary">Get a Free SEO Audit →</a>
        </div>
      </div>
    </section>
  `
})
export class SeoOptimizationComponent {
  pricingPlans = [
    {
      name: 'Starter',
      price: '₹6,999',
      originalPrice: '₹9,999',
      savingsBadge: 'Save 30%',
      timeline: '3–6 months to results',
      features: [
        'Up to 8 keywords',
        'Google My Business setup',
        'On-page SEO (3 pages)',
        'Monthly rank report',
        'Basic link building (2/mo)'
      ],
      notIncluded: [
        'Basic link building (Local has 5/mo)',
        'Google My Business optimization',
        'SEO setup beyond 3 pages (Local has 5 pages)',
        'Up to 10 keywords (Local has 10)',
        'Conversion optimization'
      ],
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Local SEO',
      price: '₹12,499',
      originalPrice: '₹15,999',
      savingsBadge: 'Save 22%',
      timeline: '5–7 months to results',
      features: [
        'Up to 10 keywords',
        'Google My Business optimization',
        'On-page SEO (5 pages)',
        'Local citation building',
        'Monthly rank report',
        'Basic link building (5/mo)',
        'Competitor analysis'
      ],
      notIncluded: [
        'Content creation (Growth: 4 blogs/mo)',
        'Quality link building beyond 5/mo (Growth: 15/mo)',
        'Technical SEO audit & fix',
        'Google Search Console setup',
        'Conversion optimization'
      ],
      badge: '★ Most Popular',
      badgeClass: 'bg-[#FF7A00] text-white',
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Growth SEO',
      price: '₹25,999',
      originalPrice: '₹29,999',
      savingsBadge: 'Save 13%',
      timeline: '6–8 months to results',
      features: [
        'Up to 30 keywords',
        'Full on-page SEO',
        'Content creation (4 blogs/mo)',
        'Quality link building (15/mo)',
        'Technical SEO audit & fix',
        'Google Search Console setup',
        'Monthly detailed report',
        'Competitor tracking',
        'Conversion optimization'
      ],
      notIncluded: [
        'Unlimited keywords (Enterprise: Unlimited)',
        'Content strategy beyond 4 blogs/mo',
        'Premium link building beyond 15/mo (Enterprise: 30+/mo)',
        'Dedicated SEO manager',
        'Bi-weekly strategy calls'
      ],
      badge: '★ Most Popular',
      badgeClass: 'bg-[#FF7A00] text-white',
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Enterprise SEO',
      price: 'Custom Quote',
      timeline: '8–12 months to results',
      description: 'Engineered for scale. We implement advanced technical SEO for massive websites and international brands, ensuring automated optimization, perfect regional targeting, and maximum visibility for thousands of products.',
      originalPrice: null,
      savingsBadge: null,
      features: [
        'Unlimited keywords',
        'Full website SEO overhaul',
        'Content strategy & creation',
        'Premium link building (30+/mo)',
        'Dedicated SEO manager',
        'Bi-weekly strategy calls',
        'Advanced analytics dashboard',
        'PR & digital PR outreach',
        'International / multi-location SEO'
      ],
      notIncluded: [],
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg bg-white/5 h-full lg:min-h-[960px] md:min-h-[960px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#7B61FF] text-[#7B61FF] rounded-full hover:bg-[#7B61FF] hover:text-white',
      isCustom: true
    }
  ];

  selectPlan(planName: string, price: string) {
    const text = `Hello CoreGrid team, 
    I am reaching out from your website. I am interested in moving forward with the ${planName} plan at ${price}. 
    Please let me know the next steps to initiate this project.`;
    const whatsappNumber = '919074501397';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
