import { LocationOn, MessageSharp, Person, Report } from "@material-ui/icons"
import { Button, Card } from "@mui/material"

export const LostPeople = () => {
    return (
        <main className="container-lg mb-4">
            <div className="display-6 text-center fw-bold">Let's find your loved one</div>
            <section className="row col-12 g-2 m-auto mt-3">
                <div className="col-md-3">
                    <Card elevation={8} className="col-12 rounded-0 border-top border-5 border-primary">
                        <div className="text-center">
                            <Button className="bg-primary text-white fw-bold rounded-0">
                                <LocationOn /> Rwandan
                            </Button>
                        </div>
                        <img src="/Visitor/baby-sitting.png" className="card-img" alt="" />
                        <dt className="mx-3">
                            <dd>
                            <Person/> Name
                            </dd>
                            <dd>
                                <span style={{fontFamily:'sans-serif'}}>Born date</span>
                            </dd>
                            <dd>
                                <span style={{fontFamily:'sans-serif'}}>Father </span>
                            </dd>
                            <dd>
                                <span style={{fontFamily:'sans-serif'}}>Mother </span>
                            </dd>
                            <dd>
                                <span style={{fontFamily:'sans-serif'}}>Place</span>
                            </dd>
                        </dt>
                        <div className="modal-footer">
                            <MessageSharp className="m-1"/><Report className="m-1"/>
                        </div>
                    </Card>
                </div>
            </section>
        </main>
    )
}