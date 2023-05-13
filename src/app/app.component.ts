import {Component, OnInit} from '@angular/core';
import {HttpService} from "./services/http.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddPostComponent} from "./dialog-add-post/dialog-add-post.component";
import {DialogEditPostComponent} from "./dialog-edit-post/dialog-edit-post.component";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private httpService: HttpService, public dialog: MatDialog) {
  }

  myPosts: Array<Post> = [];
  isOk: boolean = true;

  ngOnInit(): void {
    this.httpService.getPosts()
      .subscribe({
        next: (posts) => this.myPosts = posts,
        error: (error: HttpErrorResponse) => this.isOk = error.ok
      });
  }

  openDialogAddPost() {
    let openDialogRef = this.dialog.open(DialogAddPostComponent);

    //Odebranie z dialogu DialogAddPostComponent
    openDialogRef.afterClosed().subscribe(res => {
      if (res) {
        res.id = this.myPosts[this.myPosts.length - 1].id + 1;
        this.myPosts.push(res);
      }
    })
  }

  openDialogEditPost(post: Post) {
    //Nadanie do dialogu DialogEditPostComponent
    let editDialogRef = this.dialog.open(DialogEditPostComponent, {
      data: {post}
    });
    //Odebranie z dialogu DialogEditPostComponent
    editDialogRef.afterClosed().subscribe(res => {
      if (res) {
        let index = this.myPosts.findIndex(x => x.id === res.id);
        this.myPosts[index] = res;
      }
    })
  }

  deletePost(id: number) {
    this.httpService.delPost(id).subscribe();

    const indexOfObject = this.myPosts.findIndex((object) => {
      return object.id === id;
    });
    this.myPosts.splice(indexOfObject, 1);
  }
}

export interface Post {
  id: number;
  title: string;
  author: string;
  body: string;
}
