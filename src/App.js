import React from "react";
import CardListing from "./components/CardListing";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import CardDetails from "./components/CardDetails";

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