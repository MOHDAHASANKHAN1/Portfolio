import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Get_Project_Detailes } from 'src/app/graphql/graphql.queries';
import { Delete_Project_Detailes } from 'src/app/graphql/graphql.mutations';
import cookie from 'js-cookie';
import { Check_Cookie } from 'src/app/graphql/graphql.mutations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  isLogged: boolean = false;
  Projects: any = [];

  onDelete(_id: any): void {
    this.apollo.mutate({
      mutation: Delete_Project_Detailes,
      variables: {
        _id
      }
    }).subscribe((data: any) => {
      if (data.data.Delete_Project_Detailes.Success) {
        alert("This Project Detailes Has Been Deleted Successfully");
      } else {
        alert("This Project Detailes Has Not Been Deleted Successfully")
      }
    });
  }

  constructor(private apollo: Apollo, private router: Router) {
    this.apollo.watchQuery({
      query: Get_Project_Detailes
    }).valueChanges.subscribe(({ data, error }: any) => {
      this.Projects = data.Project_Detailes
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
