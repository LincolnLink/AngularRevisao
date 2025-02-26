import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "../../environments/environment";
import { Music, MusicCadastrar } from "../models/music.model";

@Injectable({
  providedIn: 'root'
})
export class MusicService{

  private url = `${environment.api}/musics`;

  //private _httpClient : HttpClient

  //No TS só por private, que a variavel é acessivel por fora.
  constructor(private httpClient: HttpClient){
    //this._httpClient = httpClient
  }

  obterMusicas(){
    return this.httpClient.get<Music[]>(this.url);
  }

  cadastrarMusica(musica: MusicCadastrar){
    return this.httpClient.post<Music>(this.url, musica);
  }

  editarMusica(musica: Music){
    return this.httpClient.put<Music>(`${this.url}/${musica.id}`, musica);
  }

  remover(id: number){
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}