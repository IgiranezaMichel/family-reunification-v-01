import { Avatar } from "@mui/material"
import { Navigation } from "../../components/Navigation"
import { userUrl } from "../../url/userUrl"
import { Claim } from "./navigation/claim"
import { useEffect, useState } from "react"

export const User = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset === 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Navigation activeUrl="" items={userUrl} navBarClass="bg-info">
            <div className="col-12 card">
                <img src="/public/Visitor/manyPeople.png" alt="" />
            </div>
            <div className="container-lg p-0 border-2 rounded-0 border-white card m-auto" style={{ transform: 'translate(0px,-150px)', position: 'sticky', top: 0 }}>
                <nav
                    className="navbar navbar-expand-sm navbar-light bg-info sticky-top top-0" style={{ backgroundColor: isSticky ? 'blue' : '' }}>
                    <div className="container">
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0" >
                                <li className="nav-item bg-info border border-3 border-white" style={{ transform: 'translate(0px,29px)' }}>
                                    <span className="nav-link fw-bold">My Claims</span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link fw-bold" aria-current="page">
                                        Location
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link fw-bold" aria-current="page"
                                    >My Family
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link fw-bold" aria-current="page"
                                    >Chat
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link fw-bold" aria-current="page"
                                    >Settings
                                    </span>
                                </li>
                            </ul>
                            <div className="d-flex my-2 my-lg-0">
                                <Avatar /><div className="card mx-1 bg-transparent border-0 justify-content-center fw-bold">Igiraneza Joel</div>
                            </div>
                        </div>
                    </div>
                </nav>
                <Claim />
            </div>
        </Navigation>
    )
}