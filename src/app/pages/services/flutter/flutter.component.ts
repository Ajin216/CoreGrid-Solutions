import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flutter',
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
        <div class="ag-badge mb-6 badge-pulse-blink" style="color:#00E5C3;border-color:rgba(0,229,195,0.3);"><span class="dot" style="background-color:#00E5C3;"></span>// 05 — mobile</div>
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
          Flutter App <span class="text-[#00E5C3]">Development</span>
        </h1>
        <p class="text-white text-lg md:text-xl max-w-3xl mb-12">
          Native-performance cross-platform mobile applications engineered for iOS and Android deployments using a single, unified, and scalable codebase.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">₹90,000</div>
            <div class="text-white text-sm font-mono">Starting Price</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-[#00E5C3] mb-2">8–14 wks</div>
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

            <!-- Basic -->
            <div class="relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg">
              <div class="mb-6">
                <div class="text-xs font-mono text-[#7B61FF] uppercase tracking-widest mb-2">// Basic</div>
                <div class="text-4xl font-heading font-bold text-white mb-1">₹90,000</div>
                <div class="text-white text-sm">One-time · 4–6 week delivery</div>
              </div>
              <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Single Codebase (iOS & Android)</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Up to 10 Screens</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Standard UI/UX Design</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Basic Firebase Integration</li>
                
              </ul>
              <a routerLink="/contact" class="block text-center border border-[#00E5C3] text-[#00E5C3] font-semibold py-3 rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637] transition-all duration-300">Get Started →</a>
            </div>

            <!-- Standard (Featured) -->
            <div class="relative bg-gradient-to-b from-[rgba(123,97,255,0.15)] to-[rgba(0,229,195,0.05)] backdrop-blur-sm border border-[#7B61FF] rounded-2xl p-8 flex flex-col shadow-[0_0_40px_rgba(123,97,255,0.2)] scale-[1.03]">
              <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7B61FF] to-[#00E5C3] text-[#0F1637] text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full">Most Popular</div>
              <div class="mb-6">
                <div class="text-xs font-mono text-[#00E5C3] uppercase tracking-widest mb-2">// Standard</div>
                <div class="text-4xl font-heading font-bold text-white mb-1">₹1,80,000</div>
                <div class="text-white text-sm">One-time · 8–12 week delivery</div>
              </div>
              <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Dual Deployment Setup</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Custom Premium UI/UX</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Push Notifications & Deep Linking</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Advanced API Integrations</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> State Management (Bloc/Riverpod)</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Store Publishing Support</li>
              </ul>
              <a routerLink="/contact" class="block text-center bg-gradient-to-r from-[#7B61FF] to-[#00E5C3] text-[#0F1637] font-bold py-3 rounded-xl hover:opacity-90 transition-all duration-300">Get Started →</a>
            </div>

            <!-- Premium -->
            <div class="relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg">
              <div class="mb-6">
                <div class="text-xs font-mono text-[#7B61FF] uppercase tracking-widest mb-2">// Premium</div>
                <div class="text-4xl font-heading font-bold text-white mb-1">₹3,50,000+</div>
                <div class="text-white text-sm">One-time · 14–20 week delivery</div>
              </div>
              <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Enterprise-scale Application</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Complex Animations & 3D Elements</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Offline-First Capabilities</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Native Device Feature Access</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Custom Backend Development</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Advanced Security & Encryption</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> 6 Months Ongoing Maintenance</li>
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
export class FlutterComponent { }
