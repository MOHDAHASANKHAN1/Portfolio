import { gql } from 'apollo-angular';

const Get_Project_Detailes = gql`
  query {
    Project_Detailes{
        _id
        Title,
        Description,
        ImageLink,
        ImageId,
        LiveLink,
        CodeLink,
        Uploader,
        Owner,
        Date
    }
  }
`
const Get__Single_Project_Detailes = gql`
  query Single_Project_Detailes($_id:String!) {
    Single_Project_Detailes(_id:$_id){
        _id
        Title,
        Description,
        ImageLink,
        ImageId,
        LiveLink,
        CodeLink,
        Uploader,
        Owner,
        Date
    }
  }
`

const Get_Contacts = gql`
  query{
    Contact{
      Name,
      Email,
      Message
    }
  }
`
const Get_About = gql`
  query{
    About{
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
      ImageId
    }
  }
`

const Get_Single_About = gql`
  query Single_About($_id:String!){
    Single_About(_id:$_id){
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
      ImageId
    }
  }
`
const Get_Header = gql`
  query{
    Header{
        _id,
        Name,
        ImageLink,
        ImageId,
        ResumeLink,
        ResumeId
    }
  }
`
const Get_Single_Header = gql`
  query Single_Header($_id:String!){
    Single_Header(_id:$_id){
        _id,
        Name,
        ImageLink,
        ImageId,
        ResumeLink,
        ResumeId
    }
  }
`

const Get_Skill = gql`
  query{
    Skill{
        _id,
        Name,
        Percentage
    }
  }
`
const Get_Single_Skill = gql`
  query Single_Skill($_id:String!){
    Single_Skill(_id:$_id){
        _id,
        Name,
        Percentage
    }
  }
`

export { Get_Project_Detailes, Get_Contacts, Get_About, Get__Single_Project_Detailes, Get_Single_About, Get_Header, Get_Single_Header, Get_Skill, Get_Single_Skill };