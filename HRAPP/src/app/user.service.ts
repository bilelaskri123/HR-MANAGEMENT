import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiUrl : string = "http://localhost:8081/contacts";
  constructor(private httpClient : HttpClient) { }

  getContacts() {
    return this.httpClient.get(this.apiUrl);
  }
}
