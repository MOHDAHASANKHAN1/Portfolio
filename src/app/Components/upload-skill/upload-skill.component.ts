import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import cookie from 'js-cookie';
import { Router } from '@angular/router';
import { Check_Cookie } from 'src/app/graphql/graphql.mutations';
import { Add_Skill } from 'src/app/graphql/graphql.mutations';

@Component({
  selector: 'app-upload-skill',
  templateUrl: './upload-skill.component.html',
  styleUrls: ['./upload-skill.component.css']
})
export class UploadSkillComponent implements OnInit {

  uploadIndicator: boolean = false;

  submit(data: any): void {
    this.uploadIndicator = true;
    const { Name, Percentage } = data;
    this.apollo.mutate({
      mutation: Add_Skill,
      variables: {
        Name,
        Percentage
      }
    }).subscribe((data: any) => {
      if (data.data.Add_Skill.Success) {
        this.uploadIndicator = false;
        alert("Skill Has Been Successfully Uploaded");
      } else {
        this.uploadIndicator = false;
        alert("Skill Has Been Already Exist");
      }
    });
  };

  constructor(private apollo: Apollo, private router: Router) {
    if (!cookie.get("Token")) {
      router.navigate(["/Login"]);
    } else {
      this.apollo.mutate({
        mutation: Check_Cookie,
        variables: {
          Token: cookie.get("Token")
        }
      }).subscribe((data: any) => {
        if (!data.data.Check_Cookie.Success) {
          cookie.remove("Token");
          router.navigate(["/Login"]);
        }
      })
    }
  }
  ngOnInit(): void {
  }

}
