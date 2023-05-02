import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin"> </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter