import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor() { }

  public elementosElegidos?: Object [];
  public modalEjecucion?: boolean = false;
  public modalProveedores?: boolean = false;
}
