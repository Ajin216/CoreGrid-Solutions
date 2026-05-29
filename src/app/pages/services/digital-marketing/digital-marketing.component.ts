import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../shared/components/banner/banner.component';

@Component({
  selector: 'app-digital-marketing',
  standalone: true,
  imports: [RouterLink, BannerComponent],
  template: `
    <app-banner 
      badgeText="Digital Marketing"
      title="Dominate Your"
      highlightTitle="Market"
      quote="Reach the right audience, generate quality leads, and grow your brand with data-driven marketing strategies."
      dataValue1=""
      dataLabel1=""
      dataValue2=""
      dataLabel2=""
      formTitle="Get a Marketing Plan"
      formButtonText="Grow My Brand"
      serviceName="Digital Marketing"
      [showBreadcrumbs]="true"
      currentServiceName="Digital Marketing">
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
        <div class="ag-badge mb-6 badge-pulse-blink" style="color:#00E5C3;border-color:rgba(0,229,195,0.3);"><span class="dot" style="background-color:#00E5C3;"></span>// 03 — marketing</div>
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
          Digital <span class="text-[#00E5C3]">Marketing</span>
        </h1>
        <p class="text-white text-lg md:text-xl max-w-3xl mb-12">
          Paid ads, social media campaigns, and full-funnel marketing strategies calibrated to maximise ROI, build lasting brand loyalty, and drive measurable growth.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">₹9,999</div>
            <div class="text-white text-sm font-mono">Starting at / month</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">5× ROI</div>
            <div class="text-white text-sm font-mono">Average Return</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">Multi-Channel</div>
            <div class="text-white text-sm font-mono">Campaign Coverage</div>
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
                <h3 class="text-white font-bold text-lg mb-1">Social Strategy</h3>
                <p class="text-white text-sm">Comprehensive social media strategies backed by thorough market research and content calendars.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">2</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Meta Campaigns</h3>
                <p class="text-white text-sm">High-converting Facebook and Instagram ad campaigns optimized for ROAS.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">3</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Audience Targeting</h3>
                <p class="text-white text-sm">Precision targeting, retargeting pools, and advanced lookalike audience modelling.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">4</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Creative Design</h3>
                <p class="text-white text-sm">Eye-catching visual creatives and compelling ad copy designed to stop the scroll.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">5</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Email Automation</h3>
                <p class="text-white text-sm">Automated email sequences capturing leads and nurturing them into loyal customers.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">6</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Attribution Reports</h3>
                <p class="text-white text-sm">Transparent monthly reporting breaking down performance metrics and attribution.</p>
              </div>
            </div>
            
          </div>
        </div>

        <!-- How We Launch Section -->
        <div class="mb-20">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center">
            How we launch your <span class="text-[#00E5C3]">campaigns</span>
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
                  <h3 class="text-white font-bold text-lg mb-1">Research</h3>
                  <p class="text-white text-sm">Analyzing your audience, competitors, and market landscape.</p>
                </div>
              </div>

              <!-- Step 2 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  2
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Strategy</h3>
                  <p class="text-white text-sm">Mapping out funnels, budgets, and creative direction.</p>
                </div>
              </div>

              <!-- Step 3 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  3
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Execution</h3>
                  <p class="text-white text-sm">Building out ads, writing copy, and setting up tracking.</p>
                </div>
              </div>

              <!-- Step 4 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  4
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Optimization</h3>
                  <p class="text-white text-sm">Continuous A/B testing and budget scaling based on data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Platforms We Master -->
        <div class="mb-16 max-w-4xl mx-auto">
          <div class="ag-card p-8">
            <h2 class="text-2xl font-heading font-bold text-[#00E5C3] mb-6 text-center">Platforms We Master</h2>
            <ul class="flex flex-wrap justify-center gap-4 text-white text-sm leading-relaxed">
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Meta (FB/IG/Whatsapp)</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Google Ads</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> LinkedIn B2B</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Mailchimp / Klaviyo</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> GA4 & Tag Manager</li>
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

                  <a (click)="selectPlan(plan.name + ' Marketing', plan.price)"
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
                  </ul>

                  <a (click)="selectPlan('Enterprise Marketing', 'Custom Quote')"
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
export class DigitalMarketingComponent {
  pricingPlans = [
    {
      name: 'Starter',
      price: '₹9,999',
      originalPrice: '₹14,999',
      savingsBadge: 'Save 33%',
      timeline: 'management fee only',
      features: [
        '1 platform (Google Ads or Meta)',
        'Ad account setup',
        'Keyword / audience research',
        'Ad copy creation',
        'Up to Rs.30,000 ad spend managed',
        'Monthly performance report',
        'Basic conversion tracking',
        'WhatsApp support'
      ],
      notIncluded: [
        'Google Ads + Meta Ads (Growth has both)',
        'Remarketing / retargeting',
        'SEO basics',
        'Dedicated account manager'
      ],
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Growth',
      price: '₹18,999',
      originalPrice: '₹26,999',
      savingsBadge: 'Save 30%',
      timeline: 'management fee only',
      features: [
        'Google Ads + Meta Ads',
        'Full campaign setup & strategy',
        'A/B ad copy & creative testing',
        'Remarketing / retargeting',
        'Up to Rs.1 Lakh ad spend managed',
        'Google Analytics + Meta Pixel setup',
        'SEO basics (on-page, GMB)',
        'Bi-weekly performance report',
        'Dedicated account manager'
      ],
      notIncluded: [
        'YouTube Ads (Pro has YouTube)',
        'Full SEO (Pro has 30 keywords)',
        'Social Media Management',
        'Content creation (reels + posts)',
        'Landing page creation & optimization'
      ],
      badge: '★ Most Popular',
      badgeClass: 'bg-[#FF7A00] text-white',
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: '360 Pro',
      price: '₹35,999',
      originalPrice: '₹49,999',
      savingsBadge: 'Save 28%',
      timeline: 'management fee only',
      features: [
        'Google Ads + Meta + YouTube Ads',
        'Full SEO (30 keywords)',
        'Social Media Management (2 platforms)',
        'Content creation (reels + posts)',
        'Advanced audience & funnel strategy',
        'Up to Rs.3 Lakh ad spend managed',
        'Landing page creation & optimisation',
        'Email / WhatsApp marketing automation',
        'Weekly reports + monthly strategy call',
        'Priority support 7 days a week'
      ],
      notIncluded: [
        'All channels managed (Enterprise has all)',
        'Unlimited ad spend management',
        'PR & influencer outreach'
      ],
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
      timeline: 'custom strategy',
      description: 'Full-funnel dominance. We build a customized, multi-channel marketing engine designed to scale your brand aggressively, utilizing every growth channel at maximum efficiency.',
      originalPrice: null,
      savingsBadge: null,
      features: [
        'All channels managed',
        'Unlimited ad spend management',
        'Full SEO + content strategy',
        'Influencer & PR outreach',
        'Custom analytics dashboards',
        'Dedicated team of specialists',
        'Weekly strategy calls',
        'CRO & landing page testing',
        'Multi-city / multi-location campaigns'
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
    I am reaching out from your website. I am interested in moving forward with the ${planName} plan under Digital Marketing service at ${price}. 
    Please let me know the next steps to initiate this project.`;
    const whatsappNumber = '919074501397';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}

