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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div class="ag-card p-8">
            <h2 class="text-2xl font-heading font-bold text-[#00E5C3] mb-4">What's Included</h2>
            <ul class="flex flex-col gap-3 text-white text-sm leading-relaxed">
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> Custom UI/UX design with Flutter widgets</li>
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> iOS & Android deployment (App Store / Play Store)</li>
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> REST API / Firebase backend integration</li>
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> Push notifications & deep linking</li>
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> Offline-first architecture</li>
              <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-1">✓</span> App Store submission support</li>
            </ul>
          </div>
          <div class="ag-card p-8">
            <h2 class="text-2xl font-heading font-bold text-[#00E5C3] mb-4">Tech Stack</h2>
            <ul class="flex flex-col gap-3 text-white text-sm leading-relaxed">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00E5C3]"></span> Flutter & Dart</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00E5C3]"></span> Firebase / Node.js backend</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00E5C3]"></span> Google Cloud Platform</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00E5C3]"></span> Riverpod / Bloc state management</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00E5C3]"></span> CI/CD with GitHub Actions / Fastlane</li>
            </ul>
          </div>
        </div>
        <div class="text-center">
          <a routerLink="/contact" class="btn-primary">Get a Free Consultation →</a>
        </div>
      </div>
    </section>
  `
})
export class FlutterComponent {}
