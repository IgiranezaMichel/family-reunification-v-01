import { LocationOn, Phone, Search } from "@material-ui/icons"
import { Navigation } from "../../components/Navigation"
import { VisitorUrl } from "../../url/VisitorsUrl"
import { VisitorBody } from "./components/VisitorBody"
import { VisitorOverBody } from "./components/VisitorOverBody"
import { LostPeople } from "./components/LostPeople"
import { Footer } from "../../components/Footer"
export const Index = () => {
    return (
        <>
            <Navigation activeUrl="/" items={VisitorUrl} navBarClass={'bg-info text-white sticky-top'} >
                <VisitorBody>
                    <div className="fw-bold display-5">Family Reunification and Tracking  </div>
                    <div className="mt-3">
                        Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte
                        aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.,
                        le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé
                        à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant
                        tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem
                        Ipsum.
                    </div>
                </VisitorBody>
                <VisitorOverBody>
                    <div className="col-sm-12 d-sm-flex float-sm-end" style={{clear:'both'}}>
                        <div className="bg-primary mx-1 rounded-circle p-2">
                            <Phone className="fs-1"/>
                        </div>
                        <div className="bg-primary mx-1 rounded-circle p-2">
                            <LocationOn className="fs-1"/>
                        </div>
                        <div className="bg-primary mx-1 rounded-circle p-2">
                            <LocationOn className="fs-1"/>
                        </div>
                        <div className="bg-danger p-2 col-sm-8 rounded-4 m-auto">
                            <input type="search" className="col-sm-11 p-2 rounded-2 border-0" placeholder="Search ..." name="" id="" />
                            <span><Search className="fs-1"/></span>
                        </div>
                    </div>
                </VisitorOverBody>
                <LostPeople/>
                <Footer/>
            </Navigation>
        </>
    )
}