import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import cookie from 'js-cookie';
import { Router } from '@angular/router';
import { Check_Cookie, Update_About } from 'src/app/graphql/graphql.mutations';
import { Apollo } from 'apollo-angular';
import { Get_Single_About } from 'src/app/graphql/graphql.queries';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-about',
  templateUrl: './update-about.component.html',
  styleUrls: ['./update-about.component.css']
})
export class UpdateAboutComponent implements OnInit {
  About = { _id: '', Title: '', Description: '', Name: '', Birthday: '', Degree: '', Experience: '', Phone: '', Email: '', Address: '', Freelance: '', ImageLink: '', ImageId: '' };
  selectedFile: any;
  imageUploadIndicator: boolean = false;
  Activatedroute: any;

  selectimage(imageinput: any): void {
    this.selectedFile = imageinput.files[0];
  }
  submit(): void {
    this.imageUploadIndicator = true;
    if (this.selectedFile) {
      const { _id, Title, Description, Name, Birthday, Degree, Experience, Phone, Email, Address, Freelance, ImageId } = this.About;
      const formData = new FormData();
      formData.append("file", this.selectedFile);
      formData.append("upload_preset", "Portfolio");
      formData.append("cloud_name", "technicalknowledges");
      this.http.post("https://api.cloudinary.com/v1_1/technicalknowledges/image/upload", formData).subscribe((result: any) => {
        this.apollo.mutate({
          mutation: Update_About,
          variables: {
            _id,
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
            OldImageId: ImageId,
          }
        }).subscribe((data: any) => {
          if (data.data.Update_About.Success) {
            this.setData(this.About._id);
            this.imageUploadIndicator = false;
            alert("Project Detaile Has Been Successfully Updated");
          } else {
            alert("Project Detaile Has Not Been Successfully Updated");
          }
        });
      });
    } else {
      const { _id, Title, Description, Name, Birthday, Degree, Experience, Phone, Email, Address, Freelance, ImageLink, ImageId } = this.About;
      this.apollo.mutate({
        mutation: Update_About,
        variables: {
          _id,
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
          ImageLink,
          ImageId,
          OldImageId: "Not Include Image",
        }
      }).subscribe((data: any) => {
        if (data.data.Update_About.Success) {
          this.setData(this.About._id);
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
      query: Get_Single_About,
      variables: {
        _id: id
      }
    }).valueChanges.subscribe(({ data, error }: any) => {
      const { _id, Title, Description, Name, Birthday, Degree, Experience, Phone, Email, Address, Freelance, ImageLink, ImageId } = data.Single_About[0];
      this.About._id = _id;
      this.About.Title = Title;
      this.About.Description = Description;
      this.About.Name = Name;
      this.About.Birthday = Birthday;
      this.About.Degree = Degree;
      this.About.Experience = Experience;
      this.About.Phone = Phone;
      this.About.Email = Email;
      this.About.Address = Address;
      this.About.Freelance = Freelance;
      this.About.ImageLink = ImageLink;
      this.About.ImageId = ImageId;
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
