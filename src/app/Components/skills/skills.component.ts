import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import cookie from 'js-cookie';
import { Check_Cookie } from 'src/app/graphql/graphql.mutations';
import { Router, NavigationEnd } from '@angular/router';
import { Delete_Skill } from 'src/app/graphql/graphql.mutations';
import { Get_Skill } from 'src/app/graphql/graphql.queries';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  isLogged: boolean = false;
  Skills: any = [];
  arr: any = ["bg-blue-600", "bg-red-600", "bg-yellow-600", "bg-gray-600", "bg-red-400", "bg-sky-600", "bg-sky-900", "bg-pink-800", "bg-sky-400 ", "bg-green-800", "bg-orange-400", "bg-blue-800", "bg-teal-400", ""];
  skillColour: any;

  setRandomColor(): any {
    const clr = this.arr[Math.floor(Math.random() * this.arr.length)];
    return clr;
  }

  onDelete(_id: any): void {
    this.apollo.mutate({
      mutation: Delete_Skill,
      variables: {
        _id
      }
    }).subscribe((data: any) => {
      if (data.data.Delete_Skill.Success) {
        alert("This Skill Has Been Deleted Successfully");
      } else {
        alert("This Skill Has Not Been Deleted Successfully")
      }
    });
  }

  constructor(private apollo: Apollo, private router: Router) {
    this.apollo.watchQuery({
      query: Get_Skill
    }).valueChanges.subscribe(({ data, error }: any) => {
      this.Skills = data.Skill
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
