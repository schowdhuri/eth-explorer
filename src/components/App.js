import React from "react";

import Dashboard from "./DashboardContainer";

import "../sass/index.scss";


const App = () => {
    return <React.Fragment>
        <nav className="navbar">
            <div className="container">
                <a className="navbar__brand" href="#">EthExplorer</a>
            </div>
        </nav>
        <Dashboard />
    </React.Fragment>;
};

export default App;
