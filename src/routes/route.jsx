import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import {Dashboard} from "../pages/Dashboard"
import { Display } from "../pages/Display";
import {Caller } from "../pages/Caller";
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
      <Route path="/caller/:kitchen_id">
        <Caller/>
      </Route>
      <Route path="/display/:branch_id">
        <Display />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
