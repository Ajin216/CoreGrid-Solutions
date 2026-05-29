import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../shared/components/banner/banner.component';

@Component({
  selector: 'app-google-business-profile',
  standalone: true,
  imports: [RouterLink, BannerComponent],
  template: `
    <app-banner 
      badgeText="Local Visibility"
      title="Dominate Local Search"
      highlightTitle="Google Maps"
      quote="We claim, optimize, and manage your Google Business Profile to attract local customers, build 5-star trust, and drive direct actions."
      dataValue1=""
      dataLabel1=""
      dataValue2=""
      dataLabel2=""
      formTitle="Get a Free GBP Audit"
      formButtonText="Claim My Profile"
      serviceName="Google Business Profile Management"
      [showBreadcrumbs]="true"
      currentServiceName="Google Business Profile">
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
        <div class="ag-badge mb-6 badge-pulse-blink" style="color:#00E5C3;border-color:rgba(0,229,195,0.3);"><span class="dot" style="background-color:#00E5C3;"></span>// 08 — local_seo</div>
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
          Google Business Profile <span class="text-[#00E5C3]">Setup & Management</span>
        </h1>
        <p class="text-white text-lg md:text-xl max-w-3xl mb-12">
          Claim, verify, and aggressively optimize your Google Business Profile (formerly Google My Business) to command top rankings on Google Maps and drive highly qualified local traffic to your doorstep.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">₹5,999</div>
            <div class="text-white text-sm font-mono">Starter One-Time Setup</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">+300%</div>
            <div class="text-white text-sm font-mono">Avg. Local Direction Requests</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">Top 3</div>
            <div class="text-white text-sm font-mono">Local Pack Ranking Target</div>
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
                <h3 class="text-white font-bold text-lg mb-1">Claim & Verification</h3>
                <p class="text-white text-sm">Completing Google ownership validation and resolving listing duplicates.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">2</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Information Optimization</h3>
                <p class="text-white text-sm">Targeting high-intent categories, services, and writing geo-optimized copy.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">3</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Review Booster Setup</h3>
                <p class="text-white text-sm">Deploying custom review links and response templates to elevate trust ratings.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">4</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Citation Sync</h3>
                <p class="text-white text-sm">Locking in Name, Address, and Phone number (NAP) consistency across directories.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">5</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Local Citations</h3>
                <p class="text-white text-sm">Regularly building new citations to signal geo-authority to search crawlers.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">6</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Competitor Tracking</h3>
                <p class="text-white text-sm">Identifying competitor category systems and reporting spam/fake listings.</p>
              </div>
            </div>
            
          </div>
        </div>

        <!-- How We Rank Your Business Section -->
        <div class="mb-20">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center">
            How we rank your <span class="text-[#00E5C3]">business</span>
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
                  <h3 class="text-white font-bold text-lg mb-1">Verify</h3>
                  <p class="text-white text-sm">Unlocking profile ownership, fixing duplicates, and passing verification.</p>
                </div>
              </div>

              <!-- Step 2 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  2
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Optimize</h3>
                  <p class="text-white text-sm">Locking in metadata categories, GEO-tagged media, and NAP consistency.</p>
                </div>
              </div>

              <!-- Step 3 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  3
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Automate</h3>
                  <p class="text-white text-sm">Activating automated review-gathering campaign routes.</p>
                </div>
              </div>

              <!-- Step 4 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  4
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Growth</h3>
                  <p class="text-white text-sm">Publishing strategic updates, citations, and clearing spam listings.</p>
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
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Google Business Profile API</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Google Maps Platform</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> BrightLocal & Whitespark</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> SEMrush Local</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Looker Studio Dashboards</li>
            </ul>
          </div>
        </div>

        <!-- Pricing Plans -->
        <div class="mb-16">
          
          <!-- Newly Created Business Setup Plans -->
          <div class="mb-20">
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-4 text-center">
              Newly Created Business <span class="text-[#00E5C3]">Setup Plans</span>
            </h2>
            <p class="text-white text-center mb-12 max-w-2xl mx-auto">Get your business verified and correctly configured on Google Maps. Perfect for newly launched businesses or unclaimed profiles.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              @for (plan of setupPlans; track plan.name) {
                <div [class]="plan.containerClass">
                  @if (plan.badge) {
                    <div [class]="'absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full ' + plan.badgeClass">
                      {{ plan.badge }}
                    </div>
                  }

                  @if (!plan.isCustom) {
                    <!-- Standard Setup Cards -->
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
                        <span class="text-white text-sm opacity-80">{{ plan.priceSuffix }}</span>
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
                      <span>✓ One-time setup package</span>
                    </div>

                    <a (click)="selectPlan(plan.name + ' Setup', plan.price)"
                       [class]="'cursor-pointer block text-center font-semibold py-3 transition-all duration-300 rounded-xl ' + plan.buttonClass">
                      Choose {{ plan.name }}
                    </a>

                  } @else {
                    <!-- Enterprise Setup Custom Card -->
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

                    <a (click)="selectPlan('Enterprise GBP Setup', 'Custom Quote')"
                       [class]="'cursor-pointer block text-center font-semibold py-3 transition-all duration-300 flex items-center justify-center gap-2 rounded-xl ' + plan.buttonClass">
                      Get Custom Quote
                    </a>
                  }
                </div>
              }
            </div>
          </div>

          <!-- Divider -->
          <div class="w-full max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-16"></div>

          <!-- Ongoing Management & Maintenance Plans -->
          <div class="mb-16">
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-4 text-center">
              Ongoing Management & <span class="text-[#00E5C3]">Maintenance Plans</span>
            </h2>
            <p class="text-white text-center mb-12 max-w-2xl mx-auto">Aggressive monthly post updates, regular high-authority citations, active review campaigns, and competitor tracking to dominate search pack rankings.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              @for (plan of maintenancePlans; track plan.name) {
                <div [class]="plan.containerClass">
                  @if (plan.badge) {
                    <div [class]="'absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full z-20 ' + plan.badgeClass">
                      {{ plan.badge }}
                    </div>
                  }

                  @if (!plan.isCustom) {
                    <!-- Standard Maintenance Cards -->
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
                        <span class="text-white text-sm opacity-80">{{ plan.priceSuffix }}</span>
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

                    <a (click)="selectPlan(plan.name + ' Maintenance', plan.price)"
                       [class]="'cursor-pointer block text-center font-semibold py-3 transition-all duration-300 rounded-xl ' + plan.buttonClass">
                      Choose {{ plan.name }}
                    </a>

                  } @else {
                    <!-- Enterprise Maintenance Custom Card -->
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

                    <a (click)="selectPlan('Enterprise GBP Maintenance', 'Custom Quote')"
                       [class]="'cursor-pointer block text-center font-semibold py-3 transition-all duration-300 flex items-center justify-center gap-2 rounded-xl ' + plan.buttonClass">
                      Get Custom Quote
                    </a>
                  }
                </div>
              }
            </div>
          </div>

        </div>
        <div class="text-center">
          <a routerLink="/contact" class="btn-primary">Get a Free GMB Audit →</a>
        </div>
      </div>
    </section>
  `
})
export class GoogleBusinessProfileComponent {
  setupPlans = [
    {
      name: 'Starter Setup',
      price: '₹5,999',
      priceSuffix: 'one-time',
      originalPrice: '₹6,799',
      savingsBadge: 'Save 12%',
      timeline: 'Completed in 10 days',
      isMonthly: false,
      features: [
        'Profile claiming & verification support',
        '100% complete business details optimization',
        'Strategic category & service configuration',
        'Review generation custom link setup',
        'Google Maps custom marker lock',
        '2 months post-setup support'
      ],
      notIncluded: [
        'Advanced Citation Submission',
        'Review QR code design templates',
        'Competitor GMB tracking',
        'GEO-tagged photos (Plus has 24)'
      ],
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[780px] md:min-h-[780px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Advanced Setup',
      price: '₹7,999',
      priceSuffix: 'one-time',
      originalPrice: '₹9,499',
      savingsBadge: 'Save 16%',
      timeline: 'Completed in 14 days',
      isMonthly: false,
      features: [
        'Everything in Starter Setup included',
        'GEO-tagged photo uploads (up to 24)',
        '25 local directories citations setup',
        'Review generation QR code templates',
        'Initial Q&A post setup (up to 5)',
        'Competitor GMB analysis (up to 2)',
        '4 months post-setup support',
        'Local area optimization'
      ],
      notIncluded: [
        'Custom review funnel booster site',
        'Dedicated Local SEO strategy session',
        'Multi-category radius lock'
      ],
      badge: '★ Best Value',
      badgeClass: 'bg-[#FF7A00] text-white',
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[780px] md:min-h-[780px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Premium Setup',
      price: '₹9,999',
      priceSuffix: 'one-time',
      originalPrice: '₹15,000',
      savingsBadge: 'Save 33%',
      timeline: 'Completed in 21 days',
      isMonthly: false,
      features: [
        'Everything in Advanced Setup included',
        'GEO-tagged photo uploads (up to 50)',
        '50 local directories citations setup',
        'Custom local booster micro-landing page',
        'SMS/Email review generation templates',
        '10 initial Q&A post configurations',
        'Competitor GMB analysis (up to 5)',
        '6 months post-setup support'
      ],
      notIncluded: [
        'Bulk multi-location dashboard',
        'Dedicated GMB agency manager link'
      ],
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[780px] md:min-h-[780px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Enterprise Setup',
      price: 'Custom Quote',
      priceSuffix: '',
      timeline: 'Custom launch strategy',
      description: 'Designed for retail chains, franchise groups, and multi-location companies (5+ hubs). We manage bulk Google map claiming, fast postcard verifications, complete directory locks, and unified micro-site launches.',
      originalPrice: null,
      savingsBadge: null,
      isMonthly: false,
      features: [
        'Bulk locations verify & setup',
        '100+ local citations / location',
        'Bespoke local micro-site networks',
        'ERP/CRM lead system hooks',
        'Dedicated multi-location team manager',
        'Priority API speed lane access'
      ],
      notIncluded: [],
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg bg-white/5 h-full lg:min-h-[780px] md:min-h-[780px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#7B61FF] text-[#7B61FF] rounded-xl hover:bg-[#7B61FF] hover:text-white',
      isCustom: true
    }
  ];

  maintenancePlans = [
    {
      name: 'Basic Care',
      price: '₹7,999',
      priceSuffix: '/month',
      originalPrice: '₹10,999',
      savingsBadge: 'Save 27%',
      timeline: 'Ongoing monthly care',
      isMonthly: true,
      features: [
        'Review response writing & templates',
        'Monthly PDF local analysis report',
        'Business hours & holiday updates support',
        '6 optimized local post / month',
        '10 local citations / month',
        'Email customer support',
        'Manage upto 2 profiles',
        'Report sharing'
      ],
      notIncluded: [
        'Competitor GMB tracking (Growth has it)',
        'Weekly Q&A posting (Growth has it)',
        'Spam monitoring & listing reporting'
      ],
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[780px] md:min-h-[780px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Monthly Growth',
      price: '₹9,999',
      priceSuffix: '/month',
      originalPrice: '₹13,999',
      savingsBadge: 'Save 29%',
      timeline: 'Ongoing monthly management',
      isMonthly: true,
      features: [
        'Everything in Basic Care included',
        '10 highly-optimized local posts / month',
        '20 local directories citations / month',
        'Weekly Q&A posting & spam monitor',
        'Competitor GMB tracking (up to 3)',
        'Custom automated review funnel setup',
        'Manage upto 7 profiles',
        'Report sharing'
      ],
      notIncluded: [
        'Competitor local backlink analysis',
        'Review spam fake listing reporting',
        'Dedicated search strategist support'
      ],
      badge: '★ Most Popular',
      badgeClass: 'bg-[#FF7A00] text-white',
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[780px] md:min-h-[780px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Pro Rank Booster',
      price: '₹13,499',
      priceSuffix: '/month',
      originalPrice: '₹17,999',
      savingsBadge: 'Save 25%',
      timeline: 'Ongoing monthly management',
      isMonthly: true,
      features: [
        'Everything in Growth plan included',
        '13 highly-optimized local posts / month',
        '40 local directories citations / month',
        'Active competitor local backlink check',
        'Fake listing review spam removal actions',
        'Dedicated Local SEO expert support',
        'Bi-weekly analysis & planning syncs',
        'Report sharing',
        'Manage upto 12 profiles'
      ],
      notIncluded: [
        'Multi-location bulk support (Enterprise GMB)'
      ],
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[780px] md:min-h-[780px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Enterprise GMB',
      price: 'Custom Quote',
      priceSuffix: '',
      timeline: 'Custom ongoing strategy',
      description: 'Full outsourced local map dominator solution for multi-location brands, clinics, franchises, or retail chains (5+ locations). We handle bulk verification, Looker Studio local dashboards, and regular spam listing cleanups.',
      originalPrice: null,
      savingsBadge: null,
      isMonthly: true,
      features: [
        'Unlimited locations managed',
        'Dedicated GMB agency manager access',
        '100+ local citations / location',
        'Competitor listing takedown strategies',
        'Looker Studio enterprise dashboards',
        'SMS/Email review software dashboard'
      ],
      notIncluded: [],
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg bg-white/5 h-full lg:min-h-[780px] md:min-h-[780px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#7B61FF] text-[#7B61FF] rounded-xl hover:bg-[#7B61FF] hover:text-white',
      isCustom: true
    }
  ];

  selectPlan(planName: string, price: string) {
    const text = `Hello CoreGrid team, 
    I am reaching out from your website. I am interested in moving forward with the ${planName} plan under Google Business Profile service at ${price}. 
    Please let me know the next steps to initiate this project.`;
    const whatsappNumber = '919074501397';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
