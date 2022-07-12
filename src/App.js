import './App.css';
import HomePage from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SuccessPage from "./components/Payment/Success";
import FailurePage from "./components/Payment/Failure";
import CancelPage from "./components/Payment/Cancel";


function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/success">
                        <SuccessPage/>
                    </Route>
                    <Route exact path="/failure">
                        <FailurePage/>
                    </Route>
                    <Route exact path="/cancel">
                        <CancelPage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
