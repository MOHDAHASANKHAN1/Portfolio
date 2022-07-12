import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import cookie from 'js-cookie';
import { Router } from '@angular/router';
import { Check_Cookie } from 'src/app/graphql/graphql.mutations';
import { Update_Skill } from 'src/app/graphql/graphql.mutations';
import { ActivatedRoute } from '@angular/router';
import { Get_Single_Skill } from 'src/app/graphql/graphql.queries';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit {
  Skill = { _id: '', Name: '', Percentage: '' };
  uploadIndicator: boolean = false;

  submit(): void {
    const { _id, Name, Percentage } = this.Skill;
    this.uploadIndicator = true;
    this.apollo.mutate({
      mutation: Update_Skill,
      variables: {
        _id,
        Name,
        Percentage
      }
    }).subscribe((data: any) => {
      if (data.data.Update_Skill.Success) {
        this.setData(this.Skill._id);
        this.uploadIndicator = false;
        alert("This Skill Has Been Successfully Updated");
      } else {
        this.uploadIndicator = false;
        alert("This Skill Has Not Been Successfully Updated");
      }
    });
  };

  setData(id: any): void {
    this.apollo.watchQuery({
      fetchPolicy: 'network-only',
      query: Get_Single_Skill,
      variables: {
        _id: id
      }
    }).valueChanges.subscribe(({ data, error }: any) => {
      const { _id, Name, Percentage } = data.Single_Skill[0];
      this.Skill._id = _id;
      this.Skill.Name = Name;
      this.Skill.Percentage = Percentage;
    });
  }

  constructor(private apollo: Apollo, private route: ActivatedRoute, private router: Router) {
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
        } else {
          this.route.paramMap.subscribe(params => {
            let id = params.get('id');
            this.setData(id);
          });
        }
      })
    }
  }
  ngOnInit(): void {
  }

}
