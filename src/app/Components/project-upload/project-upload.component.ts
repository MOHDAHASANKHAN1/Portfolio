import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Add_Project_Detailes } from 'src/app/graphql/graphql.mutations';
import { HttpClient } from '@angular/common/http';
import cookie from 'js-cookie';
import { Router } from '@angular/router';
import { Check_Cookie } from 'src/app/graphql/graphql.mutations';

@Component({
  selector: 'app-project-upload',
  templateUrl: './project-upload.component.html',
  styleUrls: ['./project-upload.component.css']
})
export class ProjectUploadComponent implements OnInit {
  Imageid: any;
  selectedFile: any;
  imageUploadIndicator: boolean = false;

  selectimage(imageinput: any): void {
    this.selectedFile = imageinput.files[0];
  }

  submit(data: any): void {

    if (this.selectedFile) {
      const { Title, Description, CodeLink, LiveLink, Owner, Uploader, Date } = data;

      this.imageUploadIndicator = true;
      const formData = new FormData();
      formData.append("file", this.selectedFile);
      formData.append("upload_preset", "Portfolio");
      formData.append("cloud_name", "technicalknowledges");
      this.http.post("https://api.cloudinary.com/v1_1/technicalknowledges/image/upload", formData).subscribe((result: any) => {
        this.Imageid = result.public_id;
        this.apollo.mutate({
          mutation: Add_Project_Detailes,
          variables: {
            Title,
            Description,
            ImageLink: result.secure_url,
            ImageId: result.public_id,
            LiveLink,
            CodeLink,
            Uploader,
            Owner,
            Date
          }
        }).subscribe((data: any) => {
          if (data.data.Add_Project_Detailes.Success) {
            alert("Project Detailes Has Been Successfully Uploaded");
          } else {
            alert("Project Detailes Has Been Already Exist");
          }
        });
        this.imageUploadIndicator = false;
      });
    } else {
      alert("Please Select An Image");
    }
  };

  constructor(private apollo: Apollo, private http: HttpClient, private router: Router) {
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
