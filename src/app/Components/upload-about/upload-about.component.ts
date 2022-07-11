import { Component, OnInit } from '@angular/core';
import { Add_About } from 'src/app/graphql/graphql.mutations';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import cookie from 'js-cookie';
import { Router } from '@angular/router';
import { Check_Cookie } from 'src/app/graphql/graphql.mutations';

@Component({
  selector: 'app-upload-about',
  templateUrl: './upload-about.component.html',
  styleUrls: ['./upload-about.component.css']
})
export class UploadAboutComponent implements OnInit {
  Imageid: any;
  selectedFile: any;
  imageUploadIndicator: boolean = false;

  selectimage(imageinput: any): void {
    this.selectedFile = imageinput.files[0];
  }

  submit(data: any): void {
    if (this.selectedFile) {
      const { Title, Description, Name, Birthday, Degree, Experience, Phone, Email, Address, Freelance } = data;
      this.imageUploadIndicator = true;
      const formData = new FormData();
      formData.append("file", this.selectedFile);
      formData.append("upload_preset", "Portfolio");
      formData.append("cloud_name", "technicalknowledges");
      this.http.post("https://api.cloudinary.com/v1_1/technicalknowledges/image/upload", formData).subscribe((result: any) => {
        this.Imageid = result.public_id;
        this.apollo.mutate({
          mutation: Add_About,
          variables: {
            Title,
            Description,
            Name,
            Birthday,
            Degree,
            Experience,
            Phone,
            Email,
            Address,
            Freelance,
            ImageLink: result.secure_url,
            ImageId: result.public_id,
          }
        }).subscribe((data: any) => {
          if (data.data.Add_About.Success) {
            alert("About Detailes Has Been Successfully Uploaded");
          } else {
            alert("About Detailes Has Been Already Exist");
          }
        });
        this.imageUploadIndicator = false;
      });
    } else {
      alert("Please Select An Image");
    }
  }

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
