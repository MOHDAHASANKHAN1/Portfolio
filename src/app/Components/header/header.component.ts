import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import cookie from 'js-cookie';
import { Check_Cookie } from 'src/app/graphql/graphql.mutations';
import { Router, NavigationEnd } from '@angular/router';
import { Delete_Header } from 'src/app/graphql/graphql.mutations';
import { Get_Header } from 'src/app/graphql/graphql.queries';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  Headers: any = [];

  onDelete(_id: any): void {
    this.apollo.mutate({
      mutation: Delete_Header,
      variables: {
        _id
      }
    }).subscribe((data: any) => {
      if (data.data.Delete_Header.Success) {
        alert("This Project Detailes Has Been Deleted Successfully");
      } else {
        alert("This Project Detailes Has Not Been Deleted Successfully")
      }
    });
  }

  constructor(private apollo: Apollo, private router: Router) {
    this.apollo.watchQuery({
      query: Get_Header
    }).valueChanges.subscribe(({ data, error }: any) => {
      this.Headers = data.Header
    });
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
