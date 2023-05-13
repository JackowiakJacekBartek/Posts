import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../services/http.service";
import {Post} from "../app.component";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-add-post',
  templateUrl: './dialog-add-post.component.html',
  styleUrls: ['./dialog-add-post.component.css']
})
export class DialogAddPostComponent {

  postFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private httpService: HttpService, private dialogRef: MatDialogRef<DialogAddPostComponent>) {
    this.postFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  savePost(formGroup: FormGroup) {
    if (formGroup.status == "VALID") {
      console.log(formGroup);

      const p : Post = ({
        id: 0,
        title: this.postFormGroup.controls['title'].value,
        author: this.postFormGroup.controls['author'].value,
        body: this.postFormGroup.controls['body'].value
      })

      this.httpService.addPost(p).subscribe();
      this.dialogRef.close(p);
    }
    else
      console.log('Invalid na formularzu');
  }

}
