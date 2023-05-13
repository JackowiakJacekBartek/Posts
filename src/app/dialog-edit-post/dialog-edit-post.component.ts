import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../services/http.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Post} from "../app.component";

@Component({
  selector: 'app-dialog-edit-post',
  templateUrl: './dialog-edit-post.component.html',
  styleUrls: ['./dialog-edit-post.component.css']
})
export class DialogEditPostComponent {

  postFormGroup: FormGroup;
  private post : Post;

  constructor(private _formBuilder: FormBuilder,
              private httpService: HttpService,
              private dialogRef: MatDialogRef<DialogEditPostComponent>,
              @Inject(MAT_DIALOG_DATA) data: { post: Post }) {
    this.post = data.post;
    this.postFormGroup = this._formBuilder.group({
      title: [this.post.title, Validators.required],
      author: [this.post.author, Validators.required],
      body: [this.post.body, Validators.required],
    });
  }

  savePost(formGroup: FormGroup) {
    if (formGroup.status == "VALID") {
      console.log(formGroup);

      const p: Post = ({
        id: this.post.id,
        title: this.postFormGroup.controls['title'].value,
        author: this.postFormGroup.controls['author'].value,
        body: this.postFormGroup.controls['body'].value
      })

      this.httpService.editPost(p).subscribe();
      this.dialogRef.close(p);
    } else
      console.log('Invalid na formularzu');
  }

}
