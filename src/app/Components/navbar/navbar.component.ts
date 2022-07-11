import { Component, OnInit } from '@angular/core';
import cookie from 'js-cookie';
import { Router, NavigationEnd } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Check_Cookie } from 'src/app/graphql/graphql.mutations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged: boolean = false;

  Logout(): void {
    this.isLogged = false;
    cookie.remove("Token");
    this.router.navigate(["/Login"]);
  }
  constructor(private apollo: Apollo, private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (cookie.get("Token")) {
          this.apollo.mutate({
            mutation: Check_Cookie,
            variables: {
              Token: cookie.get("Token")
            }
          }).subscribe((data: any) => {
            if (data.data.Check_Cookie.Success) {
              this.isLogged = true;
            }
          })
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
