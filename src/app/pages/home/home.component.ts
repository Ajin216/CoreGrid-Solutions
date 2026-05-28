import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

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

  sendToWhatsApp(form: NgForm) {
    if (form.invalid) {
      // Mark all fields as touched to trigger real-time error displays in UI
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
      // Scroll to the first invalid field or highlight/shake form card
      this.highlightForm();
      return;
    }

    const text = `Hi CoreGrid Team,
I recently reviewed the CoreGrid Solutions website and would like to schedule a brief call to discuss how your services align with our current business needs.

Name: ${this.formData.name}
Phone: ${this.formData.phone}
Email: ${this.formData.email || 'Not provided'}
Service: ${this.formData.service}
Message: ${this.formData.message || 'Not provided'}
`;
    const whatsappNumber = '919074501397';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}


