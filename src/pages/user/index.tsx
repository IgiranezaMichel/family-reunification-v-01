import { Avatar, Divider } from "@mui/material"
import { Navigation } from "../../components/Navigation"
import { userUrl } from "../../url/userUrl"
import { Claim } from "./navigation/claim"
import { useEffect, useState } from "react"
import { Location } from "./navigation/location"
import { MyFamily } from "./navigation/family"
import { Chat } from "./navigation/chat"
import { Setting } from "../../components/settings"

export const User = () => {
    const [url, setUrl] = useState('claims');
    const active='nav-item bg-info border border-3 border-white';
    return (
        <Navigation activeUrl="" items={userUrl} navBarClass="bg-info">
            <div className="col-12 card position-absolute">
                <img src="/public/Visitor/manyPeople.png" alt="" />
            </div>
            {/* style={{ transform: 'translate(0px,-150px)', position: 'sticky', top: 0 }} */}
            <div className="col-12 bg-transparent  rounded-0 mt-5   position-absolute m-auto" >
                <section className="container-lg m-auto p-0 border-2 border-white card">
                    <nav
                        className="navbar navbar-expand-sm navbar-light bg-info sticky-top top-0">
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
                                <ul className="navbar-nav me-auto mt-2 mt-lg-0 " style={{cursor:'pointer'}} >
                                    <li onClick={() => setUrl('claims')}
                                        className={url == 'claims' ? active : ''}
                                        style={{ transform: url == 'claims' ? 'translate(0px,29px)' : '' }}>
                                        <span className="nav-link fw-bold">My Claims</span>
                                    </li>
                                    <li onClick={() => setUrl('location')}
                                        className={url == 'location' ? active : ''}
                                        style={{ transform: url == 'location' ? 'translate(0px,29px)' : '' }}>
                                        <span className="nav-link fw-bold" aria-current="page">
                                            Location
                                        </span>
                                    </li>
                                    <li onClick={() => setUrl('family')}
                                        className={url == 'family' ? active : ''}
                                        style={{ transform: url == 'family' ? 'translate(0px,29px)' : '' }}>
                                        <span className="nav-link fw-bold" aria-current="page"
                                        >My Family
                                        </span>
                                    </li>
                                    <li onClick={() => setUrl('chat')}
                                        className={url == 'chat' ? active : ''}
                                        style={{ transform: url == 'chat' ? 'translate(0px,29px)' : '' }}>
                                        <span className="nav-link fw-bold" aria-current="page"
                                        >Chat
                                        </span>
                                    </li>
                                    <li onClick={() => setUrl('settings')}
                                        className={url == 'settings' ? active : ''}
                                        style={{ transform: url == 'settings' ? 'translate(0px,29px)' : '' }}>
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
                    <Divider  className="border border-2"/>
                    {
                        url == 'claims' ? <Claim /> :
                            url == 'location' ? <Location /> :
                                url == 'family' ? <MyFamily /> :
                                    url == 'chat' ? <Chat /> :
                                        url == 'settings' ? <Setting /> :
                                            url == 'logout' ? <Location /> :   ''
                    }
                </section>
            </div>
        </Navigation>
    )
}