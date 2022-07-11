import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Login } from 'src/app/graphql/graphql.mutations';
import cookie from 'js-cookie';
import { Router } from '@angular/router';
import { Check_Cookie } from 'src/app/graphql/graphql.mutations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submit(data: any): void {
    const { Email, Password } = data;
    this.apollo.mutate({
      mutation: Login,
      variables: {
        Email,
        Password
      }
    }).subscribe((data: any) => {
      if (data.data.Login.Success) {
        alert("Successfully Logedin");
        cookie.set("Token", data.data.Login.Token)
        this.router.navigate(["/"]);
      } else {
        alert("Please Provide Valid Email And Password");
      }
    });
  }

  constructor(private apollo: Apollo, private router: Router) {
    if (cookie.get("Token")) {
      this.apollo.mutate({
        mutation: Check_Cookie,
        variables: {
          Token: cookie.get("Token")
        }
      }).subscribe((data: any) => {
        if (data.data.Check_Cookie.Success) {
          router.navigate(["/"]);
        } else {
          cookie.remove("Token");
        }
      })
    }
  }

  ngOnInit(): void {
  }

}
