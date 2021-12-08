import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import {Dashboard} from "../pages/Dashboard"
import { Display } from "../pages/Display";
import { Kitchen } from "../pages/Kitchen";
import { NotFound } from "../pages/Notfound";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route  path="/dashboard">
        <Dashboard />
        </Route>
      <Route path="/kitchen">
        <Kitchen />
      </Route>
      <Route path="/display">
        <Display />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
