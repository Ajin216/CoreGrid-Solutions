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
      serviceName="Custom Development">
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
        <div class="mb-4">
          <a routerLink="/services" class="text-[#00E5C3] text-sm font-mono hover:text-white transition-colors">← Back to Services</a>
        </div>
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
  <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-4 text-center">
    Pricing <span class="text-[#00E5C3]">Tiers</span>
  </h2>
  <p class="text-white text-center mb-12 max-w-2xl mx-auto">Because custom software scopes vary wildly, these tiers provide a general baseline for our engineering engagements.</p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

    <div class="relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg mt-4">
      <div class="mb-6">
        <div class="text-xs font-mono text-[#7B61FF] uppercase tracking-widest mb-2">// Starter Web App</div>
        <div class="text-4xl font-heading font-bold text-white mb-2">₹49,999</div>
        <div class="text-white/80 text-sm leading-relaxed min-h-[40px]">
          Best for internal tools, portals & simple custom platforms
        </div>
      </div>
      <div class="w-full h-px bg-white/10 mb-6"></div>
      <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Up to 10 screens / modules</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> User auth & role management</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Admin dashboard & reports</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> MySQL database</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Mobile responsive</li>
        <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> 3 months support</li>
      </ul>
      <a (click)="selectPlan('Starter Web App', '₹49,999')" class="cursor-pointer block text-center border border-[#00E5C3] text-[#00E5C3] font-semibold py-3 rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637] transition-all duration-300 flex items-center justify-center gap-2">
        <span class="text-lg">💬</span> Get This Plan
      </a>
    </div>

    <div class="relative bg-gradient-to-b from-[rgba(123,97,255,0.15)] to-[rgba(0,229,195,0.05)] backdrop-blur-sm border border-[#7B61FF] rounded-2xl p-8 flex flex-col shadow-[0_0_40px_rgba(123,97,255,0.2)] scale-[1.03] z-10">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF7A00] text-white text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full whitespace-nowrap">★ Most Popular</div>
      <div class="mb-6">
        <div class="text-xs font-mono text-[#00E5C3] uppercase tracking-widest mb-2">// Growth Platform</div>
        <div class="text-4xl font-heading font-bold text-white mb-2">₹99,999</div>
        <div class="text-white/80 text-sm leading-relaxed min-h-[40px]">
          For marketplaces, SaaS, booking systems & complex platforms
        </div>
      </div>
      <div class="w-full h-px bg-[#7B61FF]/30 mb-6"></div>
      <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Up to 25 screens / modules</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Multi-role user system</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Payment gateway integration</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> Advanced workflows & automation</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> API integrations</li>
        <li class="flex items-start gap-2"><span class="text-[#FF7A00] mt-0.5">✓</span> 6 months support</li>
      </ul>
      <a (click)="selectPlan('Growth Platform', '₹99,999')" class="cursor-pointer block text-center bg-[#FF7A00] text-white font-bold py-3 rounded-xl hover:bg-[#e66a00] transition-all duration-300 flex items-center justify-center gap-2">
        <span class="text-lg">💬</span> Get This Plan
      </a>
    </div>

    <div class="relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg bg-white/5 mt-4">
      <div class="mb-6">
        <div class="text-xs font-mono text-[#7B61FF] uppercase tracking-widest mb-2">// Enterprise Build</div>
        <div class="text-4xl font-heading font-bold text-[#7B61FF] mb-2">Custom Quote</div>
        <div class="text-white/80 text-sm leading-relaxed min-h-[40px]">
          For large-scale platforms, mobile apps & full product builds
        </div>
      </div>
      <div class="w-full h-px bg-white/10 mb-6"></div>
      <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
        <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Unlimited scope</li>
        <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Mobile app (iOS + Android)</li>
        <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Microservices / scalable architecture</li>
        <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Third-party API suite</li>
        <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Dedicated project manager</li>
        <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> 12 months support</li>
      </ul>
      <a (click)="selectPlan('Enterprise Build', 'Custom Quote')" class="cursor-pointer block text-center border border-[#7B61FF] text-[#7B61FF] font-semibold py-3 rounded-xl hover:bg-[#7B61FF] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
        <span class="text-lg">💬</span> Get This Plan
      </a>
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
  selectPlan(planName: string, price: string) {
    const text = `Hi, I visited your CoreGrid website and I'm interested in the ${planName} plan at ${price}.`;
    const whatsappNumber = '919074501397';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
