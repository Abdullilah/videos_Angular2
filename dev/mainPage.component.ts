import {Component, OnInit} from 'angular2/core';
import {VideoListComponent} from "./videoList.component";

@Component({
    selector: 'mainPage',
    template: `
    <div class="main-page">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-8 section">
                    <video width="400" controls>
                      <source src="images/{{selectedVideo.vid}}" type="video/mp4">
                    </video>
                </div>
                <div class="col-xs-12 col-sm-4 section">
                    <div class="list-videos">
                        <videoList (update)="countChange($event)"></videoList>
                    </div>
                </div>
                <input value="{{selectedVideo.vid}}" #inputValue>
            </div>
        </div>
    </div>
    `,
    directives: [VideoListComponent]
})
export class MainPageComponent implements OnInit{

  ngOnInit(): any {
    this.selectedVideo = {vid:"vid1.webm", src: "img1.png", alt:"shortcut1", title:"The name of The video1", desc:"The decription of the video1", active:"act"};
  }
  public selectedVideo: {};

  countChange(user){
    this.selectedVideo = user;
  }


}
