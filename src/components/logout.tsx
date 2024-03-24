import { Button } from "@mui/material"

export const Logout = () => {
    return (
        <main className="m-auto">
            <div className="bg-primary p-2 rounded">
                <p className="text-white">Are you sure you want to Logout?</p>
                <div className="modal-footer">
                    <Button className="text-white border border-2 fw-bold" variant="container">
                        Yes
                    </Button>
                </div>
            </div>
        </main>
    )
}