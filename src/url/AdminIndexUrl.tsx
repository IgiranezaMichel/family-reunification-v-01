import { Home } from "@material-ui/icons";
import {UrlType } from "../typedefs/UrlType";

export const AdminIndexUrl: UrlType[]= [
    {
        title: 'Home',
        link: '/admin',
        icon:<Home/>

    },
    {
        title: 'logout',
        link: '/logout',
    }
]