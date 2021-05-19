import React from "react";
import CardListing from "./components/card-listing/card-listing";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CardDetails from "./components/card-details/card-details";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={CardListing}/>
                    <Route path="/card/:cardId" exact component={CardDetails}/>
                    <Route>404 Not Found</Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App