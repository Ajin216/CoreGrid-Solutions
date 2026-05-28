import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../shared/components/banner/banner.component';

@Component({
  selector: 'app-custom-dev',
  standalone: true,
  imports: [RouterLink, BannerComponent],
  template: `
    <app-banner 
      badgeText="Custom Development"
      title="Smart Solutions for"
      highlightTitle="Modern Enterprises"
      quote="We create secure, scalable, and high-performance software customized to your unique business needs."
      dataValue1=""
      dataLabel1=""
      dataValue2=""
      dataLabel2=""
      formTitle="Get a Custom Quote"
      formButtonText="Launch Project"
      serviceName="Custom Development"
      [showBreadcrumbs]="true"
      currentServiceName="Custom Development">
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
        <div class="ag-badge mb-6 badge-pulse-blink" style="color:#00E5C3;border-color:rgba(0,229,195,0.3);"><span class="dot" style="background-color:#00E5C3;"></span>// 07 — Custom Development</div>
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
          Custom <span class="text-[#00E5C3]">Development</span>
        </h1>
        <p class="text-white text-lg md:text-xl max-w-3xl mb-12">
          Bespoke web architectures, custom API workflows, SaaS platforms, and internal tool integrations tailored precisely to match your unique operational demands and business logic.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">Custom</div>
            <div class="text-white text-sm font-mono">Consultation Required</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">Flexible</div>
            <div class="text-white text-sm font-mono">Timeline & Scope</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">Dedicated</div>
            <div class="text-white text-sm font-mono">Engineering Team</div>
          </div>
        </div>
        <!-- What We Build Section -->
        <div class="mb-16">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-8 text-center">
            What We <span class="text-[#00E5C3]">Build</span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 max-w-6xl mx-auto relative">
            
            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">1</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">SaaS Platforms</h3>
                <p class="text-white text-sm">Scalable, multi-tenant architectures designed for high performance and subscription models.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">2</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Custom APIs</h3>
                <p class="text-white text-sm">Robust REST and GraphQL API development bridging systems and enabling seamless data flow.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">3</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Internal Tools</h3>
                <p class="text-white text-sm">Bespoke business tools and operational dashboards optimizing your internal workflows.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">4</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Integrations</h3>
                <p class="text-white text-sm">Deep third-party integrations and webhooks orchestrating your digital ecosystem.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">5</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Modernization</h3>
                <p class="text-white text-sm">Refactoring and migrating legacy systems to modern, maintainable stacks.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">6</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Microservices</h3>
                <p class="text-white text-sm">Decoupled, serverless architectures engineered for infinite scale and resilience.</p>
              </div>
            </div>
            
          </div>
        </div>

        <!-- How We Build Your Software Section -->
        <div class="mb-20">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center">
            How we build your <span class="text-[#00E5C3]">software</span>
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
                  <h3 class="text-white font-bold text-lg mb-1">Analysis</h3>
                  <p class="text-white text-sm">Deep dive into your business logic and technical requirements.</p>
                </div>
              </div>

              <!-- Step 2 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  2
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Architecture</h3>
                  <p class="text-white text-sm">Designing scalable data models and cloud infrastructure plans.</p>
                </div>
              </div>

              <!-- Step 3 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  3
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Engineering</h3>
                  <p class="text-white text-sm">Agile sprints delivering functional code and robust endpoints.</p>
                </div>
              </div>

              <!-- Step 4 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  4
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Deployment</h3>
                  <p class="text-white text-sm">Rigorous QA, CI/CD pipeline setup, and production rollout.</p>
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
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Angular, React, Next.js</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Node.js, Python, Go</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> PostgreSQL / MongoDB</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> AWS / Docker / K8s</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> CI/CD Pipelines</li>
            </ul>
          </div>
        </div>
        <!-- Pricing Plans -->
        <div class="mb-16">
          
          <!-- Custom Websites Grid -->
          <div class="mb-20">
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-4 text-center">
              Custom <span class="text-[#00E5C3]">Websites</span>
            </h2>
            <p class="text-white text-center mb-12 max-w-2xl mx-auto">Choose a plan that fits your website goals. All plans include our signature quality, 100% mobile-first design, and lightning-fast loading speeds.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              @for (plan of websitePlans; track plan.name) {
                <div [class]="plan.containerClass">
                  @if (plan.badge) {
                    <div [class]="'absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full ' + plan.badgeClass">
                      {{ plan.badge }}
                    </div>
                  }

                  @if (!plan.isCustom) {
                    <!-- Standard Cards -->
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
                        <span class="text-white text-sm opacity-80">one-time</span>
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

                    @if (plan.yearlyRenewal) {
                      <div class="text-center text-xs text-white/60 mb-4 pb-4 border-b border-white/10">
                        <span class="block mb-1">↻ Yearly renewal: {{ plan.yearlyRenewal }}</span>
                        <span>(hosting + SSL + Maintenance)</span>
                      </div>
                    }

                    <a (click)="selectPlan(plan.name + ' Custom Dev', plan.price)"
                       [class]="'cursor-pointer block text-center font-semibold py-3 transition-all duration-300 rounded-xl ' + plan.buttonClass">
                      Choose {{ plan.name }}
                    </a>

                  } @else {
                    <!-- Enterprise Card -->
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

                    <a (click)="selectPlan(plan.name + ' Custom Dev', 'Custom Quote')"
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

          <!-- Custom Applications Grid -->
          <div class="mb-16">
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-4 text-center">
              Custom <span class="text-[#00E5C3]">Applications</span>
            </h2>
            <p class="text-white text-center mb-12 max-w-2xl mx-auto">Engineered from scratch for complex workflows, portals, SaaS platforms, and enterprise system architectures.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
              @for (plan of appPlans; track plan.name) {
                <div [class]="plan.containerClass">
                  @if (plan.badge) {
                    <div [class]="'absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full z-20 ' + plan.badgeClass">
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
                        <span class="text-white text-sm opacity-80">one-time</span>
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

                    @if (plan.yearlyRenewal) {
                      <div class="text-center text-xs text-white/60 mb-4 pb-4 border-b border-white/10">
                        <span class="block mb-1">↻ Yearly renewal: {{ plan.yearlyRenewal }}</span>
                        <span>(hosting + SSL + Maintenance)</span>
                      </div>
                    }

                    <a (click)="selectPlan(plan.name + ' Custom Dev', plan.price)"
                       [class]="'cursor-pointer block text-center font-semibold py-3 transition-all duration-300 rounded-xl ' + plan.buttonClass">
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

                    <a (click)="selectPlan(plan.name + ' Custom Dev', 'Custom Quote')"
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
          <a routerLink="/contact" class="btn-primary">Schedule a Discovery Call →</a>
        </div>
      </div>
    </section>
  `
})
export class CustomDevComponent {
  websitePlans = [
    {
      name: 'Starter Website',
      price: '₹6,999',
      originalPrice: '₹9,999',
      savingsBadge: 'Save 30%',
      timeline: '7-day delivery',
      features: [
        '5-page custom website',
        'Mobile responsive design',
        'On-page SEO (3 pages)',
        'Contact form',
        '1 year free hosting',
        'SSL certificate',
        '3 design revisions',
        'Domain Included'
      ],
      notIncluded: [
        'WhatsApp Integration',
        'CMS Integration (Growth has it)',
        'E-commerce setup',
        'More than 3 design revisions'
      ],
      yearlyRenewal: '₹2,999',
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Plus Website',
      price: '₹12,499',
      originalPrice: '₹15,999',
      savingsBadge: 'Save 22%',
      timeline: '10-day delivery',
      features: [
        '7-page custom website',
        'Mobile responsive design',
        'On-page SEO (7 pages)',
        'Contact form',
        '1 year free hosting',
        'SSL certificate',
        'WhatsApp Integration',
        '4 design revisions',
        'Domain Included'
      ],
      notIncluded: [
        'Advanced On-Page SEO',
        'Google Analytics Setup',
        'CMS Setup (Growth has it)',
        'Post-launch Support'
      ],
      yearlyRenewal: '₹3,499',
      badge: '★ Most Popular',
      badgeClass: 'bg-[#FF7A00] text-white',
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Growth Website',
      price: '₹25,999',
      originalPrice: '₹29,999',
      savingsBadge: 'Save 13%',
      timeline: '18-day delivery',
      features: [
        '15-page custom website',
        'Mobile responsive design',
        'Advanced on-page SEO',
        'Contact & lead forms',
        'Basic CMS setup',
        'WhatsApp Integration',
        'Google Analytics setup',
        '8 design revisions',
        '1 year free hosting',
        'SSL certificate',
        '1 month support',
        'Domain Included'
      ],
      notIncluded: [
        'Custom Web App / E-commerce Features',
        'Priority support 24/7',
        'Dedicated Project Manager'
      ],
      yearlyRenewal: '₹4,999',
      badge: '★ Most Popular',
      badgeClass: 'bg-[#FF7A00] text-white',
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px]',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Enterprise Website',
      price: 'Custom Quote',
      originalPrice: null,
      savingsBadge: null,
      timeline: 'Custom timeline',
      description: 'Need something completely bespoke? We build premium high-performance custom website systems, customized animations, integration with your CRM/ERP systems, and advanced SEO strategy.',
      features: [
        'Unlimited pages',
        'Custom interactive elements',
        'Advanced integrations (CRM, ERP)',
        'Premium UI animations',
        'Dedicated project manager',
        'Priority support 24/7',
        '12 months support & maintenance',
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

  appPlans = [
    {
      name: 'Starter Web App',
      price: '₹49,999',
      originalPrice: '₹59,999',
      savingsBadge: 'Save 16%',
      timeline: '2–4 weeks delivery',
      features: [
        'Up to 10 screens / modules',
        'User auth & role management',
        'Admin dashboard & reports',
        'MySQL database',
        'Mobile responsive',
        '3 months support'
      ],
      notIncluded: [
        'Multi-role user system (Growth has it)',
        'Payment gateway integration (Growth has it)',
        'API integrations & automation (Growth has it)',
        'Support beyond 3 months'
      ],
      yearlyRenewal: '₹9,999',
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[760px] md:min-h-[760px] mt-4',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Growth Platform',
      price: '₹99,999',
      originalPrice: '₹1,29,999',
      savingsBadge: 'Save 23%',
      timeline: '4–8 weeks delivery',
      features: [
        'Up to 25 screens / modules',
        'Multi-role user system',
        'Payment gateway integration',
        'Advanced workflows & automation',
        'API integrations',
        '6 months support'
      ],
      notIncluded: [
        'Unlimited scope (Enterprise has it)',
        'Mobile app iOS + Android (Enterprise has it)',
        'Dedicated project manager',
        'Support beyond 6 months'
      ],
      yearlyRenewal: '₹14,999',
      badge: '★ Most Popular',
      badgeClass: 'bg-[#FF7A00] text-white',
      containerClass: 'relative bg-gradient-to-b from-[rgba(123,97,255,0.15)] to-[rgba(0,229,195,0.05)] backdrop-blur-sm border border-[#7B61FF] rounded-2xl p-8 flex flex-col shadow-[0_0_40px_rgba(123,97,255,0.2)] scale-[1.03] z-10 h-full lg:min-h-[760px] md:min-h-[760px]',
      monoColor: 'text-[#00E5C3]',
      buttonClass: 'bg-[#FF7A00] text-white font-bold hover:bg-[#e66a00]',
      isCustom: false
    },
    {
      name: 'Enterprise Build',
      price: 'Custom Quote',
      originalPrice: null,
      savingsBadge: null,
      timeline: 'Custom timeline',
      description: 'For large-scale platforms, mobile apps & full product builds designed to work exactly the way your enterprise runs.',
      features: [
        'Unlimited scope',
        'Mobile app (iOS + Android)',
        'Microservices / scalable architecture',
        'Third-party API suite',
        'Dedicated project manager',
        '12 months support'
      ],
      notIncluded: [],
      yearlyRenewal: null,
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg bg-white/5 h-full lg:min-h-[760px] md:min-h-[760px] mt-4',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#7B61FF] text-[#7B61FF] rounded-xl hover:bg-[#7B61FF] hover:text-white',
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
