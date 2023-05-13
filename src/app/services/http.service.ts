import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../app.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('http://localhost:3000/posts/');
  }

  delPost(id: number): Observable<Post> {
    return this.http.delete<Post>('http://localhost:3000/posts/' + id);
  }

  addPost(post: Post) : Observable<Post> {
    return this.http.post<Post>('http://localhost:3000/posts/', post);
  }

  editPost(post: Post) : Observable<Post> {
    return this.http.put<Post>('http://localhost:3000/posts/' + post.id, post);
  }
}
