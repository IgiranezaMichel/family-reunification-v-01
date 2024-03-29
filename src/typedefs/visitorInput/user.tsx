import { Gender } from "../../enum/gender"

export type UserInput={
    id?:number,
    firstName:string,
    lastName:string,
    gender:Gender,
    email:string,
    dob:string,
    phoneNumber:string,
    address?:string,
    country:string,
    nativeCountry:string,
    userName:string,
    password:string,
    profilePicture:string
}