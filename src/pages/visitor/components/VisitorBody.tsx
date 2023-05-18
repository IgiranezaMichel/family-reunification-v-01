import { ReactNode } from "react"

export const VisitorBody=(props:{children:ReactNode})=>{
    return(
        <main className="row container-fluid m-auto" style={{ background: 'linear-gradient(150deg,#00BFFF,rgb(255, 255, 255))' }}>
            <div className="col-md-8 d-flex justify-content-center card bg-transparent border-0">
                <div>
                {props.children}
                </div>
            </div>
            <div className="col-sm-4 card p-0 bg-transparent border-0">
                <img src="/public/Visitor/baby-sitting.png" alt="" />
            </div>
        </main>
    )
}