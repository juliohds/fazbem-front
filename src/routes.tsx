import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Institutional from "./pages/institutional";
import VoceVoluntario from "./pages/vocevoluntario";
import MapaCompra from "./pages/MapaCompra";
import TimeLine from "./pages/timeline";

import Cadastro from "./pages/cadastro";

import Login from "./pages/login";
// import { Col } from "reactstrap";

// If your app is big + you have routes with a lot of components, you should consider
// code-splitting your routes! If you bundle stuff up with Webpack, I recommend `react-loadable`.
//
// $ yarn add react-loadable
// $ yarn add --dev @types/react-loadable
//
// The given `pages/` directory provides an example of a directory structure that's easily
// code-splittable.

const notFound: any = () => {
  return <div>not found</div>;
};

const Routes: React.SFC = () => (
  <div>
    <Header />
    <Switch>
      <Route exact={true} path="/" component={Institutional} />
      <Route path="/entrar" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/voce-voluntario" component={VoceVoluntario} />
      <Route path="/mapacompra" component={MapaCompra} />
      <Route path="/timeline" component={TimeLine} />

      {/*<Route path="/teams" component={TeamsPage} />
      <Route path="/home" component={IndexPage} /> */}
      <Route component={notFound} />
    </Switch>
  </div>
);

export default Routes;
