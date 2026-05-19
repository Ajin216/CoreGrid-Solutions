import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // MANDATORY FOR FORMS

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  // 1. Define the data object to hold user input
  formData = {
    companyName: '',
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    details: ''
  };

  // 2. Put your agency's actual WhatsApp number here (Include country code, no + or spaces)
  agencyWhatsAppNumber = '919048032956';

  // 3. The execution function
  submitToWhatsApp() {
    // Basic validation to stop empty spam
    if (!this.formData.firstName || !this.formData.service) {
      alert('Please fill out your name and the service needed.');
      return;
    }

    // Construct the message format ( %0A creates a line break in URLs )
    const message = `*New CoreGrid Lead!*%0A%0A` +
      `*Company:* ${this.formData.companyName}%0A` +
      `*Name:* ${this.formData.firstName} ${this.formData.lastName}%0A` +
      `*Email:* ${this.formData.email}%0A` +
      `*Service Needed:* ${this.formData.service}%0A` +
      `*Project Details:* ${this.formData.details}`;

    // Open WhatsApp in a new tab
    const whatsappUrl = `https://wa.me/${this.agencyWhatsAppNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }
}