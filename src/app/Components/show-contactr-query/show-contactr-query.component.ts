import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';
import cookie from 'js-cookie';
import { Check_Cookie } from 'src/app/graphql/graphql.mutations';
import { Get_Contacts } from 'src/app/graphql/graphql.queries';
import { Delete_Contact } from 'src/app/graphql/graphql.mutations';

@Component({
  selector: 'app-show-contactr-query',
  templateUrl: './show-contactr-query.component.html',
  styleUrls: ['./show-contactr-query.component.css']
})
export class ShowContactrQueryComponent implements OnInit {

  Contacts: any = [];

  onDelete(Email: any): void {
    this.apollo.mutate({
      mutation: Delete_Contact,
      variables: {
        Email
      }
    }).subscribe((data: any) => {
      if (data.data.Delete_Contact.Success) {
        alert("This Query Has Been Deleted Successfully");
      } else {
        alert("This Query Has Not Been Deleted Successfully")
      }
    });
  }

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
        } else {
          this.apollo.watchQuery({
            query: Get_Contacts
          }).valueChanges.subscribe(({ data, error }: any) => {
            this.Contacts = data.Contact;
          });
        }
      })
    }
  }

  ngOnInit(): void { }

}
