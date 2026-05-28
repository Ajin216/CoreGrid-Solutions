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
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">₹89,999</div>
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
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

    <div class="relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg mt-4">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF7A00] text-white text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full">★ Most Popular</div>
      <div class="mb-6 text-center">
        <div class="text-lg font-bold text-white mb-2">Starter App</div>
        <div class="text-5xl font-heading font-bold text-white mb-3">₹89,999</div>
        <div class="text-white/80 text-sm flex items-center justify-center gap-1">
          <span>🏷️</span> 2–4 weeks delivery
        </div>
      </div>
      <div class="w-full h-px bg-white/10 mb-6"></div>
      <ul class="flex flex-col gap-4 text-sm text-white flex-grow mb-8">
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Up to 5 screens</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> User login/signup</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Push notifications</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Basic API integration</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Play Store submission</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> App Store submission</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> 30 days post-launch support</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Android + iOS</li>
      </ul>
      <a (click)="selectPlan('Starter App', '₹89,999')" class="cursor-pointer block text-center bg-[#FF7A00] text-white font-bold py-3 rounded-full hover:bg-[#e66a00] transition-all duration-300">Choose Starter App</a>
    </div>

    <div class="relative bg-gradient-to-b from-[rgba(123,97,255,0.15)] to-[rgba(0,229,195,0.05)] backdrop-blur-sm border border-[#7B61FF] rounded-2xl p-8 flex flex-col shadow-[0_0_40px_rgba(123,97,255,0.2)] scale-[1.03] z-10">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF7A00] text-white text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full">★ Most Popular</div>
      <div class="mb-6 text-center">
        <div class="text-lg font-bold text-white mb-2">Business App</div>
        <div class="text-5xl font-heading font-bold text-white mb-3">₹1,49,999</div>
        <div class="text-white/80 text-sm flex items-center justify-center gap-1">
          <span>🏷️</span> 4–8 weeks delivery
        </div>
      </div>
      <div class="w-full h-px bg-[#7B61FF]/30 mb-6"></div>
      <ul class="flex flex-col gap-4 text-sm text-white flex-grow mb-8">
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Up to 15 screens</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Advanced user management</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Payment gateway integration</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Real-time features</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Admin web dashboard</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> REST API / backend</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Push & in-app notifications</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Analytics integration</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Play Store + App Store</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> 60 days support</li>
      </ul>
      <a (click)="selectPlan('Business App', '₹1,49,999')" class="cursor-pointer block text-center bg-[#FF7A00] text-white font-bold py-3 rounded-full hover:bg-[#e66a00] transition-all duration-300">Choose Business App</a>
    </div>

    <div class="relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg mt-4">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF7A00] text-white text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full">★ Most Popular</div>
      <div class="mb-6 text-center">
        <div class="text-lg font-bold text-white mb-2">Enterprise App</div>
        <div class="text-5xl font-heading font-bold text-white mb-1">₹2,00,000</div>
        <div class="text-3xl font-heading font-bold text-white mb-3">Starts</div>
        <div class="text-white/80 text-sm flex items-center justify-center gap-1">
          <span>🏷️</span> 12–24 weeks delivery
        </div>
      </div>
      <div class="w-full h-px bg-white/10 mb-6"></div>
      <ul class="flex flex-col gap-4 text-sm text-white flex-grow mb-8">
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Unlimited screens & features</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Custom backend<br><span class="opacity-70">(Node/Laravel)</span></li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Multi-role user system</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Advanced real-time features</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> 3rd party integrations</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Scalable architecture</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Full backend + admin panel</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Security & compliance audit</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Dedicated project manager</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> 6 months support & maintenance</li>
      </ul>
      <a (click)="selectPlan('Enterprise App', '₹2,00,000')" class="cursor-pointer block text-center bg-[#FF7A00] text-white font-bold py-3 rounded-full hover:bg-[#e66a00] transition-all duration-300">Choose Enterprise App</a>
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
export class FlutterComponent {
  selectPlan(planName: string, price: string) {
    const text = `Hello CoreGrid team, 
    I am reaching out from your website. I am interested in moving forward with the ${planName} plan at ${price}. 
    Please let me know the next steps to initiate this project.`;
    const whatsappNumber = '919074501397';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
