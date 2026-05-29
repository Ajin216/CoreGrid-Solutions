import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../shared/components/banner/banner.component';

@Component({
  selector: 'app-google-ads',
  standalone: true,
  imports: [RouterLink, BannerComponent],
  template: `
    <app-banner 
      badgeText="Google Ads"
      title="Drive Instant"
      highlightTitle="Business Growth"
      quote="Reach the right audience at the right time with high-converting Google Ads campaigns."
      dataValue1=""
      dataLabel1=""
      dataValue2=""
      dataLabel2=""
      formTitle="Get a Free Ads Audit"
      formButtonText="Optimize Ads"
      serviceName="Google Ads Management"
      [showBreadcrumbs]="true"
      currentServiceName="Google Ads">
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
        <div class="ag-badge mb-6 badge-pulse-blink" style="color:#00E5C3;border-color:rgba(0,229,195,0.3);"><span class="dot" style="background-color:#00E5C3;"></span>// 06 — advertising</div>
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
          Google Ads <span class="text-[#00E5C3]">Management</span>
        </h1>
        <p class="text-white text-lg md:text-xl max-w-3xl mb-12">
          Precision-targeted PPC campaigns, high-intent search ads, and strategic remarketing funnels engineered to maximize ROI and dramatically lower your customer acquisition costs.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">₹8,999</div>
            <div class="text-white text-sm font-mono">Starting at / month</div>
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
                <h3 class="text-white font-bold text-lg mb-1">Strategy & Keywords</h3>
                <p class="text-white text-sm">Deep competitive research and high-intent keyword discovery.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">2</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Multi-format Ads</h3>
                <p class="text-white text-sm">Search, Display, Shopping, and YouTube ad campaign setup.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">3</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">A/B Testing</h3>
                <p class="text-white text-sm">Continuous iteration of ad copy and creative assets for higher CTR.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">4</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Conversion Tracking</h3>
                <p class="text-white text-sm">Flawless pixel integration and deep attribution modelling.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">5</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Performance Reports</h3>
                <p class="text-white text-sm">Transparent, monthly breakdowns of spend, CPA, and ROAS.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">6</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Remarketing</h3>
                <p class="text-white text-sm">Targeted audience pools to capture lost leads and boost conversions.</p>
              </div>
            </div>
            
          </div>
        </div>

        <!-- How We Build Your Campaigns Section -->
        <div class="mb-20">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center">
            How we build your <span class="text-[#00E5C3]">campaigns</span>
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
                  <p class="text-white text-sm">Auditing past account performance and competitive landscape.</p>
                </div>
              </div>

              <!-- Step 2 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  2
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Architecture</h3>
                  <p class="text-white text-sm">Structuring campaigns tightly by intent and match types.</p>
                </div>
              </div>

              <!-- Step 3 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  3
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Launch</h3>
                  <p class="text-white text-sm">Activating ads with precise tracking and aggressive bidding.</p>
                </div>
              </div>

              <!-- Step 4 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  4
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Scale</h3>
                  <p class="text-white text-sm">Pruning wasted spend and scaling high-converting keywords.</p>
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
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Google Ads Manager</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Google Analytics 4</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Google Tag Manager</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> SEMrush</li>
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
                    
                    <div class="text-white text-xs opacity-60 flex items-center gap-1 mt-1">
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

                  <a (click)="selectPlan(plan.name, plan.price + '/month')"
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

                  <a (click)="selectPlan(plan.name, 'Custom Quote')"
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
export class GoogleAdsComponent {
  pricingPlans = [
    {
      name: 'Starter PPC',
      price: '₹8,999',
      originalPrice: '₹12,999',
      savingsBadge: 'Save 31%',
      timeline: 'management fee (ad spend separate)',
      features: [
        '1 campaign type',
        'Up to ₹50,000 ad spend managed',
        'Keyword research & setup',
        'Ad copy writing',
        'Monthly performance report',
        'Conversion tracking setup'
      ],
      notIncluded: [
        'A/B ad copy testing',
        'Remarketing campaigns',
        'Landing page optimization',
        'Dedicated account manager'
      ],
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px] mt-4',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Standard PPC',
      price: '₹11,499',
      originalPrice: '₹15,099',
      savingsBadge: 'Save 24%',
      timeline: 'management fee (ad spend separate)',
      features: [
        'Up to 3 campaign types',
        'Up to ₹1 Lakh ad spend managed',
        'Keyword research & setup',
        'Ad copy writing',
        'A/B ad copy testing',
        'Remarketing campaigns',
        'Monthly performance report',
        'Conversion tracking setup'
      ],
      notIncluded: [
        'Landing page optimization',
        'Dedicated account manager',
        'Bi-weekly reports'
      ],
      badge: '★ Best Value',
      badgeClass: 'bg-[#FF7A00] text-white',
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px] mt-4',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Growth PPC',
      price: '₹15,999',
      originalPrice: '₹19,999',
      savingsBadge: 'Save 20%',
      timeline: 'management fee (ad spend separate)',
      features: [
        'All campaign types',
        'Up to ₹2 Lakh ad spend managed',
        'Full keyword strategy',
        'A/B ad copy testing',
        'Remarketing campaigns',
        'Landing page optimization',
        'Bi-weekly report',
        'Dedicated account manager',
        'Conversion tracking setup'
      ],
      notIncluded: [
        'Unlimited ad spend managed',
        'Custom dashboard / Looker Studio',
        'Weekly strategy calls'
      ],
      badge: '★ Most Popular',
      badgeClass: 'bg-[#FF7A00] text-white',
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px] mt-4',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Enterprise PPC',
      price: 'Custom Quote',
      originalPrice: null,
      savingsBadge: null,
      timeline: 'custom strategy',
      description: 'For large-scale advertisers and e-commerce brands looking for aggressive growth. We build and manage complex, multi-campaign funnels with unlimited ad spend management, custom BI dashboards, and weekly syncs.',
      features: [
        'Unlimited ad spend managed',
        'Search, Display, Shopping, YouTube',
        'Advanced audience targeting',
        'Full funnel strategy',
        'Custom dashboards',
        'Weekly strategy calls',
        'Dedicated team'
      ],
      notIncluded: [],
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg bg-white/5 h-full lg:min-h-[960px] md:min-h-[960px] mt-4',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#7B61FF] text-[#7B61FF] rounded-full hover:bg-[#7B61FF] hover:text-white',
      isCustom: true
    }
  ];

  selectPlan(planName: string, price: string) {
    const text = `Hello CoreGrid team, 
    I am reaching out from your website. I am interested in moving forward with the ${planName} plan under Google Ads service at ${price}. 
    Please let me know the next steps to initiate this project.`;
    const whatsappNumber = '919074501397';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
