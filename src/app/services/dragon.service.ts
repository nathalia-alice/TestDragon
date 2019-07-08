import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { DragonModel } from '../models/dragon.model';

@Injectable({
  providedIn: 'root'
})

export class DragonService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getDragon(id: string): Observable<DragonModel[]> { //detalhes do dragão
    return this.httpClient.get<DragonModel[]>(
      environment.baseApiDragon + `/${id}`
    );
  }

  getDragons(): Observable<DragonModel[]> { //busca todos dragões
    return this.httpClient.get<DragonModel[]>(
      environment.baseApiDragon
    );
  }

  putDragon(dragon: DragonModel): Observable<DragonModel> { //edita dragão
    return this.httpClient.put<DragonModel>(
      environment.baseApiDragon + `/${dragon.id}`, dragon
    );
  }

  deleteDragon(dragon: DragonModel): Observable<DragonModel> { //excluir dragão
    return this.httpClient.delete<DragonModel>(
      environment.baseApiDragon + `/${dragon.id}`
    );
  }

  postDragon(dragon: DragonModel): Observable<DragonModel> { //criar dragão
    return this.httpClient.post<DragonModel>(
      environment.baseApiDragon, dragon
    );
  }

}
