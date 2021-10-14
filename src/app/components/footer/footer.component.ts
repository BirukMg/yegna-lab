import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  form: FormGroup;
  constructor(
    @Inject('BASE_IMAGE_URL') public baseImageUrl: string,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      message: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      const url = `https://mail.google.com/mail/?view=cm&fs=1&to=yegna-lab@domain.com&su=SUBJECT&body=${this.form.value.message}`;
      window.open(url, '_blank');
    }
  }
}
