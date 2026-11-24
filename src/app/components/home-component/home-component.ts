import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicePixars } from '../../services/service.pixar';
import { Pixar } from '../../models/pixar';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit {
  pixars!: Pixar[];
  constructor(
    private _service: ServicePixars,
    private _cdr: ChangeDetectorRef,
  ) {}
  async ngOnInit(): Promise<void> {
    this.pixars = await this._service.getPixarsAsync();
    this._cdr.detectChanges();
  }
  async deletePixarAsync(id: number): Promise<void> {
    await this._service.deletePixarAsync(id);
    this.pixars = await this._service.getPixarsAsync();
    this._cdr.detectChanges();
  }
}
