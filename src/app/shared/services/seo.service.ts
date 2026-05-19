import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private dom: Document
  ) { }

  updateMetaTags(config: { title?: string, description?: string, url?: string }) {
    if (config.title) {
      const fullTitle = `${config.title} | CoreGrid Solutions`;
      this.titleService.setTitle(fullTitle);
      this.metaService.updateTag({ property: 'og:title', content: fullTitle });
      this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    }

    if (config.description) {
      this.metaService.updateTag({ name: 'description', content: config.description });
      this.metaService.updateTag({ property: 'og:description', content: config.description });
      this.metaService.updateTag({ name: 'twitter:description', content: config.description });
    }

    if (config.url) {
      const fullUrl = `https://coregridsolutions.com${config.url === '/' ? '' : config.url}`;
      this.metaService.updateTag({ property: 'og:url', content: fullUrl });
      this.updateCanonicalUrl(fullUrl);
    }
  }

  private updateCanonicalUrl(url: string) {
    const head = this.dom.getElementsByTagName('head')[0];
    let element: HTMLLinkElement | null = this.dom.querySelector(`link[rel='canonical']`) || null;
    
    if (element === null) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      element.setAttribute('rel', 'canonical');
      head.appendChild(element);
    }
    element.setAttribute('href', url);
  }
}
