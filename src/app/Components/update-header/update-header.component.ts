import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import cookie from 'js-cookie';
import { Router } from '@angular/router';
import { Check_Cookie, Update_Header } from 'src/app/graphql/graphql.mutations';
import { Apollo } from 'apollo-angular';
import { Get_Single_Header } from 'src/app/graphql/graphql.queries';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-header',
  templateUrl: './update-header.component.html',
  styleUrls: ['./update-header.component.css']
})
export class UpdateHeaderComponent implements OnInit {

  Header = { _id: '', Name: '', ImageLink: '', ImageId: '', ResumeLink: '', ResumeId: '' };
  selectedImage: any;
  selectedResume: any;
  imageUploadIndicator: boolean = false;

  selectimage(imageinput: any): void {
    this.selectedImage = imageinput.files[0];
  }

  selectresume(resumeinput: any): void {
    this.selectedResume = resumeinput.files[0];
  }

  submit(): void {
    this.imageUploadIndicator = true;
    const { _id, Name, ImageLink, ImageId, ResumeLink, ResumeId } = this.Header;
    if (this.selectedImage || this.selectedResume) {
      if (this.selectedImage && this.selectedResume) {
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
              mutation: Update_Header,
              variables: {
                _id,
                Name,
                ImageLink: imageresult.secure_url,
                ImageId: imageresult.public_id,
                ResumeLink: resumeresult.secure_url,
                ResumeId: resumeresult.public_id,
                OldImageId: ImageId,
                OldResumeId: ResumeId
              }
            }).subscribe((data: any) => {
              if (data.data.Update_Header.Success) {
                this.imageUploadIndicator = false;
                alert("Header Has Been Successfully Uploaded");
              } else {
                this.imageUploadIndicator = false;
                alert("Header Has Been Already Exist");
              }
            });
          });
        });
      } else {
        if (this.selectedImage) {
          const imageData = new FormData();
          imageData.append("file", this.selectedImage);
          imageData.append("upload_preset", "Portfolio");
          imageData.append("cloud_name", "technicalknowledges");
          this.http.post("https://api.cloudinary.com/v1_1/technicalknowledges/auto/upload", imageData).subscribe((imageresult: any) => {
            this.apollo.mutate({
              mutation: Update_Header,
              variables: {
                _id,
                Name,
                ImageLink: imageresult.secure_url,
                ImageId: imageresult.public_id,
                ResumeLink,
                ResumeId,
                OldImageId: ImageId,
                OldResumeId: "Not Include Resume"
              }
            }).subscribe((data: any) => {
              if (data.data.Update_Header.Success) {
                this.imageUploadIndicator = false;
                alert("Header Has Been Successfully Uploaded");
              } else {
                this.imageUploadIndicator = false;
                alert("Header Has Been Already Exist");
              }
            });
          });
        } else if (this.selectedResume) {
          const resumeData = new FormData();
          resumeData.append("file", this.selectedResume);
          resumeData.append("upload_preset", "Portfolio");
          resumeData.append("cloud_name", "technicalknowledges");
          this.http.post("https://api.cloudinary.com/v1_1/technicalknowledges/auto/upload", resumeData).subscribe((resumeresult: any) => {
            this.apollo.mutate({
              mutation: Update_Header,
              variables: {
                _id,
                Name,
                ImageLink,
                ImageId,
                ResumeLink: resumeresult.secure_url,
                ResumeId: resumeresult.public_id,
                OldImageId: "Not Include Image",
                OldResumeId: ResumeId
              }
            }).subscribe((data: any) => {
              if (data.data.Update_Header.Success) {
                this.imageUploadIndicator = false;
                alert("Header Has Been Successfully Uploaded");
              } else {
                this.imageUploadIndicator = false;
                alert("Header Has Been Already Exist");
              }
            });
          });
        }
      }
    } else {
      this.apollo.mutate({
        mutation: Update_Header,
        variables: {
          _id,
          Name,
          ImageLink,
          ImageId,
          ResumeLink,
          ResumeId,
          OldImageId: "Not Include Image",
          OldResumeId: "Not Include Resume"
        }
      }).subscribe((data: any) => {
        if (data.data.Update_Header.Success) {
          this.setData(this.Header._id);
          this.imageUploadIndicator = false;
          alert("Project Detaile Has Been Successfully Updated");
        } else {
          alert("Project Detaile Has Not Been Successfully Updated");
        }
      })
    }

  }

  setData(id: any): void {
    this.apollo.watchQuery({
      fetchPolicy: 'network-only',
      query: Get_Single_Header,
      variables: {
        _id: id
      }
    }).valueChanges.subscribe(({ data, error }: any) => {
      const { _id, Name, ImageLink, ImageId, ResumeLink, ResumeId } = data.Single_Header[0];
      this.Header._id = _id;
      this.Header.Name = Name;
      this.Header.ImageLink = ImageLink;
      this.Header.ImageId = ImageId;
      this.Header.ResumeLink = ResumeLink;
      this.Header.ResumeId = ResumeId;
    });
  }

  constructor(private apollo: Apollo, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
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
