import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;
  msgError: string;
  constructor(private _spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;
  }

  ngOnInit(): void {
    this._spotifyService.getReleases().subscribe(
      response => {
        this.nuevasCanciones = response;
        this.loading = false;
      },
      error => {
        this.error = true;
        
        this.msgError = error.error.error.message;
        

      }
    );
  }

}
