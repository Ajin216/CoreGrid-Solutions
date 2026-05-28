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
              <li class="flex items-center gap-2 bg-[rgba(15,22,55,0.8)] px-5 py-2.5 rounded-full border border-[#324AB3] hover:border-[#00E5C3] transition-colors"><span class="w-2 h-2 rounded-full bg-[#00E5C3]"></span> Meta (FB/IG)</li>
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

            <!-- Basic -->
            <div class="relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg">
  <div class="mb-6">
    <div class="text-xs font-mono text-[#7B61FF] uppercase tracking-widest mb-2">// Starter</div>
    <div class="text-sm text-gray-400 line-through mb-1">₹14,999</div>
    <div class="flex items-baseline gap-1 mb-2">
      <span class="text-4xl font-heading font-bold text-white">₹9,999</span>
      <span class="text-white text-sm">/month</span>
    </div>
    <div class="text-white/70 text-xs flex items-center gap-1">
      <span>🕒</span> management fee only
    </div>
  </div>
  <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> 1 platform (Google Ads or Meta)</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Ad account setup</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Keyword / audience research</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Ad copy creation</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Up to Rs.30,000 ad spend managed</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Monthly performance report</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Basic conversion tracking</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> WhatsApp support</li>
  </ul>
  <a (click)="selectPlan('Starter Marketing', '₹9,999/month')" class="cursor-pointer block text-center border border-[#00E5C3] text-[#00E5C3] font-semibold py-3 rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637] transition-all duration-300">Choose Starter</a>
</div>

<div class="relative bg-gradient-to-b from-[rgba(123,97,255,0.15)] to-[rgba(0,229,195,0.05)] backdrop-blur-sm border border-[#7B61FF] rounded-2xl p-8 flex flex-col shadow-[0_0_40px_rgba(123,97,255,0.2)] scale-[1.03]">
  <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7B61FF] to-[#00E5C3] text-[#0F1637] text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full">★ Most Popular</div>
  <div class="mb-6">
    <div class="text-xs font-mono text-[#00E5C3] uppercase tracking-widest mb-2">// Growth</div>
    <div class="text-sm text-[#7B61FF]/70 line-through mb-1">₹26,999</div>
    <div class="flex items-baseline gap-1 mb-2">
      <span class="text-4xl font-heading font-bold text-white">₹18,999</span>
      <span class="text-white text-sm">/month</span>
    </div>
    <div class="text-white/70 text-xs flex items-center gap-1">
      <span>🕒</span> management fee only
    </div>
  </div>
  <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Google Ads + Meta Ads</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Full campaign setup & strategy</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> A/B ad copy & creative testing</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Remarketing / retargeting</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Up to Rs.1 Lakh ad spend managed</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Google Analytics + Meta Pixel setup</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> SEO basics (on-page, GMB)</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Bi-weekly performance report</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Dedicated account manager</li>
  </ul>
  <a (click)="selectPlan('Growth Marketing', '₹18,999/month')" class="cursor-pointer block text-center bg-gradient-to-r from-[#7B61FF] to-[#00E5C3] text-[#0F1637] font-bold py-3 rounded-xl hover:opacity-90 transition-all duration-300">Choose Growth</a>
</div>

<div class="relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg">
  <div class="mb-6">
    <div class="text-xs font-mono text-[#7B61FF] uppercase tracking-widest mb-2">// 360 Pro</div>
    <div class="text-sm text-gray-400 line-through mb-1">₹49,999</div>
    <div class="flex items-baseline gap-1 mb-2">
      <span class="text-4xl font-heading font-bold text-white">₹35,999</span>
      <span class="text-white text-sm">/month</span>
    </div>
    <div class="text-white/70 text-xs flex items-center gap-1">
      <span>🕒</span> management fee only
    </div>
  </div>
  <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Google Ads + Meta + YouTube Ads</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Full SEO (30 keywords)</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Social Media Management (2 platforms)</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Content creation (reels + posts)</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Advanced audience & funnel strategy</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Up to Rs.3 Lakh ad spend managed</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Landing page creation & optimisation</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Email / WhatsApp marketing automation</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Weekly reports + monthly strategy call</li>
    <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Priority support 7 days a week</li>
  </ul>
  <a (click)="selectPlan('360 Pro Marketing', '₹35,999/month')" class="cursor-pointer block text-center border border-[#00E5C3] text-[#00E5C3] font-semibold py-3 rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637] transition-all duration-300">Choose 360 Pro</a>
</div>

<div class="relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg bg-white/5">
  <div class="mb-6">
    <div class="text-xs font-mono text-[#7B61FF] uppercase tracking-widest mb-2">// Enterprise</div>
    <div class="text-4xl font-heading font-bold text-[#7B61FF] mb-2">Custom</div>
    <div class="text-white text-sm opacity-80 flex items-center gap-1">
      <span>🏷️</span> custom quote
    </div>
  </div>
  <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
    <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> All channels managed</li>
    <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Unlimited ad spend management</li>
    <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Full SEO + content strategy</li>
    <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Influencer & PR outreach</li>
    <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Custom analytics dashboards</li>
    <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Dedicated team of specialists</li>
    <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Weekly strategy calls</li>
    <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> CRO & landing page testing</li>
    <li class="flex items-start gap-2"><span class="text-[#7B61FF] mt-0.5">✓</span> Multi-city / multi-location campaigns</li>
  </ul>
  <a (click)="selectPlan('Enterprise Marketing', 'Custom Quote')" class="cursor-pointer block text-center border border-[#7B61FF] text-[#7B61FF] font-semibold py-3 rounded-xl hover:bg-[#7B61FF] hover:text-white transition-all duration-300">Get Custom Quote</a>
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
export class DigitalMarketingComponent {
  selectPlan(planName: string, price: string) {
    const text = `Hello CoreGrid team, 
    I am reaching out from your website. I am interested in moving forward with the ${planName} plan at ${price}. 
    Please let me know the next steps to initiate this project.`;
    const whatsappNumber = '919074501397';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
