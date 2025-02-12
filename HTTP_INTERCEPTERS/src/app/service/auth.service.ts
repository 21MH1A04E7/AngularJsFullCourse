import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private HOST_URL = 'https://freeapi.gerasim.in';

  public $tokenSubject: Subject<boolean> = new Subject<boolean>();
  public $refreshSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.$tokenSubject.subscribe((res: any) => {
      console.log('hi');
      this.onRefreshToken();
    });
  }
  onRefreshToken() {
    const Data = this.getDetails();
    let userData: any;
    if (Data != null) {
      userData = JSON.parse(Data);
    }
    const obj = {
      emailId: userData.emailId,
      refreshToken: userData.refreshToken,
    };
    this.getRefreshToken(obj).subscribe({
      next: (res: any) => {
        this.setToken(res.data.token);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  onLogin(obj: any) {
    return this.http.post(`${this.HOST_URL}/api/JWT/login`, obj);
  }
  getRefreshToken(obj: any) {
    return this.http.post(`${this.HOST_URL}/api/JWT/refresh`, obj);
  }
  getUsers() {
    return this.http.get(`${this.HOST_URL}/api/JWT/GetAllUsers`);
  }
  setDetails(value: string) {
    localStorage.setItem('details', value);
  }
  getDetails() {
    return localStorage.getItem('details');
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  setRefresh(token: string) {
    localStorage.setItem('refreshToken', token);
  }
  getRefresh() {
    return localStorage.getItem('refreshToken');
  }
  clearToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('details');
  }
}
