import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Définition de l'interface Post
export interface Post {
  id: string;
  titre: string;
  contenu: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  // URL de l'API REST
  private apiUrl = 'http://localhost:3000/postList';

  // Liste locale de posts (fallback)
  private postList: Post[] = [
    { id: '1', titre: 'Premier post', contenu: 'détails premier post' },
    { id: '2', titre: 'Deuxième post', contenu: 'détails deuxième post' },
    { id: '3', titre: 'Troisième post', contenu: 'détails troisième post' },
    { id: '4', titre: 'Quaterième post', contenu: 'détails quaterième post' },
  ];

  // Injection de HttpClient dans le service
  constructor(private http: HttpClient) {}

  /**
   * Récupère les posts depuis l'API REST.
   * En cas d'erreur, utilise la liste locale comme fallback.
   */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error(
          "Erreur lors de la récupération des données depuis l'API :",
          error
        );
        // Retourne les données locales en cas d'échec
        return of(this.postList);
      })
    );
  }

  /**
   * Retourne directement les posts locaux.
   */
  getLocalPosts(): Post[] {
    return this.postList;
  }
}
