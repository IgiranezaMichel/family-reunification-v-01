import { People } from "@material-ui/icons"
import { Card } from "@mui/material"
import { FamilyCrud } from "../component/navigationCrud/family"

export const MyFamily = () => {
    return (
        <>
            <div className="bg-info">
                <div className="display-6 fw-bold mt-4 mb-3 mx-4">
                    My Family
                </div>
                <div className="row gx-3 container-lg m-auto mb-2">
                    <section className="col-sm-3">
                        <Card className="rounded-0">
                            <div className="h5 fw-bold">My Family member</div>
                            <span className="float-end"><People className="fs-1" /></span>
                            <div className="display-6 fw-bold">
                                1
                            </div>
                        </Card>
                    </section>
                    <section className="col-sm-3">
                        <Card className="rounded-0">
                            <div className="h5 fw-bold">Lost Family member</div>
                            <span className="float-end"><People className="fs-1" /></span>
                            <div className="display-6 fw-bold">
                                1
                            </div>
                        </Card>
                    </section>
                    <section className="col-sm-3">
                        <Card className="rounded-0">
                            <div className="h5 fw-bold">Request for member</div>
                            <span className="float-end"><People className="fs-1" /></span>
                            <div className="display-6 fw-bold">
                                1
                            </div>
                        </Card>
                    </section>
                </div>
            </div>
            <FamilyCrud/>
        </>
    )
}