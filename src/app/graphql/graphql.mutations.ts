import { gql } from 'apollo-angular';

const Add_Project_Detailes = gql`
  mutation Add_Project_Detailes($Title:String!, $Description:String!, $ImageLink:String!, $ImageId:String!, $LiveLink:String!, $CodeLink:String!, $Uploader:String!, $Owner:String!, $Date:String!){
  Add_Project_Detailes(Title:$Title, Description:$Description, ImageLink:$ImageLink, ImageId:$ImageId, LiveLink:$LiveLink, CodeLink:$CodeLink, Uploader:$Uploader, Owner:$Owner, Date:$Date){
       Success
  }
}
`
const Update_Project_Detailes = gql`
  mutation Update_Project_Detailes($_id:String!, $Title:String!, $Description:String!, $ImageLink:String!, $OldImageId:String!, $ImageId:String!, $LiveLink:String!, $CodeLink:String!, $Uploader:String!, $Owner:String!, $Date:String!){
  Update_Project_Detailes(_id:$_id, Title:$Title, Description:$Description, ImageLink:$ImageLink, OldImageId:$OldImageId, ImageId:$ImageId, LiveLink:$LiveLink, CodeLink:$CodeLink, Uploader:$Uploader, Owner:$Owner, Date:$Date){
       Success
  }
}
`
const Delete_Project_Detailes = gql`
  mutation Delete_Project_Detailes($_id:String!){
  Delete_Project_Detailes(_id:$_id){
       Success
  }
}
`

const Add_Contact = gql`
  mutation  Add_Contact($Name:String!, $Email:String!, $Message:String!){
    Add_Contact(Name:$Name, Email:$Email, Message:$Message){
     Success
    }
  }
`
const Delete_Contact = gql`
  mutation  Delete_Contact($Email:String!){
    Delete_Contact(Email:$Email){
     Success
    }
  }
`

const Add_About = gql`
  mutation Add_About($Title: String!, $Description: String!, $ImageLink:String!, $ImageId:String!, $Name: String!, $Birthday: String!, $Degree: String!, $Experience: String!, $Phone: String!, $Email: String!, $Address: String!, $Freelance: String!){
    Add_About(Title:$Title, Description:$Description, Name:$Name, Birthday:$Birthday, Degree:$Degree, Experience:$Experience, Phone:$Phone, Email:$Email, Address:$Address, Freelance:$Freelance, ImageLink:$ImageLink, ImageId:$ImageId,){
      Success
    }
  }
`
const Update_About = gql`
  mutation Update_About(
      $_id:String!,
      $Title:String!,
      $Description:String!,
      $Name:String!, 
      $Birthday:String!, 
      $Degree:String!, 
      $Experience:String!, 
      $Phone:String!, 
      $Email:String!, 
      $Address:String!, 
      $Freelance:String!,
      $ImageLink:String!,
      $ImageId:String!,
      $OldImageId:String!
      ){
    Update_About(
      _id:$_id,
      Title:$Title,
      Description:$Description,
      Name:$Name, 
      Birthday:$Birthday, 
      Degree:$Degree, 
      Experience:$Experience, 
      Phone:$Phone, 
      Email:$Email, 
      Address:$Address, 
      Freelance:$Freelance,
      ImageLink:$ImageLink,
      ImageId:$ImageId,
      OldImageId:$OldImageId
      ){
      Success
    }
  }
`

const Delete_About = gql`
  mutation Delete_About($_id:String!){
  Delete_About(_id:$_id){
       Success
  }
}
`

const Signup = gql`
  mutation  Signup($Name:String!, $Email:String!, $Password:String!){
    Signup(Name:$Name, Email:$Email, Password:$Password){
     Success
     Token
    }
  }
`

const Login = gql`
  mutation  Login($Email:String!, $Password:String!){
    Login(Email:$Email, Password:$Password){
     Success
     Token
    }
  }
`
const Check_Cookie = gql`
  mutation  Check_Cookie($Token:String!){
    Check_Cookie(Token:$Token){
     Success
    }
  }
`
const Add_Header = gql`
  mutation Add_Header($Name:String!, $ResumeLink:String!, $ResumeId:String!, $ImageLink:String!, $ImageId:String!){
  Add_Header(Name:$Name, ResumeLink:$ResumeLink, ResumeId:$ResumeId, ImageLink:$ImageLink, ImageId:$ImageId){
       Success
  }
}
`
const Update_Header = gql`
  mutation Update_Header($_id:String!, $Name:String!, $OldImageId:String!, $OldResumeId:String!, $ResumeLink:String!, $ResumeId:String!, $ImageLink:String!, $ImageId:String!){
  Update_Header(_id:$_id, Name:$Name, OldImageId:$OldImageId,  OldResumeId:$OldResumeId, ResumeLink:$ResumeLink, ResumeId:$ResumeId, ImageLink:$ImageLink, ImageId:$ImageId){
       Success
  }
}
`
const Delete_Header = gql`
  mutation Delete_Header($_id:String!){
  Delete_Header(_id:$_id){
       Success
  }
}
`
const Add_Skill = gql`
  mutation Add_Skill($Name:String!, $Percentage:String!){
  Add_Skill(Name:$Name, Percentage:$Percentage){
       Success
  }
}
`
const Update_Skill = gql`
  mutation Update_Skill($_id:String!, $Name:String!, $Percentage:String!){
  Update_Skill(_id:$_id, Name:$Name, Percentage:$Percentage){
       Success
  }
}
`
const Delete_Skill = gql`
  mutation Delete_Skill($_id:String!){
  Delete_Skill(_id:$_id){
       Success
  }
}
`

export { Add_Project_Detailes, Add_Contact, Add_About, Signup, Login, Check_Cookie, Delete_Contact, Delete_Project_Detailes, Update_Project_Detailes, Delete_About, Update_About, Add_Header, Update_Header, Delete_Header, Add_Skill, Update_Skill, Delete_Skill };