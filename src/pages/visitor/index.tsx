import { Navigation } from "../../components/Navigation"
import { VisitorUrl } from "../../url/VisitorsUrl"
import { VisitorBody } from "./components/VisitorBody"

export const Index=()=>{
    return(
        <>
            <Navigation activeUrl="/" items={VisitorUrl} navBarClass={'bg-info text-white'} >
                <VisitorBody>
                    <div className="fw-bold">Content here</div>
                </VisitorBody>
            </Navigation>
        </>
    )
}