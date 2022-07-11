import { Component, OnInit } from '@angular/core';
import { Add_Contact } from 'src/app/graphql/graphql.mutations';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  onsubmit(data: any): void {
    const { Name, Email, Message } = data;
    this.apollo.mutate({
      mutation: Add_Contact,
      variables: {
        Name,
        Email,
        Message
      }
    }).subscribe((data: any) => {
      if (data.data.Add_Contact.Success) {
        alert("Your Query Has Been Recorded");
      } else {
        alert("Your Query Has Been Already Exist");
      }
    });
  }

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  }

}
