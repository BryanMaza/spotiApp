import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',

})
export class SearchComponent implements OnInit {
  loading: boolean;
  artistas: any[] = [];
  constructor(private _spotifyService: SpotifyService) {

  }

  ngOnInit(): void {
  }



  buscar(termino: string) {

    if (termino != '') {
      this.loading = true;
      this._spotifyService.search(termino).subscribe(
        response => {

          this.artistas = response;
          this.loading = false;

        },
        error => {
          console.log(error);

        }
      );
    } else {
      this.loading = false;
    }


  }

}
