import { Navigation } from "../../components/Navigation"
import { AdminIndexUrl } from "../../url/AdminIndexUrl"
import { AdminNavigation } from "./components/AdminNavigation"

export const Admin=()=>{
    return(
        <Navigation activeUrl="/admin" items={AdminIndexUrl} navBarClass="bg-danger nav text-white">
            <AdminNavigation/>
        </Navigation>
    )
}