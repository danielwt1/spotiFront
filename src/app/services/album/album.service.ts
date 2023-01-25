import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/app/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private _httpClient:HttpClient) { }

  getAlbum() {
    return this._httpClient.get<any>(environment.apiUrl+"albums");

  }
}
