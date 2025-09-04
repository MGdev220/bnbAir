import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PropertySummary {
  id: string | number;
  title: string;
  cover?: string;
  location?: string;
  tags?: string[];
}

export interface HostInfo {
  name: string;
  picture?: string;
}

export interface PropertyDetail extends PropertySummary {
  description?: string;
  rating?: string | number;
  host?: HostInfo;
  pictures?: string[];
  equipments?: string[];
}

@Injectable({ providedIn: 'root' })
export class PropertiesService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:8080/api/properties';

  list(): Observable<PropertySummary[]> {
    return this.http.get<PropertySummary[]>(this.baseUrl);
  }

  getById(id: string | number): Observable<PropertyDetail> {
    return this.http.get<PropertyDetail>(`${this.baseUrl}/${id}`);
  }
}


