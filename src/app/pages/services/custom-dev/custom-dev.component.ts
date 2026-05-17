import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-custom-dev',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="ag-section bg-ag-bg">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="mb-4">
          <a routerLink="/services" class="text-ag-muted text-sm font-mono hover:text-ag-violet transition-colors">← Back to Services</a>
        </div>
        <div class="ag-badge mb-6"><span class="dot"></span>// 07 — engineering</div>
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-ag-text mb-6 tracking-tight">
          Custom <span class="text-gradient">Development</span>
        </h1>
        <p class="text-ag-muted text-lg md:text-xl max-w-3xl mb-12">
          Bespoke web architectures, custom API workflows, SaaS platforms, and internal tool integrations tailored precisely to match your unique operational demands and business logic.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-ag-violet mb-2">Custom</div>
            <div class="text-ag-muted text-sm font-mono">Consultation Required</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-ag-teal mb-2">Flexible</div>
            <div class="text-ag-muted text-sm font-mono">Timeline & Scope</div>
          </div>
          <div class="ag-card p-8">
            <div class="text-3xl font-heading font-bold text-ag-glow mb-2">Dedicated</div>
            <div class="text-ag-muted text-sm font-mono">Engineering Team</div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div class="ag-card p-8">
            <h2 class="text-2xl font-heading font-bold text-ag-text mb-4">What We Build</h2>
            <ul class="flex flex-col gap-3 text-ag-muted text-sm leading-relaxed">
              <li class="flex items-start gap-2"><span class="text-ag-violet mt-1">✓</span> SaaS platform architecture & development</li>
              <li class="flex items-start gap-2"><span class="text-ag-violet mt-1">✓</span> Custom REST & GraphQL API development</li>
              <li class="flex items-start gap-2"><span class="text-ag-violet mt-1">✓</span> Internal business tools & dashboards</li>
              <li class="flex items-start gap-2"><span class="text-ag-violet mt-1">✓</span> Third-party integrations & webhooks</li>
              <li class="flex items-start gap-2"><span class="text-ag-violet mt-1">✓</span> Legacy system modernization</li>
              <li class="flex items-start gap-2"><span class="text-ag-violet mt-1">✓</span> Microservices & serverless architectures</li>
            </ul>
          </div>
          <div class="ag-card p-8">
            <h2 class="text-2xl font-heading font-bold text-ag-text mb-4">Tech Stack</h2>
            <ul class="flex flex-col gap-3 text-ag-muted text-sm leading-relaxed">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-violet"></span> Angular, React, Next.js</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-violet"></span> Node.js, Python, Go</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-violet"></span> PostgreSQL, MongoDB, Redis</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-violet"></span> AWS / GCP / Docker / Kubernetes</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-ag-violet"></span> CI/CD pipelines & DevOps</li>
            </ul>
          </div>
        </div>
        <div class="text-center">
          <a routerLink="/contact" class="btn-primary">Schedule a Discovery Call →</a>
        </div>
      </div>
    </section>
  `
})
export class CustomDevComponent {}
