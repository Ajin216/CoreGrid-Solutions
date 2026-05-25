import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  formData = {
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  };

  formHighlighted = false;

  highlightForm() {
    // Reset first so re-clicks retrigger the animation
    this.formHighlighted = false;
    setTimeout(() => {
      this.formHighlighted = true;
      const formEl = document.getElementById('hero-audit-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        (formEl.querySelector('input') as HTMLInputElement)?.focus();
      }
      // Auto-reset after animation
      setTimeout(() => { this.formHighlighted = false; }, 1000);
    }, 10);
  }

  sendToWhatsApp() {
    const text = `
I visited your CoreGrid Solutions website and I am interested in your services.

Name: ${this.formData.name}
Phone: ${this.formData.phone}
Email: ${this.formData.email}
Service: ${this.formData.service}
Message: ${this.formData.message}
`;
    const whatsappNumber = '919074501397';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}

