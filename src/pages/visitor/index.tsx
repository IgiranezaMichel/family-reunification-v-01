import { Navigation } from "../../components/Navigation"
import { VisitorUrl } from "../../url/VisitorsUrl"
import { VisitorBody } from "./components/VisitorBody"

export const Index = () => {
    return (
        <>
            <Navigation activeUrl="/" items={VisitorUrl} navBarClass={'bg-info text-white'} >
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
            </Navigation>
        </>
    )
}