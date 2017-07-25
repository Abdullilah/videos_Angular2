import {Component} from 'angular2/core';

@Component({
    selector: 'comments',
    template: `
        <div class="container comments">
            <div class="row">
                <div class="col-xs-12 one-comment">
                    <img src="images/avatar1.png">
                    <div class="comment-des">
                        <h4>Commenter Name</h4>
                        <span class="date">3 months ago</span>
                        <div>
                            <p>This is the description from the first commenter</p>
                        </div>
                    <div>
                </div>
            </div>
        </div>
    `,
    
})
export class CommentsComponent {

}