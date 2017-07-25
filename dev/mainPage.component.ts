import {Component, OnInit} from 'angular2/core';
import {VideoListComponent} from "./videoList.component";
import {CommentsComponent} from "./comments.component";
import {ContactSevice} from "./contact.service";
import {Contact} from "./contact";

@Component({
    selector: 'mainPage',
    template: `
    <div class="main-page">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-8 section">
                    <video width="400" [src]="selectedVideo.vid" controls>
                        Your browser does not support HTML5 video.
                    </video>
                </div>
                <div class="col-xs-12 col-sm-4 section">
                    <div class="list-videos">
                        <videoList [contacts]=contacts (passedVideo)="selectedVideo=$event"></videoList>
                    </div>
                </div>
                <div class="col-xs-12 section">
                    <comments></comments>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [VideoListComponent, CommentsComponent],
    providers: [ContactSevice]
})
export class MainPageComponent implements OnInit{
  public selectedVideo: {};
  public contacts: Contact[];
  constructor(private _contactService: ContactSevice){}
  ngOnInit():any {
    this.getContacts();
    this.selectedVideo = {vid:"images/vid1.webm", src: "img1.png", alt:"shortcut1", title:"The name of The video1", desc:"The decription of the video1", views:"2,040", active:"act"};
  }
  getContacts(){
    this._contactService.getContact().then((contacts: Contact[])=> this.contacts = contacts);
  }


}
