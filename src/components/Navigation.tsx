import { Link } from "react-router-dom"
import { UrlType } from "../typedefs/UrlType"
import { CSSProperties, FC, ReactNode } from "react"
type Url={
    items:UrlType[],
    navBarClass?:string,
    navBarStyle?:CSSProperties,
    children?:ReactNode,
    activeUrl:string
}
export const Navigation:FC<Url>=(url)=>{
    return(
        <main>
        <nav
            className={"navbar navbar-expand-md navbar-info "+url.navBarClass}
            style={url?.navBarStyle}>
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
                <div className={"d-flex my-2 my-lg-0 mx-md-5"}>
                    {url.items.map((data,index)=>{
                        return(
                                <Link className={url.activeUrl==data.link?"fw-bolder nav-link border-4 border-bottom border-white mx-2":"fw-bolder mx-2 nav-link"} key={index} to={data.link}>
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