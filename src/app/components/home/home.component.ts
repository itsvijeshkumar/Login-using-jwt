//import org.springframework.boot.SpringApplication;
import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../../app.component';
import {ActivatedRoute} from "@angular/router";

//@ComponentScan(value = "com.example.springboot.app")
//In spring boot java @ComponentScan is Annotation
//In typescript @Component is Decorator
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

//public class SpringBootApplication {
export class HomeComponent implements OnInit {

    //String message = "some home message";
    message: string = "some home message";
    name: string = ''

    //ActivatedRoute
    constructor(private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        //COMPILATION ERROR IF
        //this.message = 5
        //typescript is strong type
        console.log(this.message);
        this.name = this.route.snapshot.params['name']
        console.log(this.name)
    }

    getWelcomeMessage() {
        console.log("get home message")
    }

    handleSuccessfulResponse(response:string){
        console.log(response);
    }
}

// }
