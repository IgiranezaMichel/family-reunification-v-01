import { Link } from "react-router-dom"
import { UrlType } from "../typedefs/UrlType"
import { FC, ReactNode } from "react"
import { StyleSheetProperties } from "react-native"
type Url={
    items:[UrlType],
    navBarClass?:ClassDecorator,
    navBarStyle?:StyleSheetProperties
    children?:ReactNode
}
export const Navigation:FC<Url>=(url)=>{
    return(
        <main>
        <nav
            className={"navbar navbar-expand-md navbar-dark"}
            style={url.navBarStyle}>
            <Link  className="navbar-brand"to={'/'}>
                <img src="/Visitor/unhcr.jpeg" alt="" className="rounded-circle"/>
            </Link>
           <div className={''}>
           <span className="display-5 d-block fw-bolder">
                UNHCR
            </span>
            <span className="fw-bold">
            The Refugee Agency
            </span>
           </div>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"
            ><i className="bi bi-three-dots"></i></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                </ul>
                <div className={"d-flex my-2 my-lg-0 "}>
                    {url.items.map((data,index)=>{
                        return(
                                <Link key={index} to={data.link}>
                                    {data.title}
                                </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
        {
            url.children
        }
    </main>
    )
}