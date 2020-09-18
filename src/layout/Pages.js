import React from "react";
import { Route, Switch } from "react-router-dom";

const HomePage = React.lazy(() => import("../pages/HomePage/HomePage"));

const ErorrPage = React.lazy(() => import("../pages/ErrorPage"));

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route component={ErorrPage} />
      </Switch>
    </>
  );
};

export default Page;
