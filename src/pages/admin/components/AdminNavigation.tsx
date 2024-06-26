import {ExitToApp, FileCopyRounded, Group, Home, Message, People, Person, ReportRounded, Settings } from "@material-ui/icons"
import {useEffect, useState } from "react"
import { AdminHome } from "../navigations/home";
import { Partner } from "../navigations/partner";
import { Customers } from "../navigations/customer";
import { Cases } from "../navigations/cases";
import { Report } from "../navigations/report";
import { Chat } from "../navigations/chat";
import { AdminBody } from "./AdminBody";
import { ModalContext} from "../../../context.tsx/ModalContext";
import { ModalSwitch } from "../../../typedefs/default/ModalSwitch";
import { Setting } from "../../../components/settings";
import { Logout } from "../../../components/logout";

export const AdminNavigation = () => {
    const [activeNav, setActiveNav] = useState('home');
    const userDetail=JSON.parse(String(localStorage.getItem('user')));
    const activeIconClass = 'fs-1 text-white m-1 bg-primary rounded-circle p-1 border border-2 border-white';
    const inactiveIconClass = 'fs-1 text-white m-1 bg-danger rounded-circle p-1 border border-2 border-white';
    const activeClass = 'border-bottom border-4 border-primary fw-bolder p-1 d-block';
    const [myContext]=useState<ModalSwitch>({openAdd:false,openDelete:false,openUpdate:false});
    useEffect(()=>{
    
    },[myContext])
    return (
        <ModalContext.Provider value={myContext}>
            <AdminBody active={activeNav}/>
            <section>
            <section className="sticky-top top-0">
            <nav className="bg-primary text-white p-2">
                <div className="fw-bold"><Person className="fs-1 rounded-circle text-dark p-1 bg-white mx-2" />{userDetail.name}</div>
            </nav>
            <div className="modal-footer" style={{ transform: 'translate(0px,-25px)' }}>
                <Home className={activeNav == 'home' ? activeIconClass : inactiveIconClass} />
                <Group className={activeNav == 'partner' ? activeIconClass : inactiveIconClass} />
                <People className={activeNav == 'users' ? activeIconClass : inactiveIconClass} />
                <FileCopyRounded className={activeNav == 'cases' ? activeIconClass : inactiveIconClass} />
                <ReportRounded className={activeNav == 'report' ? activeIconClass : inactiveIconClass} />
                <Message className={activeNav == 'chat' ? activeIconClass : inactiveIconClass} />
                <Settings className={activeNav == 'settings' ? activeIconClass : inactiveIconClass} />
            </div>
            
            </section>
            
            {/*  sidebar navigation*/}
            <section className="row col-12 m-auto" style={{ cursor: 'pointer' }}>
                <section className={"col-1 card border-0 border-end p-0 rounded-0"}>
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
                    <div className="m-2 text-center" onClick={() => setActiveNav('chat')}>
                        <Message />
                        <small className={activeNav == 'chat' ? activeClass : 'd-block'}>chat</small>
                    </div>
                    <div className="m-2 text-center" onClick={() => setActiveNav('settings')}>
                        <span>
                            <Settings />
                            <small className={activeNav == 'settings' ? activeClass : 'd-block'}>Settings</small>
                        </span>
                    </div>
                    <div className="m-2 text-center" onClick={() => setActiveNav('logout')}>
                        <span>
                            <ExitToApp />
                            <small className={activeNav == 'logout' ? activeClass : 'd-block'}>logout</small>
                        </span>
                    </div>
                </section>
                <section className={"col-11 border-0 overflow-auto card"}>
                {
                activeNav=='home'?
                <AdminHome/>
                :activeNav=='partner'?<Partner/>
                :activeNav=='users'?<Customers/>
                :activeNav=='cases'?<Cases/>
                :activeNav=='report'?<Report/>
                :activeNav=='chat'?<Chat/>
                :activeNav=='logout'?<Logout/>
                :<Setting/>
                }
                </section>
            </section>
            </section>
        </ModalContext.Provider>
    )
}