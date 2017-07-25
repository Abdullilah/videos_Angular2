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
            <div class="col-xs-8 section VideoInfo">
              <h3>{{selectedVideo.title}}</h3>
              <p class="desc">{{selectedVideo.desc}}</p>
              <p class="desc">{{selectedVideo.views}} Views</p>
              <span>{{selectedVideo.likes}}</span>
              <i class="fa fa-thumbs-up" aria-hidden="true"></i>
              <span>{{selectedVideo.unlikes}}</span>
              <i class="fa fa-thumbs-down" aria-hidden="true"></i>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4 section">
            <div class="list-videos">
              <videoList [contacts]=contacts (passedVideo)="selectedVideo=$event"></videoList>
            </div>
          </div>
          <div class="col-xs-8 section">
            <comments [id]="idValue"></comments>
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
  public idValue = 0;
  constructor(private _contactService: ContactSevice){
    setInterval(() => {
      this.idValue = this.selectedVideo.id;
    }, 500);
  }
  ngOnInit():any {
    this.getContacts();
    this.selectedVideo = {id:"0", vid:"images/vid1.webm", src: "img1.png", alt:"shortcut1", title:"The name of The video1", desc:"The decription of the video1", views:"2,040", likes:"112", unlikes:"53"};
  }
  getContacts(){
    this._contactService.getContact().then((contacts: Contact[])=> this.contacts = contacts);
  }
    
}
