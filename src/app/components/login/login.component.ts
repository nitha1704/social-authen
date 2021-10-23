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
    (<any>window).fbAsyncInit = function () {
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
    FB.login(
      (res: any) => {
        this.me(res.authResponse.accessToken, res.authResponse.userID);
      },
      {
        scope:
          'public_profile,email,pages_messaging,pages_messaging_phone_number',
        auth_type: 'rerequest',
      }
    );
  }

  me(accessToken: any, userID: any) {
    console.log(accessToken, userID);
    FB.api('/' + userID + '?fields=name,accounts,email,picture', (res: any) => {
      if (res && !res.error) {
        console.log(res);
      } else {
        console.log(res);
      }
    });
  }
}
