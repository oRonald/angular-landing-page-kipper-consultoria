import { Component } from '@angular/core';
import { Header } from '../header/header';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { NewsletterForm } from '../newsletter-form/newsletter-form';
import { Footer } from '../footer/footer';
import { Benefit } from '../benefit/benefit';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Header, 
    NgOptimizedImage, 
    BtnPrimary, 
    NewsletterForm,
    Footer,
    Benefit
  ],
  providers: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
