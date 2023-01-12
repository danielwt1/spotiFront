import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient: HttpClient) { }

  getAuthToken() {
    const client_id = '2cec73925b5b42c4b52ec7997c78bdc7';
    const client_secret = '7cfa5b0066d64eba9828b5249d393bb4';
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const authOptions = 'grant_type=client_credentials';

    return this._httpClient.post<HttpResponse<any>>('https://accounts.spotify.com/api/token', authOptions, { headers });



  }
}
