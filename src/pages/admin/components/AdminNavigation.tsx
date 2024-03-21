import { DoubleArrow, FileCopyRounded, Group, Home, Message, NavigateBefore, People, Person, ReportRounded, Settings } from "@material-ui/icons"
import { useState } from "react"

export const AdminNavigation = () => {
    const [activeNav, setActiveNav] = useState('home');
    const [navIsOpen,setNavIsOpen]=useState(true);
    const activeIconClass = 'fs-1 text-white m-1 bg-primary rounded-circle p-1 border border-2 border-white';
    const inactiveIconClass = 'fs-1 text-white m-1 bg-danger rounded-circle p-1 border border-2 border-white';
    const activeClass = 'border-bottom border-2 fw-bolder p-1';
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
            <section className="row col-12 m-auto" style={{cursor:'pointer'}}>
                <section className={navIsOpen?"col-2 card rounded-0":"col-1"} style={{transform:navIsOpen?'translate(0px,0px)':'translate(-150px,0px)',width:navIsOpen?'':'200px'}}>
                    <div className="m-2" onClick={()=>setActiveNav('home')}>
                        <span className={activeNav == 'home' ? activeClass : ''}><Home />Home</span>
                        <span className="float-end" onClick={()=>setNavIsOpen(!navIsOpen)}>
                            {navIsOpen?<NavigateBefore/>:<DoubleArrow/>} 
                        </span>
                    </div>
                    <div className="m-2" onClick={()=>setActiveNav('partner')}>
                        <span className={activeNav == 'partner' ? activeClass : ''}><Group /> Partner</span>
                    </div>
                    <div className="m-2" onClick={()=>setActiveNav('users')}>
                        <span className={activeNav == 'users' ? activeClass : ''}><People /> Users</span>
                    </div>
                    <div className="m-2" onClick={()=>setActiveNav('cases')}>
                        <span className={activeNav == 'cases' ? activeClass : ''}><FileCopyRounded /> Manage cases</span>
                    </div>
                    <div className="m-2" onClick={()=>setActiveNav('report')}>
                        <span className={activeNav == 'report' ? activeClass : ''}><ReportRounded /> Report</span>
                    </div>
                    <div className="m-2" onClick={()=>setActiveNav('chart')}>
                        <span className={activeNav == 'chart' ? activeClass : ''}><Message /> Chart</span></div>
                    <div className="m-2" onClick={()=>setActiveNav('settings')}>
                        <span className={activeNav == 'settings' ? activeClass : ''}><Settings /> Settings</span>
                    </div>
                </section>
                <section className={navIsOpen?"col-10 overflow-auto card":"col-11 overflow-auto card"}>
                    a
                </section>
            </section>
        </main>
    )
}