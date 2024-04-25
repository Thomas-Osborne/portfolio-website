import { Outlet } from "react-router-dom"

export default function SiteLayout() {
    return (
        <>
            <h1>Site layout</h1>
            <Outlet />
        </>
    )
}