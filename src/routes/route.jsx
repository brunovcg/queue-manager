import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Display } from "../pages/Display";
import { Kitchen } from "../pages/Kitchen";
import { NotFound } from "../pages/Notfound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
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

export default Routes;
