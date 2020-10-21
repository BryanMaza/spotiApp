import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',

})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];


  loading: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.loading = true;

    this._route.params.subscribe(
      params => {
        let id = params.id;
        this.getArtist(id);
        this.getTopTracks(id);
       
      }
    );
  }

  getArtist(id) {
    this._spotifyService.getArtist(id).subscribe(
      response => {
        this.artista = response;
        this.loading = false;
      },
      error => {
        console.log(error);
      }
    );

  }
  getTopTracks(id) {
    this._spotifyService.getTopTracksArtist(id).subscribe(
      response => {
        this.topTracks = response;
        console.log(response);
        
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
