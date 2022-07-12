import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import cookie from 'js-cookie';
import { Router } from '@angular/router';
import { Check_Cookie } from 'src/app/graphql/graphql.mutations';
import { Add_Header } from 'src/app/graphql/graphql.mutations';

@Component({
  selector: 'app-upload-header',
  templateUrl: './upload-header.component.html',
  styleUrls: ['./upload-header.component.css']
})
export class UploadHeaderComponent implements OnInit {

  selectedImage: any;
  selectedResume: any;
  imageUploadIndicator: boolean = false;

  selectimage(imageinput: any): void {
    this.selectedImage = imageinput.files[0];
  }

  selectresume(resumeinput: any): void {
    this.selectedResume = resumeinput.files[0];
  }

  submit(data: any): void {
    this.imageUploadIndicator = true;
    const { Name } = data;
    if (!this.selectedImage) {
      alert("Please Select An Image");
    } else if (!this.selectedResume) {
      alert("Please Select A Resume");
    } else {
      const imageData = new FormData();
      imageData.append("file", this.selectedImage);
      imageData.append("upload_preset", "Portfolio");
      imageData.append("cloud_name", "technicalknowledges");

      this.http.post("https://api.cloudinary.com/v1_1/technicalknowledges/auto/upload", imageData).subscribe((imageresult: any) => {

        const resumeData = new FormData();
        resumeData.append("file", this.selectedResume);
        resumeData.append("upload_preset", "Portfolio");
        resumeData.append("cloud_name", "technicalknowledges");

        this.http.post("https://api.cloudinary.com/v1_1/technicalknowledges/auto/upload", resumeData).subscribe((resumeresult: any) => {
          this.apollo.mutate({
            mutation: Add_Header,
            variables: {
              Name,
              ImageLink: imageresult.secure_url,
              ImageId: imageresult.public_id,
              ResumeLink: resumeresult.secure_url,
              ResumeId: resumeresult.public_id
            }
          }).subscribe((data: any) => {
            if (data.data.Add_Header.Success) {
              this.imageUploadIndicator = false;
              alert("Header Has Been Successfully Uploaded");
            } else {
              this.imageUploadIndicator = false;
              alert("Header Has Been Already Exist");
            }
          });
        });
      });

    }

  }



  constructor(private http: HttpClient, private apollo: Apollo, private router: Router) {
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
