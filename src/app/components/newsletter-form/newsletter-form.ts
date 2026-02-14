import { Component, signal, Signal } from '@angular/core';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Newsletter } from '../../services/newsletter';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [BtnPrimary, ReactiveFormsModule],
  providers: [Newsletter],
  templateUrl: './newsletter-form.html',
  styleUrl: './newsletter-form.scss',
})
export class NewsletterForm {
  newsletterForm!: FormGroup;
  loading = signal(false);

  constructor(private service: Newsletter) {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit(){
    this.loading.set(true);
    if(this.newsletterForm.valid){
      this.service.sendData(this.newsletterForm.value.name, this.newsletterForm.value.email).subscribe({
        next: () => {
          this.newsletterForm.reset();
          this.loading.set(false);
        }
      })
    }
  }
}
