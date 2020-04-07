import React from "react"
import Sidebar from "../../components/Navigation/Sidebar/Sidebar"

const Layout = (props) => {
    return (
        <React.Fragment>
            <Sidebar />
            <main>{props.children}</main>
        </React.Fragment>
    )
}

export default Layout
