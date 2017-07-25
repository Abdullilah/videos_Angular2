import {Component, OnInit, Output, EventEmitter, Input} from 'angular2/core';

@Component({
    selector: 'videoList',
    template: `
        <ul>
            <li *ngFor="#video of videos" class="{{video.active}}">
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
export class VideoListComponent implements OnInit{
    @Output() passedVideo = new EventEmitter<any>();
    
    public videos = [
        {vid:"vid1.webm", src: "img1.png", alt:"shortcut1", title:"The name of The video1", desc:"The decription of the video1", views:"2,040", active:"act"},
        {vid:"vid2.webm", src: "img2.png", alt:"shortcut2", title:"The name of The video2", desc:"The decription of the video2", views:"6,104", active:""},
        {vid:"vid3.webm", src: "img3.png", alt:"shortcut3", title:"The name of The video3", desc:"The decription of the video3", views:"1,511", active:""},
        {vid:"vid4.webm", src: "img4.png", alt:"shortcut4", title:"The name of The video4", desc:"The decription of the video4", views:"430", active:""},
        {vid:"vid5.webm", src: "img5.png", alt:"shortcut5", title:"The name of The video5", desc:"The decription of the video5", views:"8,146", active:""},
        {vid:"vid6.webm", src: "img6.png", alt:"shortcut6", title:"The name of The video6", desc:"The decription of the video6", views:"6,043", active:""},
        {vid:"vid7.webm", src: "img7.png", alt:"shortcut7", title:"The name of The video7", desc:"The decription of the video7", views:"4,403", active:""},
        {vid:"vid8.webm", src: "img8.png", alt:"shortcut8", title:"The name of The video8", desc:"The decription of the video8", views:"25,051", active:""}
    ];

    

}
