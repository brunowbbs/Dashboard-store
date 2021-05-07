import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={Dashboard} path="/dashboard"/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
