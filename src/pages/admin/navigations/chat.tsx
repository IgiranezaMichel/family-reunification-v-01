import { Person, Send } from "@material-ui/icons"
import { Avatar } from "@mui/material"

export const Chat = () => {
    return (
        <main className="container-md h-100 overflow-hidden">
            <section className="row h-100">
                <div className="col-3 bg-primary h-100 overflow-auto">
                    <div>
                        <input type="search" placeholder="search .." className="form-control mt-3" />
                    </div>
                    <section className="overflow-auto">
                    <div className="d-flex m-1 border-bottom p-1">
                        <Avatar  className="card"/> <div className="card bg-transparent border-0 mx-1 justify-content-center"><b>Michael</b></div>
                    </div>
                    <div className="d-flex m-1 border-bottom p-1">
                        <Avatar  className="card"/> <div className="card bg-transparent border-0 mx-1 justify-content-center"><b>Michael</b></div>
                    </div>
                    </section>
                </div>
                <div className="col-9 p-0">
                    <div className="p-3  bg-primary"><Person /> Name</div>
                    <section className="h-75 p-2 overflow-auto mb-3" >
                        <p className="bg-primary col-8 rounded p-2 d-flex justify-content-center">
                                <Avatar/>
                            <div className="p-2">
                                Certainly! To dynamically change the context value, you typically need to define a function within your context provider that updates the context state. Consumers of the context can then use this function to update the context value. Here's how you can modify your context provider to include such a function:
                            </div>
                        </p>
                        <p className="bg-primary col-8 rounded p-2 d-flex float-end">
                            <div className="">
                                <Avatar />
                            </div>
                            <div className="p-2">
                                Certainly! To dynamically change the context value, you typically need to define a function within your context provider that updates the context state. Consumers of the context can then use this function to update the context value. Here's how you can modify your context provider to include such a function:
                            </div>
                        </p>
    
                    </section>
                    <div className="d-flex" style={{ transform: 'translate(0px,-15px)' }}>
                        <input type="text" className="form-control" placeholder='message ...' />
                        <div className="p-1">
                            <Send />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}