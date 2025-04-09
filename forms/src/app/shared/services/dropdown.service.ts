import { Estadobr } from './../models/estado-br';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBr(): Observable<any> {
    return this.http.get<Estadobr[]>('assets/dados/estadosbr.json')
  }

  getCargos(){
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' },
    ]
  }

  getTecnologias(){
    return [
      { nome: 'Java', desc: 'Java' },
      { nome: 'JavaScript', desc: 'JavaScript' },
      { nome: 'Python', desc: 'Python' },
      { nome: 'C#', desc: 'C#' },
      { nome: 'PHP', desc: 'PHP' },
      { nome: 'Ruby', desc: 'Ruby' },
      { nome: 'C++', desc: 'C++' },
      { nome: 'Swift', desc: 'Swift' },
      { nome: 'Go', desc: 'Go' },
    ]
  }
}
