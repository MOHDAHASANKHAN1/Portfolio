import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import cookie from 'js-cookie';
import { Router } from '@angular/router';
import { Check_Cookie, Update_Project_Detailes } from 'src/app/graphql/graphql.mutations';
import { Apollo } from 'apollo-angular';
import { Get__Single_Project_Detailes } from 'src/app/graphql/graphql.queries';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {

  Project_Detail = { _id: "", Title: "", Description: "", ImageLink: "", ImageId: "", LiveLink: "", CodeLink: "", Uploader: "", Owner: "", Date: "" };
  selectedFile: any;
  imageUploadIndicator: boolean = false;
  Activatedroute: any;

  selectimage(imageinput: any): void {
    this.selectedFile = imageinput.files[0];
  }
  submit(): void {
    this.imageUploadIndicator = true;
    if (this.selectedFile) {
      const { _id, Title, Description, ImageId, LiveLink, CodeLink, Uploader, Owner, Date } = this.Project_Detail;
      const formData = new FormData();
      formData.append("file", this.selectedFile);
      formData.append("upload_preset", "Portfolio");
      formData.append("cloud_name", "technicalknowledges");
      this.http.post("https://api.cloudinary.com/v1_1/technicalknowledges/image/upload", formData).subscribe((result: any) => {
        this.apollo.mutate({
          mutation: Update_Project_Detailes,
          variables: {
            _id,
            Title,
            Description,
            ImageLink: result.secure_url,
            ImageId: result.public_id,
            OldImageId: ImageId,
            LiveLink,
            CodeLink,
            Uploader,
            Owner,
            Date
          }
        }).subscribe((data: any) => {
          if (data.data.Update_Project_Detailes.Success) {
            this.setData(this.Project_Detail._id);
            this.imageUploadIndicator = false;
            alert("Project Detaile Has Been Successfully Updated");
          } else {
            alert("Project Detaile Has Not Been Successfully Updated");
          }
        });
      });
    } else {
      const { _id, Title, Description, ImageLink, ImageId, LiveLink, CodeLink, Uploader, Owner, Date } = this.Project_Detail;
      this.apollo.mutate({
        mutation: Update_Project_Detailes,
        variables: {
          _id,
          Title,
          Description,
          ImageLink,
          OldImageId: "Not Include Image",
          ImageId,
          LiveLink,
          CodeLink,
          Uploader,
          Owner,
          Date
        }
      }).subscribe((data: any) => {
        if (data.data.Update_Project_Detailes.Success) {
          this.setData(this.Project_Detail._id);
          this.imageUploadIndicator = false;
          alert("Project Detaile Has Been Successfully Updated");
        } else {
          alert("Project Detaile Has Not Been Successfully Updated");
        }
      });
    }
  }

  setData(id: any): void {
    this.apollo.watchQuery({
      fetchPolicy: 'network-only',
      query: Get__Single_Project_Detailes,
      variables: {
        _id: id
      }
    }).valueChanges.subscribe(({ data, error }: any) => {
      const { _id, Title, Description, ImageLink, ImageId, LiveLink, CodeLink, Uploader, Owner, Date } = data.Single_Project_Detailes[0];
      this.Project_Detail._id = _id;
      this.Project_Detail.Title = Title;
      this.Project_Detail.Description = Description;
      this.Project_Detail.ImageLink = ImageLink;
      this.Project_Detail.ImageId = ImageId;
      this.Project_Detail.LiveLink = LiveLink;
      this.Project_Detail.CodeLink = CodeLink;
      this.Project_Detail.Uploader = Uploader;
      this.Project_Detail.Owner = Owner;
      this.Project_Detail.Date = Date;
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
