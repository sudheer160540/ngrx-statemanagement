import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { User } from "../interface/user.model";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  private customersUrl = "http://34.232.236.120:3001/api/OrganizationDetails";

  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.customersUrl);
  }

  
}
