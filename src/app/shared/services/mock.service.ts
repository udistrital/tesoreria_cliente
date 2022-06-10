import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AreaFuncional } from '../interfaces/mockInterfaces';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  constructor(private http: HttpClient) {}

  getAreasFuncionales(): Observable<Array<AreaFuncional>> {
    const urlMockAreas = '../assets/mock/areaFuncional.json';

    return this.http.get<Array<AreaFuncional>>(urlMockAreas);
  }
}
