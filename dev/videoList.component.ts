import {Component, Output, EventEmitter, Input} from 'angular2/core';

@Component({
    selector: 'videoList',
    template: `
        <ul>
          <li *ngFor="#video of contacts" [class.act]="video === selected">
            <div class="one-video" (click)="videoSlected(video)">
              <div class="row section">
                <div class="col-xs-4 section">
                  <img src="images/{{video.src}}" alt="{{video.alt}}">
                </div>
                <div class="col-xs-8 section">
                  <div class="img-text">
                    <p class="title">{{video.title}}</p>
                    <p class="desc">{{video.desc}}</p>
                    <p class="desc">{{video.views}} Views</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        
        
    `,
})
export class VideoListComponent{
    @Output() passedVideo = new EventEmitter<any>();
    @Input() contacts : Array<{id:string, vid: string, src: string, alt: string, title: string, desc: string, views: string, active: string}> = [];
    public selected: {};
    
    videoSlected(video: {}){
        this.selected = video;
        this.passedVideo.emit(video);
    }

}
