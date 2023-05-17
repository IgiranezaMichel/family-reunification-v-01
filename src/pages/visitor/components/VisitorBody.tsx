import { ReactNode } from "react"

export const VisitorBody=(props:{children:ReactNode})=>{
    return(
        <main className="row container-fluid" style={{ background: 'linear-gradient(150deg,#00BFFF,rgb(255, 255, 255))' }}>
            <div className="col-md-8">
                {props.children}
            </div>
            <div className="col-sm-4 card">
                <img src="/public/Visitor/baby-sitting.png" alt="" />
            </div>
        </main>
    )
}