import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsLetterForm } from '../../interfaces/newsletter-form';

@Component({
  selector: 'app-section-footer',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './section-footer.component.html',
  styleUrl: './section-footer.component.css'
})
export class SectionFooterComponent {

  public newsLetterForm: FormGroup<NewsLetterForm>

  constructor(private readonly fb: FormBuilder) {
    this.newsLetterForm = this.fb.group<NewsLetterForm>({
      email: this.fb.control('', Validators.required),
    })
  }

  public onSubmit(): void{
    if(this.newsLetterForm.valid){
      console.log(this.newsLetterForm.value);
    }else{
      this.newsLetterForm.markAllAsTouched();
    }
  }
}
