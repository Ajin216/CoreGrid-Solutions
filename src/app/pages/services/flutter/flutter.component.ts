import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../shared/components/banner/banner.component';

@Component({
  selector: 'app-flutter',
  standalone: true,
  imports: [RouterLink, BannerComponent],
  template: `
    <app-banner 
      badgeText="Mobile Apps"
      title="Build Powerful"
      highlightTitle="Mobile Experiences"
      quote="Creating high-performance Android and iOS applications with seamless user experiences."
      dataValue1=""
      dataLabel1=""
      dataValue2=""
      dataLabel2=""
      formTitle="Get an App Quote"
      formButtonText="Build My App"
      serviceName="Mobile app development"
      [showBreadcrumbs]="true"
      currentServiceName="Mobile App Development">
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
        <div class="ag-badge mb-6 badge-pulse-blink" style="color:#00E5C3;border-color:rgba(0,229,195,0.3);"><span class="dot" style="background-color:#00E5C3;"></span>// 05 — mobile</div>
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
          Mobile app <span class="text-[#00E5C3]">Development</span>
        </h1>
        <p class="text-white text-lg md:text-xl max-w-3xl mb-12">
          Native-performance cross-platform mobile applications engineered for iOS and Android deployments using a single, unified, and scalable codebase.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">₹49,999</div>
            <div class="text-white text-sm font-mono">Starting Price</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">2–4 wks</div>
            <div class="text-white text-sm font-mono">Typical Timeline</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">iOS + Android</div>
            <div class="text-white text-sm font-mono">Single Codebase</div>
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
                <h3 class="text-white font-bold text-lg mb-1">Custom UI/UX</h3>
                <p class="text-white text-sm">Bespoke design system leveraging Flutter's powerful rendering engine.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">2</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Dual Deployment</h3>
                <p class="text-white text-sm">Simultaneous App Store and Google Play deployment from one codebase.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">3</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Backend Integration</h3>
                <p class="text-white text-sm">Seamless connectivity with custom REST APIs, GraphQL, or Firebase.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">4</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Native Features</h3>
                <p class="text-white text-sm">Integration with push notifications, deep linking, cameras, and GPS.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">5</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Offline First</h3>
                <p class="text-white text-sm">Robust local caching and synchronization for offline-first capabilities.</p>
              </div>
            </div>

            <div class="bg-[rgba(15,22,55,0.6)] backdrop-blur-sm border border-[#324AB3] px-8 py-5 rounded-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-colors shadow-lg">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5C3] p-[1px] shrink-0 flex items-center justify-center">
                <div class="w-full h-full bg-[#0F1637] rounded-full flex items-center justify-center text-[#00E5C3] font-bold text-lg">6</div>
              </div>
              <div class="flex-grow pt-1">
                <h3 class="text-white font-bold text-lg mb-1">Store Submission</h3>
                <p class="text-white text-sm">End-to-end support for compliance and successful app store approvals.</p>
              </div>
            </div>
            
          </div>
        </div>

        <!-- How We Build Your App Section -->
        <div class="mb-20">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center">
            How we build your <span class="text-[#00E5C3]">app</span>
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
                  <h3 class="text-white font-bold text-lg mb-1">Blueprint</h3>
                  <p class="text-white text-sm">Wireframing features, state management logic, and UI flows.</p>
                </div>
              </div>

              <!-- Step 2 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  2
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Prototyping</h3>
                  <p class="text-white text-sm">Creating high-fidelity, interactive designs for your approval.</p>
                </div>
              </div>

              <!-- Step 3 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  3
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Development</h3>
                  <p class="text-white text-sm">Writing clean Dart code and integrating backend services.</p>
                </div>
              </div>

              <!-- Step 4 -->
              <div class="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-6">
                <div class="w-14 h-14 rounded-full bg-[#0F1637] border border-[#00E5C3]/50 flex items-center justify-center text-[#00E5C3] font-bold text-xl shrink-0 z-10 shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                  4
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg mb-1">Deployment</h3>
                  <p class="text-white text-sm">Navigating app store guidelines and publishing to production.</p>
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
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Flutter & Dart</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Firebase Backend</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Google Cloud</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Riverpod / Bloc</li>
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Fastlane CI/CD</li>
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
                    
                    <!-- Top Row: Anchor & Hook -->
                    @if (plan.originalPrice) {
                      <div class="flex items-center gap-2">
                        <span class="relative px-1.5 py-0.5 text-xl font-bold text-white" style="background: linear-gradient(to top right, transparent 45%, #EF4444 48%, #EF4444 52%, transparent 55%), linear-gradient(to bottom right, transparent 45%, #EF4444 48%, #EF4444 52%, transparent 55%);">
                          {{ plan.originalPrice }}
                        </span>
                        <span class="bg-emerald-500/10 text-emerald-400 text-sm font-bold px-2.5 py-1 rounded-full shrink-0">{{ plan.savingsBadge }}</span>
                      </div>
                    }

                    <!-- Bottom Row: The New Price -->
                    <div class="text-5xl font-heading font-bold text-white">
                      {{ plan.price }}
                    </div>
                    
                    <div class="text-white text-xs opacity-80 mt-0.5 mb-1">⏰ {{ plan.delivery }}</div>
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

                  @if (plan.yearlyRenewal) {
                    <div class="text-center text-xs text-white/60 mb-4 pb-4 border-b border-white/10">
                      <span class="block mb-1">↻ Yearly renewal: {{ plan.yearlyRenewal }}</span>
                      <span>(hosting + SSL + Maintenance)</span>
                    </div>
                  }

                  <a (click)="selectPlan(plan.name, plan.price)"
                     [class]="'cursor-pointer block text-center font-semibold py-3 transition-all duration-300 ' + plan.buttonClass">
                    Choose {{ plan.name }}
                  </a>

                } @else {
                  <!-- Enterprise / Custom Card -->
                  <div class="mb-6 text-center">
                    <div class="text-sm font-bold text-white mb-2">{{ plan.name }}</div>
                    <div class="text-5xl font-heading font-bold text-[#7B61FF] mb-2">Custom</div>
                    <div class="text-white text-xs opacity-80 mb-2">⏰ {{ plan.delivery }}</div>
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

                  <a (click)="selectPlan('Custom App', 'Custom Quote')"
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
export class FlutterComponent {
  pricingPlans = [
    {
      name: 'Starter App',
      price: '₹49,999',
      originalPrice: '₹59,999',
      savingsBadge: 'Save 16%',
      delivery: '2–4 weeks delivery',
      features: [
        'Android + iOS Support',
        'Up to 5 custom screens',
        'User authentication (Login/Signup)',
        'Push notification system',
        'Basic backend API integration',
        'App Store submission setup',
        'Play Store submission setup',
        '30 days post-launch support'
      ],
      notIncluded: [
        'Advanced Admin Panel & Web Dashboard',
        'Payment gateway integration (Business has it)',
        'Real-time messaging or updates',
        'Analytics & tracking integration'
      ],
      yearlyRenewal: '₹9,999',
      badge: '★ Most Popular',
      badgeClass: 'bg-[#FF7A00] text-white',
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px] mt-4',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Business App',
      price: '₹89,999',
      originalPrice: '₹1,19,999',
      savingsBadge: 'Save 25%',
      delivery: '4–8 weeks delivery',
      features: [
        'Android + iOS Support',
        'Up to 15 custom screens',
        'Advanced user profiles & roles',
        'Payment gateway integration',
        'Real-time core notifications',
        'REST API / Cloud server backend',
        'Push & in-app message inbox',
        'Google & Apple Analytics integration',
        'Play Store + App Store live launch',
        '60 days post-launch support'
      ],
      notIncluded: [
        'Unlimited custom screens & complex modules',
        'Dedicated server autoscaling setup',
        'Custom interactive charts/data boards',
        'Dedicated full-time Project Manager'
      ],
      yearlyRenewal: '₹14,999',
      badge: '★ Most Popular',
      badgeClass: 'bg-[#FF7A00] text-white',
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px] mt-4',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Enterprise App',
      price: '₹1,49,999',
      originalPrice: '₹1,99,999',
      savingsBadge: 'Save 26%',
      delivery: '12–24 weeks delivery',
      features: [
        'Android + iOS Support',
        'Unlimited custom screens & flow maps',
        'Custom backend API (Node.js/Laravel)',
        'Complex multi-role user dashboards',
        'Advanced real-time chats & updates',
        'High-performance database clustering',
        'Dedicated admin panel / content editor',
        'Security, penetration & compliance audits',
        'Dedicated senior Project Manager',
        '6 months support & live maintenance'
      ],
      notIncluded: [
        'Native Bluetooth/BLE hardware modules',
        'Deep AR/VR camera custom renderers'
      ],
      yearlyRenewal: '₹24,999',
      badge: '★ Most Popular',
      badgeClass: 'bg-[#FF7A00] text-white',
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg h-full lg:min-h-[960px] md:min-h-[960px] mt-4',
      monoColor: 'text-[#7B61FF]',
      buttonClass: 'border border-[#00E5C3] text-[#00E5C3] rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637]',
      isCustom: false
    },
    {
      name: 'Custom App',
      price: 'Custom Quote',
      originalPrice: null,
      savingsBadge: null,
      delivery: 'Custom timeline',
      description: 'Need something completely bespoke? We build custom mobile apps with BLE/IoT device integrations, native SDK wrappers, interactive AR cameras, custom AI integration, and enterprise-grade SLA backing.',
      features: [
        'Custom Bluetooth / BLE integrations',
        'Smart IoT hardware device connectors',
        'Deep platform-specific native plugins',
        'Advanced Web3 / Blockchain elements',
        'Scalable serverless cloud architecture',
        'Tailored SLA support agreements',
        'Full DevOps continuous delivery pipelines',
        'Lifetime codebase quality warranty'
      ],
      notIncluded: [],
      yearlyRenewal: null,
      badge: null,
      containerClass: 'relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg bg-white/5 h-full lg:min-h-[960px] md:min-h-[960px] mt-4',
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
