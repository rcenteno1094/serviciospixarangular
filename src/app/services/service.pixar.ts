import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pixar } from '../models/pixar';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServicePixars {
  constructor(private _http: HttpClient) {}
  async getPixarsAsync(): Promise<Pixar[]> {
    return firstValueFrom(this._http.get<Pixar[]>(environment.apipixar + 'api/pixar'));
  }
  async insertPixarAsync(pixar: Pixar): Promise<any> {
    const header = new HttpHeaders().set('content-type', 'application/json');
    return firstValueFrom(
      this._http.post<Pixar[]>(environment.apipixar + 'api/pixar', pixar, {
        headers: header,
      }),
    );
  }
  async deletePixarAsync(id: number): Promise<any> {
    return firstValueFrom(this._http.delete(environment.apipixar + 'api/pixar/' + id));
  }
}
