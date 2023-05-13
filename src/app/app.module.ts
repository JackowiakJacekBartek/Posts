import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpService} from "./services/http.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {DialogAddPostComponent} from './dialog-add-post/dialog-add-post.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { DialogEditPostComponent } from './dialog-edit-post/dialog-edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogAddPostComponent,
    DialogEditPostComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        ReactiveFormsModule
    ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
