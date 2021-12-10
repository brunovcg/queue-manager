import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import {Dashboard} from "../pages/Dashboard"
import { Display } from "../pages/Display";
import {Chamador } from "../pages/Chamador";
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
      <Route path="/chamador">
        <Chamador/>
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
