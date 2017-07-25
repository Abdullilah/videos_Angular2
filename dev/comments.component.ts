import {Component, Input, OnInit} from 'angular2/core';

@Component({
    selector: 'comments',
    template: `
        <div class="comments">
          <div class="row">
            <ul>
              <li *ngFor="#comment of selectedComments">
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
export class CommentsComponent implements OnInit{


    public comments = [
        {
          "id":"0",
          "info":[
            {src:"images/avatar1.png", writer:"Abdullilah Alhaj Younes", date:"3 months ago", desc:"This is the best video I have ever seen in my life", likes:"231", unlikes:"4"},
            {src:"images/avatar2.jpg", writer:"Mustafa Said", date:"6 days ago", desc:"This video is not bad, I liked it", likes:"92", unlikes:"5"},
            {src:"images/avatar3.png", writer:"Kamiel Smith", date:"2 years ago", desc:"I could not stop wahtching it", likes:"1132", unlikes:"41"}
          ]
        },
        {
          "id":"1",
          "info":[
            {src:"images/avatar4.png", writer:"Monika Adamiski", date:"3 months ago", desc:"This is the best video I have ever seen in my life", likes:"231", unlikes:"4"}
          ]
        },
        {
          "id":"2",
          "info":[
            {src:"images/avatar5.png", writer:"Adam Bilski", date:"3 months ago", desc:"This is the best video I have ever seen in my life", likes:"231", unlikes:"4"},
            {src:"images/avatar6.jpg", writer:"Silvia Ronda", date:"6 days ago", desc:"This video is not bad, I liked it", likes:"92", unlikes:"5"}
          ]
        },
        {
          "id":"3",
          "info":[
            {src:"images/avatar7.png", writer:"Suzana Adrian", date:"3 months ago", desc:"This is the best video I have ever seen in my life", likes:"231", unlikes:"4"}
          ]
        },
        {
          "id":"4",
          "info":[
            {src:"images/avatar8.jpg", writer:"Patrisia Gomez", date:"3 months ago", desc:"This is the best video I have ever seen in my life", likes:"231", unlikes:"4"}
          ]
        },
        {
          "id":"5",
          "info":[
            {src:"images/avatar9.jpg", writer:"Sofia Fidra", date:"3 months ago", desc:"This is the best video I have ever seen in my life", likes:"231", unlikes:"4"},
            {src:"images/avatar10.jpg", writer:"Paulina reded", date:"6 days ago", desc:"This video is not bad, I liked it", likes:"92", unlikes:"5"}
          ]
        },
        {
          "id":"6",
          "info":[
            {src:"images/avatar11.png", writer:"Gabrila Nortica", date:"3 months ago", desc:"This is the best video I have ever seen in my life", likes:"231", unlikes:"4"}
          ]
        },
        {
          "id":"7",
          "info":[
            {src:"images/avatar12.png", writer:"Kira Slovak", date:"3 months ago", desc:"This is the best video I have ever seen in my life", likes:"231", unlikes:"4"},
            {src:"images/avatar13.png", writer:"Mustafa Damda", date:"6 days ago", desc:"This video is not bad, I liked it", likes:"92", unlikes:"5"}
          ]
        }

      ];

  @Input() id = 0;
  public selectedComments = this.comments[parseInt(this.id)].info;
  constructor(){
    setInterval(() => {
      this.selectedComments = this.comments[parseInt(this.id)].info;
    }, 500);
  }
  

}
