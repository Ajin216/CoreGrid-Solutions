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
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">₹12,999</div>
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
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

    <div class="relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg">
      <div class="mb-6">
        <div class="text-xs font-mono text-[#7B61FF] uppercase tracking-widest mb-2">// Local SEO</div>
        <div class="text-4xl font-heading font-bold text-white mb-1">₹12,999</div>
        <div class="text-white text-sm">/month · 5–7 months to results</div>
      </div>
      <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Up to 10 keywords</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Google My Business optimization</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> On-page SEO (5 pages)</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Local citation building</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Monthly rank report</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Basic link building (5/mo)</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Competitor analysis</li>
      </ul>
      <a (click)="selectPlan('Local SEO', '₹12,999/month')" class="cursor-pointer block text-center border border-[#00E5C3] text-[#00E5C3] font-semibold py-3 rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637] transition-all duration-300">Choose Local SEO</a>
    </div>

    <div class="relative bg-gradient-to-b from-[rgba(123,97,255,0.15)] to-[rgba(0,229,195,0.05)] backdrop-blur-sm border border-[#7B61FF] rounded-2xl p-8 flex flex-col shadow-[0_0_40px_rgba(123,97,255,0.2)] scale-[1.03]">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7B61FF] to-[#00E5C3] text-[#0F1637] text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full">★ Most Popular</div>
      <div class="mb-6">
        <div class="text-xs font-mono text-[#00E5C3] uppercase tracking-widest mb-2">// Growth SEO</div>
        <div class="text-4xl font-heading font-bold text-white mb-1">₹25,999</div>
        <div class="text-white text-sm">/month · 6–8 months to results</div>
      </div>
      <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Up to 30 keywords</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Full on-page SEO</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Content creation (4 blogs/mo)</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Quality link building (15/mo)</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Technical SEO audit & fix</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Google Search Console setup</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Monthly detailed report</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Competitor tracking</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Conversion optimization</li>
      </ul>
      <a (click)="selectPlan('Growth SEO', '₹25,999/month')" class="cursor-pointer block text-center bg-gradient-to-r from-[#7B61FF] to-[#00E5C3] text-[#0F1637] font-bold py-3 rounded-xl hover:opacity-90 transition-all duration-300">Choose Growth SEO</a>
    </div>

    <div class="relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg">
      <div class="mb-6">
        <div class="text-xs font-mono text-[#7B61FF] uppercase tracking-widest mb-2">// Enterprise SEO</div>
        <div class="text-4xl font-heading font-bold text-white mb-1">Custom</div>
        <div class="text-white text-sm">8–12 months to results</div>
      </div>
      <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Unlimited keywords</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Full website SEO overhaul</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Content strategy & creation</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Premium link building (30+/mo)</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Dedicated SEO manager</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Bi-weekly strategy calls</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Advanced analytics dashboard</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> PR & digital PR outreach</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> International / multi-location SEO</li>
      </ul>
      <a (click)="selectPlan('Enterprise SEO', 'Custom Quote')" class="cursor-pointer block text-center border border-[#00E5C3] text-[#00E5C3] font-semibold py-3 rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637] transition-all duration-300">Get Custom Quote</a>
    </div>

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
  selectPlan(planName: string, price: string) {
    const text = `Hello CoreGrid team, 
    I am reaching out from your website. I am interested in moving forward with the ${planName} plan at ${price}. 
    Please let me know the next steps to initiate this project.`;
    const whatsappNumber = '919074501397';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
