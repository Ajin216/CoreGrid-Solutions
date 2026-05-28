import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <div class="w-full bg-[#0F1637] border-b border-[#00E5C3]/20 relative z-50 pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <!-- Moving Dot Grid Background -->
      <div class="moving-dot-grid opacity-40"></div>
 
      <!-- Celestial Orbs Background -->
      <div class="celestial-decorations">
        <div class="space-orb orb-violet-glow" style="top:-10%; left:5%; width:300px; height:300px;"></div>
        <div class="space-orb orb-teal-glow" style="bottom:-10%; right:5%; width:350px; height:350px;"></div>
        <div class="space-orb orb-indigo-glow" style="top:30%; left:45%; width:250px; height:250px;"></div>
      </div>
 
      <!-- Background Ambient Glow -->
      <div class="absolute inset-0 bg-gradient-to-br from-[rgba(123,97,255,0.05)] to-transparent pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        <!-- Left Side: Quotes & Data -->
        <div class="ag-fade-up">
          @if (showBreadcrumbs) {
            <nav class="flex items-center gap-2.5 text-sm md:text-base font-mono text-white/50 mb-6" aria-label="Breadcrumb">
              <a routerLink="/" class="hover:text-[#00E5C3] transition-colors">Home</a>
              <span class="text-white/30">/</span>
              <a routerLink="/services" class="hover:text-[#00E5C3] transition-colors">Services</a>
              <span class="text-white/30">/</span>
              <span class="text-[#00E5C3] font-medium">{{ currentServiceName }}</span>
            </nav>
          }
          <div class="ag-badge badge-pulse-blink mb-4" style="color:#00E5C3;border-color:rgba(0,229,195,0.35);">
            <span class="dot" style="background-color:#00E5C3;"></span>
            {{ badgeText }}
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            {{ title }} <span class="text-gradient">{{ highlightTitle }}</span>
          </h2>
          <p class="text-white text-lg md:text-xl mb-10 opacity-90 border-l-4 border-[#00E5C3] pl-5 italic font-light">
            "{{ quote }}"
          </p>
          
          <div class="flex flex-wrap gap-10">
            <div>
              <div class="text-4xl md:text-5xl font-heading font-bold text-[#FF8C00] mb-1">{{ dataValue1 }}</div>
              <div class="text-white text-sm opacity-80 uppercase tracking-widest font-mono">{{ dataLabel1 }}</div>
            </div>
            <div>
              <div class="text-4xl md:text-5xl font-heading font-bold text-[#00E5C3] mb-1">{{ dataValue2 }}</div>
              <div class="text-white text-sm opacity-80 uppercase tracking-widest font-mono">{{ dataLabel2 }}</div>
            </div>
          </div>
        </div>
 
        <!-- Right Side: Floating Form -->
        <div class="ag-float-slow relative">
          <!-- Ambient glow behind card -->
          <div class="absolute -inset-5 bg-[radial-gradient(ellipse_at_center,rgba(255,140,0,0.12),transparent_70%)] pointer-events-none z-0"></div>
 
          <div class="ag-card relative z-10" style="padding:40px;border:1px solid rgba(255,140,0,0.15);">
            <!-- Orange accent bar -->
            <div style="height:3px;background:linear-gradient(90deg,#FF8C00,#FF6B00,#FFB347);border-radius:2px;margin-bottom:24px;"></div>
 
            <!-- Form header -->
            <h3 style="font-size:1.5rem;color:#F0EFFF;margin-bottom:6px;font-family:'Space Grotesk',sans-serif;font-weight:700;">
              {{ formTitle }}
            </h3>
            <p style="font-size:0.9rem;margin-bottom:24px;color:#ffffff;opacity:0.8;">
              Fill in below — we'll send your personalised plan in <strong style="color:#FF8C00;">24 hours</strong>. ⚡
            </p>
 
            <form #bannerForm="ngForm" (ngSubmit)="sendToWhatsApp(bannerForm)" novalidate style="display:flex;flex-direction:column;gap:16px;">
              <div class="form-group">
                <input type="text" placeholder="Your Name *" [(ngModel)]="formData.name" name="name" required minlength="2" pattern="^[a-zA-Z][a-zA-Z\s]{1,49}$"
                       #nameInput="ngModel"
                       [class.is-invalid]="nameInput.invalid && (nameInput.touched || bannerForm.submitted)"
                       class="w-full rounded-xl bg-[rgba(10,15,46,0.8)] border border-[rgba(0,229,195,0.4)] text-[#00E5C3] px-4 py-3 focus:border-[#00E5C3] outline-none transition-all placeholder:text-[#00E5C3] placeholder:opacity-50">
                @if (nameInput.invalid && (nameInput.touched || bannerForm.submitted)) {
                  <div class="validation-error">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0;">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                    </svg>
                    @if (nameInput.errors?.['required']) {
                      Name is required
                    } @else if (nameInput.errors?.['minlength']) {
                      Name must be at least 2 characters
                    } @else if (nameInput.errors?.['pattern']) {
                      Name must start with a letter and contain letters/spaces only
                    }
                  </div>
                }
              </div>
                     
              <div class="form-group">
                <input type="tel" placeholder="Phone Number *" [(ngModel)]="formData.phone" name="phone" required pattern="^[+]?[0-9\s\-]{10,15}$"
                       #phoneInput="ngModel"
                       [class.is-invalid]="phoneInput.invalid && (phoneInput.touched || bannerForm.submitted)"
                       class="w-full rounded-xl bg-[rgba(10,15,46,0.8)] border border-[rgba(0,229,195,0.4)] text-[#00E5C3] px-4 py-3 focus:border-[#00E5C3] outline-none transition-all placeholder:text-[#00E5C3] placeholder:opacity-50">
                @if (phoneInput.invalid && (phoneInput.touched || bannerForm.submitted)) {
                  <div class="validation-error">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0;">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                    </svg>
                    @if (phoneInput.errors?.['required']) {
                      Phone Number is required
                    } @else if (phoneInput.errors?.['pattern']) {
                      Please enter a valid 10-15 digit phone number
                    }
                  </div>
                }
              </div>
                     
              <div class="form-group">
                <input type="email" placeholder="Email Address (optional)" [(ngModel)]="formData.email" name="email"
                       pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                       #emailInput="ngModel"
                       [class.is-invalid]="emailInput.invalid && (emailInput.touched || bannerForm.submitted)"
                       class="w-full rounded-xl bg-[rgba(10,15,46,0.8)] border border-[rgba(0,229,195,0.4)] text-[#00E5C3] px-4 py-3 focus:border-[#00E5C3] outline-none transition-all placeholder:text-[#00E5C3] placeholder:opacity-50">
                @if (emailInput.invalid && (emailInput.touched || bannerForm.submitted)) {
                  <div class="validation-error">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0;">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                    </svg>
                    Please enter a valid email address
                  </div>
                }
              </div>
                     
              <textarea rows="3" [(ngModel)]="formData.message" name="message" placeholder="Tell us about your project...(optional)" 
                        class="w-full rounded-xl bg-[rgba(10,15,46,0.8)] border border-[rgba(0,229,195,0.4)] text-[#00E5C3] px-4 py-3 focus:border-[#00E5C3] outline-none resize-y transition-all placeholder:text-[#00E5C3] placeholder:opacity-50"></textarea>
              
              <button type="submit" 
                      style="width:100%;padding:16px 32px;border-radius:100px;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:1.05rem;color:#fff;background:linear-gradient(135deg,#FF8C00 0%,#FF5722 100%);border:none;box-shadow:0 4px 24px rgba(255,140,0,0.40);transition:transform 0.2s ease,box-shadow 0.2s ease;margin-top:8px;"
                      onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 32px rgba(255,140,0,0.55)'"
                      onmouseout="this.style.transform='';this.style.boxShadow='0 4px 24px rgba(255,140,0,0.40)'">
                {{ formButtonText }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
})
export class BannerComponent {
  @Input() showBreadcrumbs: boolean = false;
  @Input() currentServiceName: string = '';
  @Input() badgeText: string = 'Expert Solutions';
  @Input() title: string = 'Elevate Your';
  @Input() highlightTitle: string = 'Digital Game';
  @Input() quote: string = 'Companies that embrace digital transformation see a 20% increase in revenue.';
  @Input() dataValue1: string = '100+';
  @Input() dataLabel1: string = 'Projects';
  @Input() dataValue2: string = '5x';
  @Input() dataLabel2: string = 'Avg ROI';
  @Input() formTitle: string = 'Get a Free Consultation';
  @Input() formButtonText: string = 'Send Request';
  @Input() serviceName: string = 'services';

  formData = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  sendToWhatsApp(form: NgForm) {
    if (form.invalid) {
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
      return;
    }
    const text = `Hello CoreGrid team, I was reviewing your website and I'd like to learn more about your ${this.serviceName} . Could we schedule a quick chat to discuss a potential project?
 
Name: ${this.formData.name}
Phone: ${this.formData.phone}
Email: ${this.formData.email || 'Not provided'}
Message: ${this.formData.message || 'Not provided'}`;
    const whatsappNumber = '919074501397';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
