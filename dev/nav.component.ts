import {Component} from 'angular2/core';

@Component({
    selector: 'nav',
    template: `
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#"><img src="images/youtube.png" alt="youtube img"></a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <form class="navbar-form navbar-left">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </div>
              </form>
              <ul class="nav navbar-nav navbar-right">
                <i class="fa fa-lg fa-upload" aria-hidden="true"></i>
                <i class="fa fa-lg fa-bell" aria-hidden="true"></i>
                <img src="images/avatar.png" alt="avatar">
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
    `,
})
export class NavComponent {

}