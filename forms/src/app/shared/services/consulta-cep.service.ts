import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(
    private http: HttpClient
  ) { }

  consultaCEP(cep: string): Observable<any> {

   cep = cep.replace(/\D/g, '');

    if(cep != ''){
      var validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)){
        return this.http.get(`//viacep.com.br/ws/${cep}/json`)
      }
    }

    return of(null)
  }
}
