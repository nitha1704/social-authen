import { Component, OnInit } from '@angular/core';

declare var FB:any
declare var fbAsyncInit: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  

  ngOnInit(): void {
     (window as any).fbAsyncInit = function () {
       FB.init({
         appId: '870578177158205',
         cookie: true,
         xfbml: true,
         version: 'v3.1',
       });
       FB.AppEvents.logPageView();
     };

    (function (d, s, id) {
      var js: any,
        fjs: any = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  onLogin() {
    FB.login((res: any) => {
      console.log(res);
    });
  }
}
