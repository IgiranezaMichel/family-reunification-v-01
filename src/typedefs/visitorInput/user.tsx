import { Gender } from "../../enum/gender"

export type UserInput={
    id?:number
    firstName:string
    lastName:string
    profilePicture:string
    gender:Gender
    email:string
    phoneNumber:string
    dob:string
    address:string
    country:string
    nativeCountry:string
    role?:string
    username:string
    password:string
}