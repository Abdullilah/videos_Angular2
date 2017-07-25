import {Component} from 'angular2/core';
import {NavComponent} from "./nav.component";
import {MainPageComponent} from "./mainPage.component";


@Component({
    selector: 'my-app',
    template: `
        <nav></nav>
        <mainPage></mainPage>
    `,
    directives: [NavComponent, MainPageComponent]
})
export class AppComponent {

}