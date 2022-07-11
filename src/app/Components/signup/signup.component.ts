import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Signup } from 'src/app/graphql/graphql.mutations';
import cookie from 'js-cookie';
import { Router } from '@angular/router';
import { Check_Cookie } from 'src/app/graphql/graphql.mutations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  submit(data: any): void {
    const { Name, Email, Password } = data;

    this.apollo.mutate({
      mutation: Signup,
      variables: {
        Name,
        Email,
        Password
      }
    }).subscribe((data: any) => {
      if (data.data.Signup.Success) {
        alert("Successfully Signuped");
        cookie.set("Token", data.data.Signup.Token);
        this.router.navigate(["/"]);
      } else {
        alert("Not Allowed");
      }
    })
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

  ngOnInit(): void { }

}
