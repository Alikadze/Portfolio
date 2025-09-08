import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact-me',
    imports: [FormsModule, CommonModule],
    templateUrl: './contact-me.component.html',
    styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    if (this.isFormValid()) {
      // Here you would typically send the form data to a backend service
      console.log('Form submitted:', this.formData);
      
      // For demo purposes, we'll just show an alert
      alert('Thank you for your message! I\'ll get back to you soon.');
      
      // Reset form
      this.resetForm();
    }
  }

  private isFormValid(): boolean {
    return !!(this.formData.name && 
             this.formData.email && 
             this.formData.subject && 
             this.formData.message);
  }

  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
