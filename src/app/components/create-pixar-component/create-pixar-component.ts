import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServicePixars } from '../../services/service.pixar';
import { Pixar } from '../../models/pixar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pixar-component',
  standalone: false,
  styleUrl: './create-pixar-component.css',
  templateUrl: './create-pixar-component.html',
})
export class CreatePixarComponent {
  @ViewChild('inputid') inputid!: ElementRef;
  @ViewChild('inputname') inputname!: ElementRef;
  @ViewChild('inputimg') inputimg!: ElementRef;
  @ViewChild('inputmovie') inputmovie!: ElementRef;
  constructor(
    private _service: ServicePixars,
    private _router: Router,
  ) {}
  async createPixarAsync(): Promise<void> {
    await this._service.insertPixarAsync(
      new Pixar(
        this.inputid.nativeElement.value,
        this.inputname.nativeElement.value,
        this.inputimg.nativeElement.value,
        this.inputmovie.nativeElement.value,
      ),
    );
    this._router.navigate(['/']);
  }
}
