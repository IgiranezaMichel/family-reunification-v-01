import { Home } from "@material-ui/icons";
import {UrlType } from "../typedefs/UrlType";

export const AdminIndexUrl: UrlType[]= [
    {
        title: 'Home',
        link: '/',
        icon:<Home/>

    },
    {
        title: 'login',
        link: '/login',
    },
    {
        title: 'Sign up',
        link: '/sign-up',
    }
]