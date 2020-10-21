import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = 'Bearer BQAPgbIK70-5GVg9_Cla_tkyJL3Nw_NDnjkyU4rmv4rRRkdPnzlPVckkvo1MHygguCO52izx8ml0fTg1W9s';
  constructor(private _http: HttpClient) {

  }

  getQuery(query: string) {
    
    const url = `https://api.spotify.com/${query}`;
    const headers = new HttpHeaders().set('Authorization', this.token);

    return this._http.get(url, {headers});
    
  }

  getReleases(): Observable<any> {

    return this.getQuery('v1/browse/new-releases?limit=20').pipe(map(response => response['albums'].items
    ));
  }

  search(termino): Observable<any> {

    return this.getQuery(`v1/search?q=${termino}&type=artist&limit=15`).pipe(map(response => response['artists'].items
    )) ;
  }

  getArtist(id:string):Observable<any> {
    
    return this.getQuery(`v1/artists/${id}`);
  }

  getTopTracksArtist(id:string):Observable<any>{
    
    return this.getQuery(`v1/artists/${id}/top-tracks?market=es`).pipe(map(response => response['tracks']
    ));
  }


}
