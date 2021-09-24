import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../components/views/form/form.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  create(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/addUser`;
    const requestOptions: Object = {
      responseType: 'text',
    };
    return this.http.post<Usuario>(url, usuario, requestOptions);
  }

  message(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      duration: 5000,
    });
  }
}
