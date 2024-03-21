import {FileCopyRounded, Group, Home, Message, People, Person, ReportRounded, Settings } from "@material-ui/icons"
import { useState } from "react"

export const AdminNavigation = () => {
    const [activeNav, setActiveNav] = useState('home');
    const activeIconClass = 'fs-1 text-white m-1 bg-primary rounded-circle p-1 border border-2 border-white';
    const inactiveIconClass = 'fs-1 text-white m-1 bg-danger rounded-circle p-1 border border-2 border-white';
    const activeClass = 'border-bottom border-2 fw-bolder p-1 d-block';
    return (
        <main className="sticky-top">
            <nav className="bg-primary text-white p-2">
                <div className="fw-bold"><Person className="fs-1 rounded-circle text-dark p-1 bg-white" /> user name</div>
            </nav>
            <div className="modal-footer" style={{ transform: 'translate(0px,-25px)' }}>
                <Home className={activeNav == 'home' ? activeIconClass : inactiveIconClass} />
                <Group className={activeNav == 'partner' ? activeIconClass : inactiveIconClass} />
                <People className={activeNav == 'users' ? activeIconClass : inactiveIconClass} />
                <FileCopyRounded className={activeNav == 'cases' ? activeIconClass : inactiveIconClass} />
                <ReportRounded className={activeNav == 'report' ? activeIconClass : inactiveIconClass} />
                <Message className={activeNav == 'chart' ? activeIconClass : inactiveIconClass} />
                <Settings className={activeNav == 'settings' ? activeIconClass : inactiveIconClass} />
            </div>
            {/*  sidebar navigation*/}
            <section className="row col-12 m-auto" style={{ cursor: 'pointer' }}>
                <section className={"col-1 card p-0 rounded-0"}>
                    <div className="m-2 text-center" onClick={() => setActiveNav('home')}>
                        <span><Home />
                            <small className={activeNav == 'home' ? activeClass : 'd-block'}>Home</small>
                        </span>
                    </div>
                    <div className="m-2 text-center" onClick={() => setActiveNav('partner')}>
                        <span>
                            <Group />
                            <small className={activeNav == 'partner' ? activeClass : 'd-block'}>Partner</small>
                        </span>
                    </div>
                    <div className="m-2 text-center" onClick={() => setActiveNav('users')}>
                        <span><People />
                            <small className={activeNav == 'users' ? activeClass : 'd-block'}>Users</small>
                        </span>
                    </div>
                    <div className="m-2 text-center" onClick={() => setActiveNav('cases')}>
                        <span><FileCopyRounded />
                            <small className={activeNav == 'cases' ? activeClass : 'd-block'}>Manage cases</small>
                        </span>
                    </div>
                    <div className="m-2 text-center" onClick={() => setActiveNav('report')}>
                        <span><ReportRounded /> 
                        <small className={activeNav == 'report' ? activeClass : 'd-block'}>Report</small>
                        </span>
                    </div>
                    <div className="m-2 text-center" onClick={() => setActiveNav('chart')}>
                        <Message />
                        <small className={activeNav == 'chart' ? activeClass : 'd-block'}>Chart</small>
                    </div>
                    <div className="m-2 text-center" onClick={() => setActiveNav('settings')}>
                        <span>
                            <Settings />
                            <small className={activeNav == 'settings' ? activeClass : 'd-block'}>Settings</small>
                        </span>
                    </div>
                </section>
                <section className={"col-11 border-0 overflow-auto card"}>
                    Home
                </section>
            </section>
        </main>
    )
}