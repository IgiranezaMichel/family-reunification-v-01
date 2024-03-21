import { Navigation } from "../../components/Navigation"
import { AdminIndexUrl } from "../../url/AdminIndexUrl"
import { AdminBody } from "./components/AdminBody"
import { AdminNavigation } from "./components/AdminNavigation"

export const Admin=()=>{
    return(
        <Navigation activeUrl="/admin" items={AdminIndexUrl} >
            <AdminBody>

            </AdminBody>
            <AdminNavigation/>
        </Navigation>
    )
}