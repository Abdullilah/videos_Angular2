import {Component} from 'angular2/core';

@Component({
    selector: 'comments',
    template: `
        <div class="comments">
            <div class="row">
                <ul>
                    <li *ngFor="#comment of comments">
                        <div class="col-xs-12 one-comment">
                            <img src="{{comment.src}}">
                            <div class="comment-des">
                                <h4>{{comment.writer}}</h4>
                                <span class="date">{{comment.date}}</span>
                                <div>
                                    <p>{{comment.desc}}</p>
                                    <span>{{comment.likes}}</span>
                                    <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                                    <span>{{comment.unlikes}}</span>
                                    <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                                </div>
                                <hr>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `,
    
})
export class CommentsComponent {
    public comments = [
        {src:"images/avatar1.png", writer:"Abdullilah Alhaj Younes", date:"3 months ago", desc:"This is the best video I have ever seen in my life", likes:"231", unlikes:"4"},
        {src:"images/avatar2.jpg", writer:"Mustafa Said", date:"6 days ago", desc:"This video is not bad, I liked it", likes:"92", unlikes:"5"},
        {src:"images/avatar3.png", writer:"Monika Adamiski", date:"2 years ago", desc:"I could not stop wahtching it", likes:"1132", unlikes:"41"}
      ];
}