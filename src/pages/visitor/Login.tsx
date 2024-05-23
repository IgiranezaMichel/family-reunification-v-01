import { Link } from 'react-router-dom'
export const Login = () => {
    const userCredential={
        id:216
    }
    localStorage.setItem('user',JSON.stringify(userCredential));
    return (
        <>
            <div className="card p-0 rounded-0 border-0 bg-dark text-white sticky-top sticky-bottom overflow-auto w-100 h-100" style={{
                position: 'fixed'
                , width: '100%', height: '100%',
                backgroundImage: 'url(/Visitor/Login.png)', backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'
            }}>
                <nav
                    className="navbar navbar-expand-md navbar-dark sticky-top">
                    <Link className="navbar-brand" to={'/'}>
                        <img src="/Visitor/unhcr.jpeg" alt="" className="rounded-circle" />
                    </Link>
                    <div>
                        <span className="display-5 d-block fw-bolder text-light">
                            UNHCR
                        </span>
                        <span className="text-light fw-bold">
                            The Refugee Agency
                        </span>
                    </div>

                </nav>
                <div className="d-flex justify-content-center align-items-center col-md-6 h-75">
                    <div className="col-8">
                        <span className="fw-bolder display-5 d-block text-center" style={{ fontFamily: "cursive" }}>Login</span>
                        <div className="mt-5">
                            <span className="fw-bolder">Username</span>
                            <div className="mb-3">
                                <input type="text" className="w-100 border-bottom border-0 border-white border-3 bg-transparent" />
                            </div>
                            <span className="fw-bolder">Password</span>
                            <div className="mb-3">
                                <input type="text" className="w-100 border-bottom border-0 border-white border-3 bg-transparent" />
                            </div>
                            <span>Don't have account ? <Link to={'/signup'} className='fw-bolder text-success'>Sign up</Link></span>
                            <button type="button" className="btn btn-outline-light d-block w-100">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}