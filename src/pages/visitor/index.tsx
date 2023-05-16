import { Navigation } from "../../components/Navigation"
import { VisitorUrl } from "../../url/VisitorsUrl"

export const Index=()=>{
    return(
        <>
            <Navigation activeUrl="home" items={VisitorUrl} navBarClass={'bg-info text-white'} >
        
            </Navigation>
        </>
    )
}